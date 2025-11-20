import { createStore } from 'vuex';
import modulesData from '../data/modules.json';
import { modulesForTrack, trackOptions } from '../data/tracks';

const STORAGE_KEY = 'onboarding-academy-state';

const DEFAULT_TRACK = trackOptions[0].id;

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
    name: persisted.user?.name || 'Nachwuchskraft',
    track: persisted.user?.track || DEFAULT_TRACK
  }),
  mutations: {
    setName(state, name) {
      state.name = name;
    },
    setTrack(state, track) {
      state.track = track;
    }
  },
  getters: {
    name: (state) => state.name,
    track: (state) => state.track
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
      const module = modulesData.find((m) => m.id === moduleId);
      if (!module || (module.tracks && !module.tracks.includes(rootState.user.track))) return 0;
      const total = module.lessons.length;
      if (!total) return 0;
      const completed = module.lessons.filter((lesson) =>
        state.completedLessons.includes(`${moduleId}:${lesson.id}`)
      ).length;
      return Math.round((completed / total) * 100);
    },
    overallProgress: (state, getters, rootState) => {
      const trackModules = modulesForTrack(rootState.user.track);
      const totalLessons = trackModules.reduce((sum, module) => sum + module.lessons.length, 0);
      if (!totalLessons) return 0;
      const trackLessonKeys = trackModules.flatMap((module) =>
        module.lessons.map((lesson) => `${module.id}:${lesson.id}`)
      );
      const completed = state.completedLessons.filter((key) => trackLessonKeys.includes(key)).length;
      return Math.round((completed / totalLessons) * 100);
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
      quiz: state.quiz
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  });
};

export default createStore({
  modules: {
    user,
    progress,
    quiz
  },
  plugins: [persistPlugin]
});
