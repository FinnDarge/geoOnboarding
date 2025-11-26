<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { getAllBadges } from '../data/badges';

const props = defineProps({
  title: {
    type: [String, Object],
    default: 'Dashboard'
  },
  userName: {
    type: [String, Object],
    default: 'Nachwuchskraft'
  }
});

const store = useStore();

const earnedCount = computed(() => store.getters['badges/earnedBadges'].length);
const totalBadges = getAllBadges().length;
const unviewedCount = computed(() => store.getters['badges/unviewedCount']);
const hasUnviewed = computed(() => unviewedCount.value > 0);

const navigateToAchievements = () => {
  window.location.href = '/achievements';
};
</script>

<template>
  <header class="topbar">
    <div class="topbar__title">{{ props.title }}</div>
    <div class="topbar__actions">
      <button class="badge-indicator" @click="navigateToAchievements" :class="{ 'badge-indicator--unviewed': hasUnviewed }">
        <span class="badge-indicator__icon">🏆</span>
        <span class="badge-indicator__count">{{ earnedCount }}/{{ totalBadges }}</span>
        <span v-if="hasUnviewed" class="badge-indicator__dot"></span>
      </button>
      <div class="topbar__user">
        <div class="avatar">{{ String(props.userName).charAt(0) }}</div>
        <span>{{ props.userName }}</span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(15, 23, 42, 0.85);
  position: sticky;
  top: 0;
  z-index: 10;
}

.topbar__title {
  font-size: 20px;
  font-weight: 600;
}

.topbar__actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.badge-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--color-text-muted);
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.badge-indicator:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  color: var(--color-text);
  transform: translateY(-1px);
}

.badge-indicator--unviewed {
  border-color: var(--color-accent);
  background: rgba(34, 197, 94, 0.1);
}

.badge-indicator__icon {
  font-size: 18px;
  line-height: 1;
}

.badge-indicator__count {
  font-size: 13px;
  font-weight: 600;
}

.badge-indicator__dot {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 8px;
  height: 8px;
  background: var(--color-accent);
  border-radius: 50%;
  border: 2px solid rgba(15, 23, 42, 0.85);
  animation: badgePulse 2s ease-in-out infinite;
}

@keyframes badgePulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
}

.topbar__user {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-text-muted);
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 999px;
  background: var(--color-accent-soft);
  color: var(--color-accent);
  display: grid;
  place-items: center;
  font-weight: 700;
}
</style>
