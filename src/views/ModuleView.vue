<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import modules from '../data/modules.json';
import LessonRenderer from '../components/LessonRenderer.vue';
import ProgressBar from '../components/ProgressBar.vue';

const route = useRoute();
const router = useRouter();
const store = useStore();

const moduleData = computed(() => modules.find((m) => m.id === route.params.id));

const lessons = computed(() => moduleData.value?.lessons || []);

const selectedLessonId = computed(() => route.query.lesson || lessons.value[0]?.id);

const selectedLesson = computed(() => lessons.value.find((lesson) => lesson.id === selectedLessonId.value));

const selectLesson = (lessonId) => {
  router.replace({
    name: 'module',
    params: { id: route.params.id },
    query: { lesson: lessonId }
  });
};

const moduleProgress = computed(() => store.getters['progress/moduleProgress'](route.params.id));

const isLessonCompleted = (lessonId) => store.getters['progress/isLessonCompleted'](route.params.id, lessonId);

const markCompleted = () => {
  if (!selectedLesson.value) return;
  store.commit('progress/completeLesson', {
    moduleId: route.params.id,
    lessonId: selectedLesson.value.id
  });
};
</script>

<template>
  <div v-if="moduleData" class="module-view">
    <aside class="module-view__sidebar card">
      <div class="module-view__header">
        <h2>{{ moduleData.title }}</h2>
        <ProgressBar :value="moduleProgress" />
      </div>
      <ul class="lesson-list">
        <li
          v-for="lesson in lessons"
          :key="lesson.id"
          :class="['lesson-list__item', { 'lesson-list__item--active': lesson.id === selectedLessonId }]"
          @click="selectLesson(lesson.id)"
        >
          <div>
            <p class="lesson-title">{{ lesson.title }}</p>
            <p class="lesson-type">{{ lesson.type }}</p>
          </div>
          <span class="lesson-status" :class="{ 'lesson-status--done': isLessonCompleted(lesson.id) }">
            {{ isLessonCompleted(lesson.id) ? '✓' : '' }}
          </span>
        </li>
      </ul>
    </aside>
    <section class="module-view__content card" v-if="selectedLesson">
      <LessonRenderer :lesson="selectedLesson" :module-id="moduleData.id" @complete="markCompleted" />
    </section>
    <section v-else class="module-view__content card">
      <p>Select a lesson to get started.</p>
    </section>
  </div>
  <div v-else class="card">
    Module not found.
  </div>
</template>

<style scoped>
.module-view {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 24px;
}

.module-view__sidebar {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: fit-content;
  position: sticky;
  top: 20px;
}

.lesson-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.lesson-list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.02);
  cursor: pointer;
  transition: background 0.2s ease;
}

.lesson-list__item--active {
  background: rgba(255, 255, 255, 0.06);
}

.lesson-title {
  margin: 0;
  font-weight: 600;
}

.lesson-type {
  margin: 4px 0 0;
  text-transform: capitalize;
  color: var(--color-text-muted);
  font-size: 12px;
}

.lesson-status {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: grid;
  place-items: center;
}

.lesson-status--done {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.module-view__content {
  min-height: 60vh;
}

@media (max-width: 960px) {
  .module-view {
    grid-template-columns: 1fr;
  }

  .module-view__sidebar {
    position: relative;
    top: auto;
  }
}
</style>
