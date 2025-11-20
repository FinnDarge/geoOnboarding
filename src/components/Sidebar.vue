<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import modules from '../data/modules.json';

const route = useRoute();

const navItems = computed(() => [
  { label: 'Dashboard', to: { name: 'dashboard' }, icon: '📊' },
  ...modules.map((module) => ({
    label: module.title,
    to: { name: 'module', params: { id: module.id } },
    icon: module.icon
  }))
]);

const isActive = (to) => {
  if (!to) return false;
  if (to.name === 'dashboard') {
    return route.name === 'dashboard';
  }
  return route.params.id === to.params?.id;
};
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__header">
      <div class="logo">🧭</div>
      <div>
        <p class="sidebar__title">Onboarding</p>
        <p class="sidebar__subtitle">Academy</p>
      </div>
    </div>
    <nav class="sidebar__nav">
      <RouterLink
        v-for="item in navItems"
        :key="item.label"
        :to="item.to"
        class="sidebar__link"
        :class="{ 'sidebar__link--active': isActive(item.to) }"
      >
        <span class="sidebar__icon">{{ item.icon || '•' }}</span>
        <span>{{ item.label }}</span>
      </RouterLink>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  padding: 24px 20px;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(30px);
  height: 100%;
}

.sidebar__header {
  display: flex;
  gap: 12px;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  margin-bottom: 24px;
}

.logo {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--color-accent-soft);
  display: grid;
  place-items: center;
  font-size: 24px;
  flex-shrink: 0;
}

.sidebar__title {
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 12px;
  color: var(--color-text-muted);
  margin: 0 0 2px 0;
  line-height: 1.2;
}

.sidebar__subtitle {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
}

.sidebar__nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sidebar__link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 12px;
  color: var(--color-text);
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease;
}

.sidebar__link:hover {
  background: rgba(255, 255, 255, 0.05);
}

.sidebar__link--active {
  background: var(--color-accent-soft);
  color: var(--color-accent);
}

.sidebar__icon {
  width: 24px;
  text-align: center;
}
</style>
