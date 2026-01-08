<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import BadgeShowcase from '../components/BadgeShowcase.vue';

const store = useStore();
const userName = computed(() => store.getters['user/name'] || store.state.user.name);
</script>

<template>
  <div class="achievements">
    <section class="card achievements__hero">
      <div>
        <p class="eyebrow">Deine Reise 🏆</p>
        <h1>Erfolge & Abzeichen</h1>
        <p class="muted">
          Verfolge deinen Fortschritt und zeige deine Errungenschaften. Jedes Abzeichen repräsentiert einen Meilenstein in deiner Lernreise durch JavaScript, Vue und Geo-Entwicklung.
        </p>
      </div>
    </section>

    <section class="card">
      <BadgeShowcase size="medium" filter="all" :group-by-track="true" />
    </section>
  </div>
</template>

<style scoped>
.achievements {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.achievements__hero h1 {
  margin-top: 8px;
  margin-bottom: 12px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 12px;
  color: var(--color-text-muted);
}

.muted {
  color: var(--color-text-muted);
  max-width: 680px;
  line-height: 1.6;
}
</style>
