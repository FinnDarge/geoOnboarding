<script setup>
import { computed, reactive, watch } from 'vue';

const props = defineProps({
  tasksId: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['completed']);

const STORAGE_PREFIX = 'onboarding-tasks-';
const taskFiles = import.meta.glob('../data/tasks/*.json', { eager: true });

const tasks = computed(() => taskFiles[`../data/tasks/${props.tasksId}.json`]?.default || []);

const state = reactive({});

const loadState = () => {
  if (typeof window === 'undefined') return;
  const stored = localStorage.getItem(`${STORAGE_PREFIX}${props.tasksId}`);
  if (stored) Object.assign(state, JSON.parse(stored));
};

loadState();

const toggle = (taskId) => {
  state[taskId] = !state[taskId];
};

watch(
  state,
  () => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(`${STORAGE_PREFIX}${props.tasksId}`, JSON.stringify(state));
    if (tasks.value.length && tasks.value.every((task) => state[task.id])) {
      emit('completed');
    }
  },
  { deep: true, immediate: true }
);
</script>

<template>
  <div class="task-list">
    <div v-for="task in tasks" :key="task.id" class="task-item" @click="toggle(task.id)">
      <input type="checkbox" :checked="state[task.id]" readonly />
      <span>{{ task.text }}</span>
    </div>
  </div>
</template>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.03);
  margin-bottom: 10px;
  cursor: pointer;
}

.task-item input {
  width: 16px;
  height: 16px;
}
</style>
