import { createStore } from 'vuex';
import { getModulesForTrack, getModuleById } from '../data/moduleUtils';

const STORAGE_KEY = 'onboarding-academy-state';

const persisted = (() => {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (error) {
    return {};
  }
})();

const user = {
  namespaced: true,
  state: () => ({
    name: persisted.user?.name || 'Nachwuchskraft',
    hasSeenIntro: persisted.user?.hasSeenIntro || false
  }),
  mutations: {
    setName(state, name) {
      state.name = name;
    },
    markIntroSeen(state) {
      state.hasSeenIntro = true;
    }
  },
  getters: {
    name: (state) => state.name,
    hasSeenIntro: (state) => state.hasSeenIntro
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
    moduleProgress: (state) => (moduleId) => {
      // Get module by ID directly, not filtered by active tracks
      const module = getModuleById(moduleId);
      if (!module) return 0;
      const total = module.lessons.length;
      if (!total) return 0;
      const completed = module.lessons.filter((lesson) =>
        state.completedLessons.includes(`${moduleId}:${lesson.id}`)
      ).length;
      return Math.round((completed / total) * 100);
    },
    overallProgress: (state, getters, rootState) => {
      const activeModules = getModulesForTrack(rootState.tracks.enabled);
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
    enabled: persisted.tracks?.enabled || []
  }),
  mutations: {
    toggleTrack(state, trackId) {
      const index = state.enabled.indexOf(trackId);
      if (index > -1) {
        state.enabled.splice(index, 1);
      } else {
        state.enabled.push(trackId);
      }
    },
    resetTrack(state) {
      state.enabled = [];
    }
  },
  getters: {
    enabledTracks: (state) => state.enabled,
    isTrackEnabled: (state) => (trackId) => state.enabled.includes(trackId),
    hasEnabledTracks: (state) => state.enabled.length > 0,
    isModuleActive: (state) => (moduleId) => {
      const module = getModuleById(moduleId);
      if (!module) return false;
      return module.track === 'common' || state.enabled.includes(module.track);
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

const badges = {
  namespaced: true,
  state: () => ({
    earned: persisted.badges?.earned || [],
    lastEarned: null,
    viewedBadges: persisted.badges?.viewedBadges || []
  }),
  mutations: {
    earnBadge(state, badgeId) {
      if (!state.earned.includes(badgeId)) {
        state.earned.push(badgeId);
        state.lastEarned = badgeId;
      }
    },
    markBadgeViewed(state, badgeId) {
      if (!state.viewedBadges.includes(badgeId)) {
        state.viewedBadges.push(badgeId);
      }
      if (state.lastEarned === badgeId) {
        state.lastEarned = null;
      }
    },
    resetBadges(state) {
      state.earned = [];
      state.lastEarned = null;
      state.viewedBadges = [];
    }
  },
  getters: {
    hasBadge: (state) => (badgeId) => state.earned.includes(badgeId),
    earnedBadges: (state) => state.earned,
    unviewedBadges: (state) => state.earned.filter(id => !state.viewedBadges.includes(id)),
    unviewedCount: (state, getters) => getters.unviewedBadges.length,
    lastEarnedBadge: (state) => state.lastEarned
  }
};

const persistPlugin = (store) => {
  store.subscribe((mutation, state) => {
    if (typeof window === 'undefined') return;
    const payload = {
      user: state.user,
      progress: state.progress,
      quiz: state.quiz,
      tracks: state.tracks,
      badges: state.badges
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  });
};

export default createStore({
  modules: {
    user,
    progress,
    quiz,
    tracks,
    badges
  },
  plugins: [persistPlugin]
});
