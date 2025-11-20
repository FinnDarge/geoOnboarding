<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import modules from '../data/modules.json';
import ModuleCard from '../components/ModuleCard.vue';
import ProgressBar from '../components/ProgressBar.vue';

const store = useStore();
const overallProgress = computed(() => store.getters['progress/overallProgress']);

const moduleProgress = (moduleId) => store.getters['progress/moduleProgress'](moduleId);

const nextLesson = computed(() => {
  for (const module of modules) {
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
      <ModuleCard v-for="module in modules" :key="module.id" :module="module" :progress="moduleProgress(module.id)" />
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