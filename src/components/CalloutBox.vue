<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'info',
    validator: (value) => ['info', 'success', 'warning'].includes(value)
  },
  title: {
    type: String,
    default: ''
  }
});

const config = {
  info: {
    emoji: '💡',
    color: '#3b82f6',
    bgColor: 'rgba(59, 130, 246, 0.1)'
  },
  success: {
    emoji: '✅',
    color: '#22c55e',
    bgColor: 'rgba(34, 197, 94, 0.1)'
  },
  warning: {
    emoji: '⚠️',
    color: '#f59e0b',
    bgColor: 'rgba(245, 158, 11, 0.1)'
  }
};

const currentConfig = config[props.type];
</script>

<template>
  <div class="callout-box" :style="{ 
    borderLeftColor: currentConfig.color, 
    backgroundColor: currentConfig.bgColor 
  }">
    <div class="callout-header">
      <span class="callout-emoji">{{ currentConfig.emoji }}</span>
      <h4 v-if="title" class="callout-title">{{ title }}</h4>
    </div>
    <div class="callout-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.callout-box {
  border-left: 4px solid;
  border-radius: var(--radius-md);
  padding: 16px 20px;
  margin: 24px 0;
  backdrop-filter: blur(10px);
}

.callout-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.callout-emoji {
  font-size: 1.2rem;
}

.callout-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
}

.callout-content {
  color: var(--color-text-muted);
  line-height: 1.6;
}

.callout-content :deep(p) {
  margin: 8px 0;
}

.callout-content :deep(p:first-child) {
  margin-top: 0;
}

.callout-content :deep(p:last-child) {
  margin-bottom: 0;
}

.callout-content :deep(ul),
.callout-content :deep(ol) {
  margin: 8px 0;
  padding-left: 24px;
}

.callout-content :deep(li) {
  margin-bottom: 6px;
}

.callout-content :deep(code) {
  background: rgba(0, 0, 0, 0.2);
  padding: 2px 6px;
  border-radius: 4px;
}

.callout-content :deep(strong) {
  color: var(--color-text);
  font-weight: 600;
}
</style>
