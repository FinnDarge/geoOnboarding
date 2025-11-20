<script setup>
import { computed } from 'vue';
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

const triggerCompletion = () => emit('complete');
</script>

<template>
  <div class="lesson">
    <header class="lesson__header">
      <p class="eyebrow">Lesson</p>
      <h2>{{ lesson.title }}</h2>
    </header>

    <div v-if="lesson.type === 'markdown'" class="lesson__body">
      <div v-html="markdownHtml"></div>
      <CoordinateTransformer v-if="shouldShowCoordinateTransformer" />
    </div>

    <div v-else-if="lesson.type === 'external-link'" class="lesson__body">
      <p class="muted">Review the external resource and take notes in your journal.</p>
      <a :href="lesson.url" class="primary-btn" target="_blank" rel="noreferrer">Open resource ↗</a>
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
      <p>Lesson type not supported yet.</p>
    </div>

    <button v-if="shouldShowCompleteButton" class="ghost-btn" @click="triggerCompletion">Mark as completed</button>
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
}

.lesson__type {
  color: var(--color-text-muted);
}
</style>
