<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { getModulesForTrack, tracks } from '../data/moduleUtils';
import ModuleCard from '../components/ModuleCard.vue';
import ProgressBar from '../components/ProgressBar.vue';

const store = useStore();
const overallProgress = computed(() => store.getters['progress/overallProgress']);

const moduleProgress = (moduleId) => store.getters['progress/moduleProgress'](moduleId);

const selectedTrack = computed(() => store.getters['tracks/selectedTrack']);
const trackSelectionEnabled = computed(() => moduleProgress('geo-basics') === 100);
const specializationTracks = computed(() => tracks.filter((track) => track.id !== 'common'));
const availableModules = computed(() => getModulesForTrack(selectedTrack.value));

const trackNarrative = {
  masterportal: {
    summary: 'Double down on the Masterportal stack: configuration-first mapping with Vue extensions.',
    testing: 'Testing drills focus on Mocha/Chai/Sinon coverage for widgets, store mutations, and layer adapters.',
    capstone: 'The capstone expects a bespoke control plus layered WMS/WFS content wired like production.'
  },
  polar: {
    summary: 'Specialize in cryosphere data flows: polar projections, ice products, and remote sensing pipelines.',
    testing: 'Testing drills emphasize reprojection helpers, polar WMTS/WMS requests, and time-enabled raster checks.',
    capstone: 'The capstone asks for a polar viewer that blends ice layers with vessel or station context and time controls.'
  }
};

const nextLesson = computed(() => {
  for (const module of availableModules.value) {
    for (const lesson of module.lessons) {
      const completed = store.getters['progress/isLessonCompleted'](module.id, lesson.id);
      if (!completed) {
        return { module, lesson };
      }
    }
  }
  return null;
});

const showResetConfirm = ref(false);

const resetProgress = () => {
  if (showResetConfirm.value) {
    store.commit('progress/resetProgress');
    store.commit('quiz/resetQuizResults');
    store.commit('tracks/resetTrack');
    showResetConfirm.value = false;
  } else {
    showResetConfirm.value = true;
    setTimeout(() => {
      showResetConfirm.value = false;
    }, 3000);
  }
};

const selectTrack = (trackId) => {
  if (!trackSelectionEnabled.value) return;
  store.commit('tracks/selectTrack', trackId);
};
</script>

<template>
  <div class="dashboard">
    <section class="card dashboard__hero">
      <div>
        <p class="eyebrow">Hi, {{ store.getters['user/name'] || store.state.user.name }} 👋</p>
        <h1>Welcome to the Onboarding Academy</h1>
        <p class="muted">
          Track your progress across JavaScript, Vue and geo development topics. Complete the core modules, pick a
          specialization, and keep moving toward your capstone.
        </p>
      </div>
      <div class="dashboard__progress">
        <ProgressBar label="Overall Progress" :value="overallProgress" />
        <button @click="resetProgress" class="reset-btn" :class="{ 'reset-btn--confirm': showResetConfirm }">
          {{ showResetConfirm ? 'Click again to confirm' : 'Reset Progress' }}
        </button>
      </div>
    </section>

    <section class="card dashboard__tracks">
      <div class="dashboard__tracks-header">
        <div>
          <p class="eyebrow">Choose your track</p>
          <h3>Specialize after Geo Basics</h3>
          <p class="muted">
            Finish Geo Basics to unlock a track. Your dashboard and progress will adapt to the modules in the selected
            specialization.
          </p>
        </div>
        <div class="dashboard__track-status" :class="{ 'dashboard__track-status--ready': trackSelectionEnabled }">
          {{ trackSelectionEnabled ? 'Track unlocked' : 'Complete Geo Basics to unlock' }}
        </div>
      </div>
      <div class="dashboard__track-grid">
        <div
          v-for="track in specializationTracks"
          :key="track.id"
          class="track-card"
          :class="{
            'track-card--selected': selectedTrack === track.id,
            'track-card--locked': !trackSelectionEnabled
          }"
        >
          <div class="track-card__header">
            <div>
              <p class="eyebrow">{{ track.title }}</p>
              <h4>{{ track.description }}</h4>
            </div>
            <span v-if="selectedTrack === track.id" class="track-card__badge">Selected</span>
          </div>
          <p class="muted track-card__copy">{{ trackNarrative[track.id]?.summary }}</p>
          <ul class="track-card__bullets muted">
            <li>
              <strong>Testing:</strong>
              {{ trackNarrative[track.id]?.testing }}
            </li>
            <li>
              <strong>Capstone:</strong>
              {{ trackNarrative[track.id]?.capstone }}
            </li>
          </ul>
          <p class="muted">{{ track.modules.length }} modules</p>
          <button
            class="track-card__button"
            :disabled="!trackSelectionEnabled || selectedTrack === track.id"
            @click="selectTrack(track.id)"
          >
            {{ selectedTrack === track.id ? 'Current track' : trackSelectionEnabled ? 'Select this track' : 'Locked' }}
          </button>
        </div>
      </div>
    </section>

    <section class="card dashboard__next" v-if="nextLesson">
      <div>
        <p class="eyebrow">Next recommended lesson</p>
        <h3>{{ nextLesson.module.title }}</h3>
        <p class="muted">{{ nextLesson.lesson.title }}</p>
      </div>
      <RouterLink
        class="next-btn"
        :to="{ name: 'module', params: { id: nextLesson.module.id }, query: { lesson: nextLesson.lesson.id } }"
      >
        Continue →
      </RouterLink>
    </section>

    <section class="dashboard__modules">
      <ModuleCard
        v-for="module in availableModules"
        :key="module.id"
        :module="module"
        :progress="moduleProgress(module.id)"
      />
    </section>
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.dashboard__hero {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
}

.dashboard__hero h1 {
  margin-top: 8px;
  margin-bottom: 12px;
}

.dashboard__progress {
  min-width: 240px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.reset-btn {
  padding: 8px 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background: transparent;
  color: var(--color-text-muted);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.reset-btn:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.2);
  color: var(--color-text);
}

.reset-btn--confirm {
  background: rgba(239, 68, 68, 0.15);
  border-color: rgba(239, 68, 68, 0.4);
  color: #f87171;
}

.reset-btn--confirm:hover {
  background: rgba(239, 68, 68, 0.25);
  border-color: rgba(239, 68, 68, 0.6);
}

.dashboard__modules {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  align-items: stretch;
}

.dashboard__tracks {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.dashboard__tracks-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.dashboard__track-status {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text-muted);
  font-weight: 600;
}

.dashboard__track-status--ready {
  background: var(--color-accent-soft);
  color: var(--color-accent);
}

.dashboard__track-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

.track-card {
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-lg);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: rgba(255, 255, 255, 0.02);
}

.track-card--selected {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 1px var(--color-accent-soft);
}

.track-card--locked {
  opacity: 0.6;
}

.track-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.track-card__copy {
  margin: 0;
}

.track-card__bullets {
  margin: 0;
  padding-left: 16px;
  display: grid;
  gap: 6px;
  font-size: 14px;
}

.track-card__badge {
  padding: 6px 10px;
  border-radius: 999px;
  background: var(--color-accent-soft);
  color: var(--color-accent);
  font-size: 12px;
  font-weight: 700;
}

.track-card__button {
  align-self: flex-start;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.2s ease;
}

.track-card__button[disabled] {
  cursor: not-allowed;
  opacity: 0.6;
}

.track-card__button:not([disabled]):hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 12px;
  color: var(--color-text-muted);
}

.muted {
  color: var(--color-text-muted);
  max-width: 560px;
}

.dashboard__next {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 20px;
}

.dashboard__next h3 {
  margin: 4px 0;
  font-size: 18px;
}

.dashboard__next .muted {
  font-size: 14px;
}

.next-btn {
  padding: 10px 16px;
  border-radius: 999px;
  background: var(--color-accent);
  color: #0f172a;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  white-space: nowrap;
  transition: transform 0.2s ease;
}

.next-btn:hover {
  transform: translateX(4px);
}
</style>