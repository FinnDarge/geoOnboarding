<script setup>
import { computed } from 'vue';

const props = defineProps({
  badge: {
    type: Object,
    required: true
  },
  earned: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  }
});

const sizeClasses = computed(() => ({
  'badge-card--small': props.size === 'small',
  'badge-card--medium': props.size === 'medium',
  'badge-card--large': props.size === 'large'
}));
</script>

<template>
  <div class="badge-card" :class="[sizeClasses, { 'badge-card--locked': !earned }]">
    <div class="badge-card__image-wrapper">
      <img :src="badge.image" :alt="badge.name" class="badge-card__image" />
      <div v-if="!earned" class="badge-card__lock">🔒</div>
    </div>
    <div class="badge-card__info">
      <h4 class="badge-card__name">{{ badge.name }}</h4>
      <p class="badge-card__description">{{ badge.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.badge-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.2s ease, background 0.2s ease;
}

.badge-card:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.04);
}

.badge-card--locked {
  opacity: 0.5;
}

.badge-card--locked .badge-card__image {
  filter: grayscale(100%) brightness(0.6);
}

.badge-card__image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge-card__image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: filter 0.3s ease;
}

.badge-card__lock {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2em;
  opacity: 0.9;
}

.badge-card--locked:hover .badge-card__lock {
  opacity: 1;
}

.badge-card__info {
  text-align: center;
  width: 100%;
}

.badge-card__name {
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
}

.badge-card__description {
  margin: 0;
  font-size: 12px;
  color: var(--color-text-muted);
  line-height: 1.4;
}

/* Size variants */
.badge-card--small .badge-card__image-wrapper {
  max-width: 60px;
}

.badge-card--small .badge-card__name {
  font-size: 12px;
}

.badge-card--small .badge-card__description {
  font-size: 11px;
}

.badge-card--medium .badge-card__image-wrapper {
  max-width: 100px;
}

.badge-card--large .badge-card__image-wrapper {
  max-width: 140px;
}

.badge-card--large .badge-card__name {
  font-size: 16px;
}

.badge-card--large .badge-card__description {
  font-size: 13px;
}
</style>
