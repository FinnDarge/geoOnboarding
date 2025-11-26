<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { getAllBadges } from '../data/badges';

const store = useStore();

const allBadges = getAllBadges();
const earnedBadgeIds = computed(() => store.getters['badges/earnedBadges']);

const earnedBadges = computed(() => 
  allBadges
    .filter(badge => earnedBadgeIds.value.includes(badge.id))
    .slice(0, 6) // Show max 6 recent badges
);

const earnedCount = computed(() => earnedBadgeIds.value.length);
const totalCount = computed(() => allBadges.length);
const hasMore = computed(() => earnedCount.value > 6);
</script>

<template>
  <RouterLink to="/achievements" class="badge-mini-showcase">
    <div class="badge-mini-showcase__label">
      <span class="badge-icon">🏆</span>
      <span class="badge-count">{{ earnedCount }}/{{ totalCount }}</span>
    </div>
    <div v-if="earnedBadges.length > 0" class="badge-mini-showcase__badges">
      <div 
        v-for="badge in earnedBadges" 
        :key="badge.id" 
        class="badge-mini"
        :title="badge.name"
      >
        <img :src="badge.image" :alt="badge.name" class="badge-mini__image" />
      </div>
      <div v-if="hasMore" class="badge-mini badge-mini--more">
        <span class="badge-mini__plus">+{{ earnedCount - 6 }}</span>
      </div>
    </div>
    <div v-else class="badge-mini-showcase__empty">
      <span class="empty-text">No badges yet</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.badge-mini-showcase {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  text-decoration: none;
  transition: all 0.2s ease;
}

.badge-mini-showcase:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-1px);
}

.badge-mini-showcase__label {
  display: flex;
  align-items: center;
  gap: 6px;
  padding-right: 10px;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.badge-icon {
  font-size: 16px;
}

.badge-count {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text);
  white-space: nowrap;
}

.badge-mini-showcase__badges {
  display: flex;
  align-items: center;
  gap: 6px;
}

.badge-mini {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4px;
  transition: transform 0.2s ease;
  flex-shrink: 0;
}

.badge-mini:hover {
  transform: scale(1.1);
}

.badge-mini__image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
}

.badge-mini--more {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(34, 197, 94, 0.1);
  border-color: var(--color-accent);
}

.badge-mini__plus {
  font-size: 11px;
  font-weight: 700;
  color: var(--color-accent);
}

.badge-mini-showcase__empty {
  padding: 0;
}

.empty-text {
  font-size: 12px;
  color: var(--color-text-muted);
  font-style: italic;
}
</style>
