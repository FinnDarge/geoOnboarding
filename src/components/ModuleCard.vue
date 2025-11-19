<script setup>
import ProgressBar from './ProgressBar.vue';

const props = defineProps({
  module: {
    type: Object,
    required: true
  },
  progress: {
    type: Number,
    default: 0
  }
});
</script>

<template>
  <RouterLink :to="{ name: 'module', params: { id: props.module.id } }" class="module-card">
    <div class="module-card__icon">{{ props.module.icon }}</div>
    <div class="module-card__body">
      <h3>{{ props.module.title }}</h3>
      <p>{{ props.module.description }}</p>
      <ProgressBar :value="props.progress" />
    </div>
  </RouterLink>
</template>

<style scoped>
.module-card {
  display: flex;
  gap: 18px;
  padding: 20px;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  text-decoration: none;
  color: inherit;
  box-shadow: var(--shadow-soft);
  transition: transform 0.2s ease, background 0.2s ease;
}

.module-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.05);
}

.module-card__icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  display: grid;
  place-items: center;
  font-size: 28px;
}

.module-card h3 {
  margin: 0;
}

.module-card p {
  margin: 6px 0 12px;
  color: var(--color-text-muted);
}
</style>
