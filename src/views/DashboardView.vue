<script setup>
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { getModulesForTrack, tracks, getAllModules } from '../data/moduleUtils';
import { getBadgeForModule, badgeDefinitions } from '../data/badges';
import ModuleCard from '../components/ModuleCard.vue';
import ProgressBar from '../components/ProgressBar.vue';
import BadgeMiniShowcase from '../components/BadgeMiniShowcase.vue';

const store = useStore();
const overallProgress = computed(() => store.getters['progress/overallProgress']);

const moduleProgress = (moduleId) => store.getters['progress/moduleProgress'](moduleId);

const enabledTracks = computed(() => store.getters['tracks/enabledTracks']);

// All common modules must be completed to unlock specialization tracks
const commonModules = ['js-fundamentals', 'vue-basics', 'geo-basics'];
const trackUnlocked = computed(() => 
  commonModules.every(moduleId => moduleProgress(moduleId) === 100)
);

const specializationTracks = computed(() => tracks.filter((track) => track.id !== 'common'));
const availableModules = computed(() => getModulesForTrack(enabledTracks.value));
const isTrackEnabled = (trackId) => store.getters['tracks/isTrackEnabled'](trackId);

const nextLesson = computed(() => {
  for (const module of availableModules.value) {
    for (const lesson of module.lessons) {
      const completed = store.getters['progress/isLessonCompleted'](module.id, lesson.id);
      if (!completed) {
        return { module, lesson };
      }
    }
  }
  return null;
});

const showResetConfirm = ref(false);

const completeCommonModules = () => {
  const commonModuleIds = ['js-fundamentals', 'vue-basics', 'geo-basics'];
  commonModuleIds.forEach(moduleId => {
    const module = availableModules.value.find(m => m.id === moduleId);
    if (module) {
      module.lessons.forEach(lesson => {
        store.commit('progress/completeLesson', {
          moduleId: moduleId,
          lessonId: lesson.id
        });
      });
    }
  });
};

const resetProgress = () => {
  if (showResetConfirm.value) {
    store.commit('progress/resetProgress');
    store.commit('quiz/resetQuizResults');
    store.commit('tracks/resetTrack');
    store.commit('badges/resetBadges');
    
    // Clear task list data from localStorage
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('onboarding-tasks-')) {
        localStorage.removeItem(key);
      }
    });
    
    showResetConfirm.value = false;
    
    // Reload page to reset task list components
    window.location.reload();
  } else {
    showResetConfirm.value = true;
    setTimeout(() => {
      showResetConfirm.value = false;
    }, 3000);
  }
};

const toggleTrack = (trackId) => {
  if (!trackUnlocked.value) return;
  store.commit('tracks/toggleTrack', trackId);
};

// Badge awarding logic - watch ALL module completion (not just active tracks)
watch(
  () => {
    // Check ALL modules from ALL tracks (common, masterportal, polar)
    const allModules = getAllModules();
    console.log('[BADGE DEBUG] All modules:', allModules.map(m => m.id));
    return allModules.map(m => ({ id: m.id, progress: moduleProgress(m.id) }));
  },
  (modules) => {
    console.log('[BADGE DEBUG] Module progress check:', modules);
    modules.forEach(({ id, progress }) => {
      console.log(`[BADGE DEBUG] Module ${id}: ${progress}%`);
      if (progress === 100) {
        const badge = getBadgeForModule(id);
        console.log(`[BADGE DEBUG] Module ${id} complete! Badge:`, badge);
        if (badge && !store.getters['badges/hasBadge'](badge.id)) {
          console.log(`[BADGE DEBUG] Earning badge: ${badge.id}`);
          store.commit('badges/earnBadge', badge.id);
        } else if (badge) {
          console.log(`[BADGE DEBUG] Badge ${badge.id} already earned`);
        }
      }
    });
  },
  { deep: true, immediate: true }
);

// Badge awarding for track completion - check ALL tracks regardless of enabled status
watch(
  () => getAllModules().map(m => moduleProgress(m.id)),
  () => {
    // Check both masterportal and polar tracks
    console.log('[TRACK BADGE DEBUG] Checking track completion...');
    ['masterportal', 'polar'].forEach(track => {
      const trackBadge = badgeDefinitions[`${track}-track`];
      console.log(`[TRACK BADGE DEBUG] Track: ${track}, Badge:`, trackBadge);
      if (trackBadge && trackBadge.requiredModules) {
        const moduleStatuses = trackBadge.requiredModules.map(moduleId => ({
          id: moduleId,
          progress: moduleProgress(moduleId)
        }));
        console.log(`[TRACK BADGE DEBUG] ${track} required modules:`, moduleStatuses);
        const allComplete = trackBadge.requiredModules.every(moduleId => moduleProgress(moduleId) === 100);
        console.log(`[TRACK BADGE DEBUG] ${track} all complete:`, allComplete);
        if (allComplete && !store.getters['badges/hasBadge'](trackBadge.id)) {
          console.log(`[TRACK BADGE DEBUG] Earning track badge: ${trackBadge.id}`);
          store.commit('badges/earnBadge', trackBadge.id);
        } else if (allComplete) {
          console.log(`[TRACK BADGE DEBUG] Track badge ${trackBadge.id} already earned`);
        }
      }
    });
  },
  { deep: true, immediate: true }
);
</script>

<template>
  <div class="dashboard">
    <section class="card dashboard__hero">
      <div>
        <p class="eyebrow">Hi, {{ store.getters['user/name'] || store.state.user.name }} 👋</p>
        <h1>Willkommen in der Onboarding Academy</h1>
        <p class="muted">
          Verfolge deinen Fortschritt in JavaScript, Vue und Geo-Entwicklungsthemen. Schließe die Grundlagenmodule ab, wähle eine Spezialisierung und arbeite dich zum Abschlussprojekt vor.
        </p>
      </div>
      <div class="dashboard__progress">
        <ProgressBar label="Gesamtfortschritt" :value="overallProgress" />
        <BadgeMiniShowcase />
        <div class="dashboard__actions">
          <button @click="completeCommonModules" class="debug-btn" title="Debug: Alle Grundlagenmodule abschließen">
            🚀 Springe zur Spezialisierung
          </button>
          <button @click="resetProgress" class="reset-btn" :class="{ 'reset-btn--confirm': showResetConfirm }">
            {{ showResetConfirm ? 'Klicke erneut zum Bestätigen' : 'Fortschritt zurücksetzen' }}
          </button>
        </div>
      </div>
    </section>

    <section class="card dashboard__tracks">
      <div class="dashboard__tracks-header">
        <div>
          <p class="eyebrow">Wähle deine Spezialisierungen</p>
          <h3>Schalte Tracks nach Geo-Grundlagen frei</h3>
          <p class="muted">
            Schließe die Geo-Grundlagen ab, um Spezialisierungs-Tracks freizuschalten. Du kannst beide Tracks aktivieren und parallel oder nacheinander bearbeiten.
          </p>
        </div>
        <div class="dashboard__track-status" :class="{ 'dashboard__track-status--ready': trackUnlocked }">
          {{ trackUnlocked ? 'Tracks freigeschaltet' : 'Schließe alle Grundlagenmodule ab zum Freischalten' }}
        </div>
      </div>
      <div class="dashboard__track-grid">
        <div
          v-for="track in specializationTracks"
          :key="track.id"
          class="track-card"
          :class="{
            'track-card--selected': isTrackEnabled(track.id),
            'track-card--locked': !trackUnlocked
          }"
        >
          <div class="track-card__header">
            <div>
              <p class="eyebrow">{{ track.title }}</p>
              <h4>{{ track.description }}</h4>
            </div>
            <span v-if="isTrackEnabled(track.id)" class="track-card__badge">Aktiv</span>
          </div>
          <p class="muted">{{ track.modules.length }} Module</p>
          <button
            class="track-card__button"
            :class="{ 'track-card__button--active': isTrackEnabled(track.id) }"
            :disabled="!trackUnlocked"
            @click="toggleTrack(track.id)"
          >
            {{ isTrackEnabled(track.id) ? 'Deaktivieren' : trackUnlocked ? 'Track aktivieren' : 'Gesperrt' }}
          </button>
        </div>
      </div>
    </section>

    <section class="card dashboard__next" v-if="nextLesson">
      <div>
        <p class="eyebrow">Nächste empfohlene Lektion</p>
        <h3>{{ nextLesson.module.title }}</h3>
        <p class="muted">{{ nextLesson.lesson.title }}</p>
      </div>
      <RouterLink
        class="next-btn"
        :to="{ name: 'module', params: { id: nextLesson.module.id }, query: { lesson: nextLesson.lesson.id } }"
      >
        Weiter →
      </RouterLink>
    </section>

    <section class="dashboard__modules">
      <ModuleCard
        v-for="module in availableModules"
        :key="module.id"
        :module="module"
        :progress="moduleProgress(module.id)"
      />
    </section>
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.dashboard__hero {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
}

.dashboard__hero h1 {
  margin-top: 8px;
  margin-bottom: 12px;
}

.dashboard__progress {
  min-width: 240px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.dashboard__actions {
  display: flex;
  gap: 8px;
}

.debug-btn {
  flex: 1;
  padding: 8px 14px;
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 8px;
  background: rgba(34, 197, 94, 0.1);
  color: var(--color-accent);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.debug-btn:hover {
  background: rgba(34, 197, 94, 0.2);
  border-color: rgba(34, 197, 94, 0.5);
  transform: translateY(-1px);
}

.reset-btn {
  flex: 1;
  padding: 8px 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background: transparent;
  color: var(--color-text-muted);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.reset-btn:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.2);
  color: var(--color-text);
}

.reset-btn--confirm {
  background: rgba(239, 68, 68, 0.15);
  border-color: rgba(239, 68, 68, 0.4);
  color: #f87171;
}

.reset-btn--confirm:hover {
  background: rgba(239, 68, 68, 0.25);
  border-color: rgba(239, 68, 68, 0.6);
}

.dashboard__modules {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  align-items: stretch;
}

.dashboard__tracks {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.dashboard__tracks-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.dashboard__track-status {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text-muted);
  font-weight: 600;
}

.dashboard__track-status--ready {
  background: var(--color-accent-soft);
  color: var(--color-accent);
}

.dashboard__track-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

.track-card {
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-lg);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: rgba(255, 255, 255, 0.02);
}

.track-card--selected {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 1px var(--color-accent-soft);
}

.track-card--locked {
  opacity: 0.6;
}

.track-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.track-card__badge {
  padding: 6px 10px;
  border-radius: 999px;
  background: var(--color-accent-soft);
  color: var(--color-accent);
  font-size: 12px;
  font-weight: 700;
}

.track-card__button {
  align-self: flex-start;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.2s ease;
}

.track-card__button--active {
  background: var(--color-accent);
  color: #0f172a;
  border-color: var(--color-accent);
}

.track-card__button--active:hover {
  background: #16a34a;
  border-color: #16a34a;
}

.track-card__button[disabled] {
  cursor: not-allowed;
  opacity: 0.6;
}

.track-card__button:not([disabled]):hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 12px;
  color: var(--color-text-muted);
}

.muted {
  color: var(--color-text-muted);
  max-width: 560px;
}

.dashboard__next {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 20px;
}

.dashboard__next h3 {
  margin: 4px 0;
  font-size: 18px;
}

.dashboard__next .muted {
  font-size: 14px;
}

.next-btn {
  padding: 10px 16px;
  border-radius: 999px;
  background: var(--color-accent);
  color: #0f172a;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  white-space: nowrap;
  transition: transform 0.2s ease;
}

.next-btn:hover {
  transform: translateX(4px);
}
</style>