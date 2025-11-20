import { createStore } from 'vuex';
import { getModulesForTrack, getModuleById } from '../data/moduleUtils';

const STORAGE_KEY = 'onboarding-academy-state';

const persisted = (() => {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (error) {
    console.warn('Failed to parse persisted state', error);
    return {};
  }
})();

const user = {
  namespaced: true,
  state: () => ({
    name: persisted.user?.name || 'Nachwuchskraft'
  }),
  mutations: {
    setName(state, name) {
      state.name = name;
    }
  },
  getters: {
    name: (state) => state.name
  }
};

const progress = {
  namespaced: true,
  state: () => ({
    completedLessons: persisted.progress?.completedLessons || []
  }),
  mutations: {
    completeLesson(state, { moduleId, lessonId }) {
      const key = `${moduleId}:${lessonId}`;
      if (!state.completedLessons.includes(key)) {
        state.completedLessons.push(key);
      }
    },
    resetProgress(state) {
      state.completedLessons = [];
    }
  },
  getters: {
    isLessonCompleted: (state) => (moduleId, lessonId) =>
      state.completedLessons.includes(`${moduleId}:${lessonId}`),
    moduleProgress: (state, getters, rootState) => (moduleId) => {
      const activeModules = getModulesForTrack(rootState.tracks.selected);
      const module = activeModules.find((m) => m.id === moduleId);
      if (!module) return 0;
      const total = module.lessons.length;
      if (!total) return 0;
      const completed = module.lessons.filter((lesson) =>
        state.completedLessons.includes(`${moduleId}:${lesson.id}`)
      ).length;
      return Math.round((completed / total) * 100);
    },
    overallProgress: (state, getters, rootState) => {
      const activeModules = getModulesForTrack(rootState.tracks.selected);
      const totalLessons = activeModules.reduce((sum, module) => sum + module.lessons.length, 0);
      if (!totalLessons) return 0;
      const completed = activeModules.reduce((sum, module) => {
        const completedLessons = module.lessons.filter((lesson) =>
          state.completedLessons.includes(`${module.id}:${lesson.id}`)
        ).length;
        return sum + completedLessons;
      }, 0);
      return Math.round((completed / totalLessons) * 100);
    }
  }
};

const tracks = {
  namespaced: true,
  state: () => ({
    selected: persisted.tracks?.selected || null
  }),
  mutations: {
    selectTrack(state, trackId) {
      state.selected = trackId;
    },
    resetTrack(state) {
      state.selected = null;
    }
  },
  getters: {
    selectedTrack: (state) => state.selected,
    hasSelectedTrack: (state) => Boolean(state.selected),
    isModuleActive: (state) => (moduleId) => {
      const module = getModuleById(moduleId);
      if (!module) return false;
      return module.track === 'common' || module.track === state.selected;
    }
  }
};

const quiz = {
  namespaced: true,
  state: () => ({
    results: persisted.quiz?.results || {}
  }),
  mutations: {
    saveResult(state, { quizId, score, total }) {
      state.results[quizId] = { score, total };
    },
    resetQuizResults(state) {
      state.results = {};
    }
  }
};

const persistPlugin = (store) => {
  store.subscribe((mutation, state) => {
    if (typeof window === 'undefined') return;
    const payload = {
      user: state.user,
      progress: state.progress,
      quiz: state.quiz,
      tracks: state.tracks
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  });
};

export default createStore({
  modules: {
    user,
    progress,
    quiz,
    tracks
  },
  plugins: [persistPlugin]
});
