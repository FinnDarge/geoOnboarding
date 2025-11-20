<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { modulesForTrack, trackOptions } from '../data/tracks';
import ModuleCard from '../components/ModuleCard.vue';
import ProgressBar from '../components/ProgressBar.vue';

const store = useStore();
const overallProgress = computed(() => store.getters['progress/overallProgress']);
const activeTrack = computed(() => store.getters['user/track']);

const moduleProgress = (moduleId) => store.getters['progress/moduleProgress'](moduleId);

const filteredModules = computed(() => modulesForTrack(activeTrack.value));

const nextLesson = computed(() => {
  for (const module of filteredModules.value) {
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

const selectTrack = (trackId) => {
  store.commit('user/setTrack', trackId);
};

const resetProgress = () => {
  if (showResetConfirm.value) {
    store.commit('progress/resetProgress');
    store.commit('quiz/resetQuizResults');
    showResetConfirm.value = false;
  } else {
    showResetConfirm.value = true;
    setTimeout(() => {
      showResetConfirm.value = false;
    }, 3000);
  }
};
</script>

<template>
  <div class="dashboard">
    <section class="card dashboard__track">
      <div>
        <p class="eyebrow">Choose your path</p>
        <h2>Pick the track that matches your deployment</h2>
        <p class="muted">
          Masterportal focuses on civic deployments and configuration-heavy workflows. Polar focuses on a lightweight client
          you configure directly from the repository. The testing and capstone modules below adapt to whichever track you
          choose.
        </p>
      </div>
      <div class="track-options">
        <label v-for="track in trackOptions" :key="track.id" class="track-option card" :class="{ 'track-option--active': track.id === activeTrack }">
          <div class="track-option__header">
            <input type="radio" :value="track.id" :checked="track.id === activeTrack" @change="selectTrack(track.id)" />
            <div>
              <p class="eyebrow">{{ track.name }}</p>
              <h3>{{ track.summary }}</h3>
            </div>
          </div>
          <p class="muted">{{ track.expectations }}</p>
        </label>
      </div>
    </section>

    <section class="card dashboard__hero">
      <div>
        <p class="eyebrow">Hi, {{ store.getters['user/name'] || store.state.user.name }} 👋</p>
        <h1>Welcome to the Onboarding Academy</h1>
        <p class="muted">
          Track your progress across JavaScript, Vue and geo development topics. Work through each module at your
          own pace and mark lessons complete as you go.
        </p>
      </div>
      <div class="dashboard__progress">
        <ProgressBar label="Overall Progress" :value="overallProgress" />
        <button @click="resetProgress" class="reset-btn" :class="{ 'reset-btn--confirm': showResetConfirm }">
          {{ showResetConfirm ? 'Click again to confirm' : 'Reset Progress' }}
        </button>
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
        v-for="module in filteredModules"
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

.dashboard__track {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.track-options {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.track-option {
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: border-color 0.2s ease, background 0.2s ease;
}

.track-option--active {
  border-color: var(--color-accent);
  background: rgba(255, 255, 255, 0.04);
}

.track-option__header {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.track-option h3 {
  margin: 2px 0 4px;
  font-size: 16px;
}

.track-option input {
  margin-top: 6px;
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