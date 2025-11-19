<script setup>
const props = defineProps({
  value: {
    type: Number,
    default: 0
  },
  label: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="progress">
    <div class="progress__label" v-if="props.label">{{ props.label }}</div>
    <div class="progress__track">
      <div class="progress__value" :style="{ width: `${Math.min(props.value, 100)}%` }"></div>
    </div>
    <span class="progress__percent">{{ Math.round(props.value) }}%</span>
  </div>
</template>

<style scoped>
.progress {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.progress__label {
  font-size: 12px;
  color: var(--color-text-muted);
}

.progress__track {
  width: 100%;
  height: 10px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  overflow: hidden;
}

.progress__value {
  height: 100%;
  background: linear-gradient(90deg, var(--color-accent), #4ade80);
  border-radius: 999px;
  transition: width 0.3s ease;
}

.progress__percent {
  font-size: 12px;
  color: var(--color-text-muted);
}
</style>
