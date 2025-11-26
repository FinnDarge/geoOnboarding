<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { getBadgeForModule } from '../data/badges';
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

const store = useStore();

const progressPercent = computed(() => Math.round(props.progress));
const isCompleted = computed(() => progressPercent.value === 100);

const moduleBadge = computed(() => getBadgeForModule(props.module.id));
const hasBadge = computed(() => {
  if (!moduleBadge.value) return false;
  return store.getters['badges/hasBadge'](moduleBadge.value.id);
});
</script>

<template>
  <RouterLink :to="{ name: 'module', params: { id: props.module.id } }" class="module-card">
    <div class="module-card__icon">{{ props.module.icon }}</div>
    <h3 class="module-card__title">{{ props.module.title }}</h3>
    <p class="module-card__description">{{ props.module.description }}</p>

    <!-- Badge overlay when module completed -->
    <div v-if="isCompleted && hasBadge && moduleBadge" class="module-card__badge">
      <img :src="moduleBadge.image" :alt="moduleBadge.name" class="module-card__badge-image" />
    </div>

    <!-- Spacer ensures progress section sticks to the bottom even with short descriptions -->
    <div class="module-card__progress" aria-label="Module progress">
      <ProgressBar :value="progressPercent" />
      <span class="module-card__percentage">{{ progressPercent }}%</span>
    </div>
  </RouterLink>
</template>

<style scoped>
/* The card itself is a flex column so content aligns consistently regardless of text length */
.module-card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px;
  min-height: 280px;
  height: 100%;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  text-decoration: none;
  color: inherit;
  box-shadow: var(--shadow-soft);
  transition: transform 0.2s ease, background 0.2s ease;
  position: relative;
  overflow: hidden;
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

.module-card__title {
  margin: 0;
  font-size: 20px;
  line-height: 1.3;
}

/* Line clamp keeps every description to two lines for consistent heights */
.module-card__description {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 14px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Margin-top auto pins the progress row to the bottom so it aligns between cards */
.module-card__progress {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin-top: auto;
}

.module-card__progress :deep(.progress) {
  flex: 1;
  gap: 0;
}

.module-card__progress :deep(.progress__label),
.module-card__progress :deep(.progress__percent) {
  display: none;
}

.module-card__percentage {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
}

.module-card__badge {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 48px;
  height: 48px;
  animation: badgePop 0.5s ease-out;
}

.module-card__badge-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
}

@keyframes badgePop {
  0% {
    transform: scale(0) rotate(-180deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.2) rotate(10deg);
  }
  100% {
    transform: scale(1) rotate(0);
    opacity: 1;
  }
}
</style>