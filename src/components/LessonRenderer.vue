<script setup>
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { marked } from 'marked';
import Quiz from './Quiz.vue';
import TaskList from './TaskList.vue';
import MapPlayground from './MapPlayground.vue';
import CoordinateTransformer from './CoordinateTransformer.vue';

const props = defineProps({
  lesson: {
    type: Object,
    required: true
  },
  moduleId: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['complete']);

const store = useStore();

const isCompleted = computed(() => 
  store.getters['progress/isLessonCompleted'](props.moduleId, props.lesson.id)
);

const markdownFiles = import.meta.glob('../data/content/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
});

const markdownHtml = computed(() => {
  if (props.lesson.type !== 'markdown') return '';
  const key = `../data/content/${props.lesson.content}`;
  const file = markdownFiles[key];
  return file ? marked.parse(file) : 'Content coming soon.';
});

const manualCompletionTypes = ['markdown', 'external-link', 'geo-playground'];

const shouldShowCompleteButton = computed(() => manualCompletionTypes.includes(props.lesson.type));

const shouldShowCoordinateTransformer = computed(() => props.lesson.id === 'projections-theory');

const shouldShowProjectionMap = computed(() => props.lesson.id === 'projections-theory');

const triggerCompletion = () => {
  if (!isCompleted.value) {
    emit('complete');
  }
};
</script>

<template>
  <div class="lesson">
    <header class="lesson__header">
      <p class="eyebrow">Lektion</p>
      <h2>{{ lesson.title }}</h2>
    </header>

    <div v-if="lesson.type === 'markdown'" class="lesson__body">
      <div v-html="markdownHtml"></div>
      <CoordinateTransformer v-if="shouldShowCoordinateTransformer" />
      <MapPlayground v-if="shouldShowProjectionMap" config-id="projection_demo" />
    </div>

    <div v-else-if="lesson.type === 'external-link'" class="lesson__body">
      <p class="muted">Schaue dir die externe Ressource an und mache Notizen in deinem Journal.</p>
      <a :href="lesson.url" class="primary-btn" target="_blank" rel="noreferrer">Ressource öffnen ↗</a>
    </div>

    <Quiz
      v-else-if="lesson.type === 'quiz'"
      :quiz-id="lesson.quizId"
      :module-id="moduleId"
      :lesson-id="lesson.id"
      @passed="triggerCompletion"
    />

    <MapPlayground v-else-if="lesson.type === 'geo-playground'" :config-id="lesson.configId" />

    <TaskList v-else-if="lesson.type === 'task-list'" :tasks-id="lesson.tasksId" @completed="triggerCompletion" />

    <div v-else class="lesson__body">
      <p>Lektionstyp noch nicht unterstützt.</p>
    </div>

    <button 
      v-if="shouldShowCompleteButton" 
      class="ghost-btn" 
      :class="{ 'ghost-btn--completed': isCompleted }"
      @click="triggerCompletion"
      :disabled="isCompleted"
    >
      {{ isCompleted ? '✓ Abgeschlossen' : 'Als abgeschlossen markieren' }}
    </button>
  </div>
</template>

<style scoped>
.lesson__header {
  margin-bottom: 16px;
}

.lesson__body {
  line-height: 1.6;
  color: var(--color-text);
}

.lesson__body :deep(h2),
.lesson__body :deep(h3) {
  color: #fff;
}

.lesson__body :deep(p) {
  color: var(--color-text-muted);
}

.ghost-btn {
  margin-top: 18px;
  transition: all 0.3s ease;
}

.ghost-btn--completed {
  background: var(--color-accent);
  color: #0f172a;
  border-color: var(--color-accent);
  cursor: default;
}

.ghost-btn:disabled {
  opacity: 1;
}

.lesson__type {
  color: var(--color-text-muted);
}
</style>
