<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { getAllBadges, getModuleBadges, getTrackBadges } from '../data/badges';
import BadgeCard from './BadgeCard.vue';

const store = useStore();

const props = defineProps({
  filter: {
    type: String,
    default: 'all',
    validator: (value) => ['all', 'earned', 'locked'].includes(value)
  },
  size: {
    type: String,
    default: 'medium'
  },
  groupByTrack: {
    type: Boolean,
    default: true
  }
});

const allBadges = getAllBadges();
const earnedBadgeIds = computed(() => store.getters['badges/earnedBadges']);

const getBadgesWithState = (badges) => {
  return badges.map(badge => ({
    ...badge,
    earned: earnedBadgeIds.value.includes(badge.id)
  }));
};

const filterBadges = (badges) => {
  if (props.filter === 'earned') {
    return badges.filter(b => b.earned);
  } else if (props.filter === 'locked') {
    return badges.filter(b => !b.earned);
  }
  return badges;
};

const commonBadges = computed(() => {
  const badges = getBadgesWithState(getModuleBadges().filter(b => b.track === 'common'));
  return filterBadges(badges);
});

const masterportalModuleBadges = computed(() => {
  const badges = getBadgesWithState(getModuleBadges().filter(b => b.track === 'masterportal'));
  return filterBadges(badges);
});

const polarModuleBadges = computed(() => {
  const badges = getBadgesWithState(getModuleBadges().filter(b => b.track === 'polar'));
  return filterBadges(badges);
});

const trackCompletionBadges = computed(() => {
  const badges = getBadgesWithState(getTrackBadges());
  return filterBadges(badges);
});

const displayBadges = computed(() => {
  const badges = getBadgesWithState(allBadges);
  return filterBadges(badges);
});

const earnedCount = computed(() => earnedBadgeIds.value.length);
const totalCount = computed(() => allBadges.length);
</script>

<template>
  <div class="badge-showcase">
    <div class="badge-showcase__header">
      <div>
        <h3 class="badge-showcase__title">Your Achievements</h3>
        <p class="badge-showcase__stats">
          {{ earnedCount }} / {{ totalCount }} badges earned
        </p>
      </div>
      <div class="badge-showcase__progress-ring">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <circle
            cx="30"
            cy="30"
            r="25"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            stroke-width="6"
          />
          <circle
            cx="30"
            cy="30"
            r="25"
            fill="none"
            stroke="var(--color-accent)"
            stroke-width="6"
            stroke-linecap="round"
            :stroke-dasharray="`${(earnedCount / totalCount) * 157} 157`"
            transform="rotate(-90 30 30)"
          />
          <text x="30" y="35" text-anchor="middle" font-size="14" font-weight="700" fill="var(--color-text)">
            {{ Math.round((earnedCount / totalCount) * 100) }}%
          </text>
        </svg>
      </div>
    </div>

    <div v-if="groupByTrack" class="badge-showcase__groups">
      <!-- Common Track Badges -->
      <div v-if="commonBadges.length > 0" class="badge-group">
        <h4 class="badge-group__title">Core Fundamentals</h4>
        <div class="badge-showcase__grid">
          <BadgeCard
            v-for="badge in commonBadges"
            :key="badge.id"
            :badge="badge"
            :earned="badge.earned"
            :size="size"
          />
        </div>
      </div>

      <!-- Masterportal Track Badges -->
      <div v-if="masterportalModuleBadges.length > 0" class="badge-group">
        <h4 class="badge-group__title">🏛️ Masterportal Specialization</h4>
        <div class="badge-showcase__grid">
          <BadgeCard
            v-for="badge in masterportalModuleBadges"
            :key="badge.id"
            :badge="badge"
            :earned="badge.earned"
            :size="size"
          />
        </div>
      </div>

      <!-- Polar Track Badges -->
      <div v-if="polarModuleBadges.length > 0" class="badge-group">
        <h4 class="badge-group__title">❄️ Polar Data Specialization</h4>
        <div class="badge-showcase__grid">
          <BadgeCard
            v-for="badge in polarModuleBadges"
            :key="badge.id"
            :badge="badge"
            :earned="badge.earned"
            :size="size"
          />
        </div>
      </div>

      <!-- Track Completion Badges -->
      <div v-if="trackCompletionBadges.length > 0" class="badge-group">
        <h4 class="badge-group__title">🏆 Track Mastery</h4>
        <div class="badge-showcase__grid badge-showcase__grid--large">
          <BadgeCard
            v-for="badge in trackCompletionBadges"
            :key="badge.id"
            :badge="badge"
            :earned="badge.earned"
            size="large"
          />
        </div>
      </div>
    </div>

    <div v-else class="badge-showcase__grid">
      <BadgeCard
        v-for="badge in displayBadges"
        :key="badge.id"
        :badge="badge"
        :earned="badge.earned"
        :size="size"
      />
    </div>

    <p v-if="displayBadges.length === 0 && !groupByTrack" class="badge-showcase__empty">
      No badges in this category yet. Keep learning to unlock achievements!
    </p>
  </div>
</template>

<style scoped>
.badge-showcase {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.badge-showcase__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.badge-showcase__title {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: var(--color-text);
}

.badge-showcase__stats {
  margin: 4px 0 0 0;
  font-size: 14px;
  color: var(--color-text-muted);
}

.badge-showcase__progress-ring {
  flex-shrink: 0;
}

.badge-showcase__groups {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.badge-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.badge-group__title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text);
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.badge-showcase__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
}

.badge-showcase__grid--large {
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
}

.badge-showcase__empty {
  text-align: center;
  color: var(--color-text-muted);
  padding: 40px 20px;
  font-size: 14px;
}

@media (max-width: 768px) {
  .badge-showcase__grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 12px;
  }
  
  .badge-showcase__grid--large {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
}
</style>
