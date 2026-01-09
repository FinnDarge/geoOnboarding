<script setup>
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { marked } from 'marked';
import Quiz from './Quiz.vue';
import TaskList from './TaskList.vue';
import MapPlayground from './MapPlayground.vue';
import CoordinateTransformer from './CoordinateTransformer.vue';
import CalloutBox from './CalloutBox.vue';

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

// Configure marked to allow HTML and improve formatting
marked.setOptions({
  breaks: true,
  gfm: true
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
  margin-top: 32px;
  margin-bottom: 16px;
}

.lesson__body :deep(h2) {
  font-size: 1.5rem;
  font-weight: 600;
  border-bottom: 2px solid var(--color-accent-soft);
  padding-bottom: 8px;
}

.lesson__body :deep(h3) {
  font-size: 1.2rem;
  font-weight: 500;
}

.lesson__body :deep(p) {
  color: var(--color-text-muted);
  margin-bottom: 16px;
  line-height: 1.7;
}

.lesson__body :deep(pre) {
  background: var(--color-bg-elevated);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  padding: 16px;
  margin: 16px 0;
  overflow-x: auto;
  line-height: 1.5;
}

.lesson__body :deep(code) {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9em;
}

.lesson__body :deep(pre code) {
  color: var(--color-text);
  background: none;
  padding: 0;
}

.lesson__body :deep(p code),
.lesson__body :deep(li code) {
  background: var(--color-accent-soft);
  color: var(--color-accent);
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 500;
}

.lesson__body :deep(ul),
.lesson__body :deep(ol) {
  margin: 16px 0;
  padding-left: 24px;
  color: var(--color-text-muted);
}

.lesson__body :deep(li) {
  margin-bottom: 8px;
  line-height: 1.6;
}

.lesson__body :deep(ul li) {
  list-style: none;
  position: relative;
}

.lesson__body :deep(ul li::before) {
  content: "▸";
  color: var(--color-accent);
  font-weight: bold;
  position: absolute;
  left: -20px;
}

.lesson__body :deep(strong) {
  color: var(--color-text);
  font-weight: 600;
}

.lesson__body :deep(hr) {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 32px 0;
}

.lesson__body :deep(blockquote) {
  border-left: 4px solid var(--color-accent);
  padding-left: 16px;
  margin: 16px 0;
  color: var(--color-text);
  font-style: italic;
}

.lesson__body :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 24px 0;
  background: var(--color-bg-elevated);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.lesson__body :deep(thead) {
  background: rgba(34, 197, 94, 0.1);
}

.lesson__body :deep(th) {
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  color: var(--color-text);
  border-bottom: 2px solid var(--color-accent);
  font-size: 0.95rem;
}

.lesson__body :deep(td) {
  padding: 12px 16px;
  color: var(--color-text-muted);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  line-height: 1.6;
}

.lesson__body :deep(tr:last-child td) {
  border-bottom: none;
}

.lesson__body :deep(tbody tr:hover) {
  background: rgba(255, 255, 255, 0.02);
}

.lesson__body :deep(td code) {
  background: rgba(0, 0, 0, 0.3);
  padding: 2px 6px;
  border-radius: 4px;
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
