<script setup>
import Sidebar from '../components/Sidebar.vue';
import TopBar from '../components/TopBar.vue';
import BadgeUnlockModal from '../components/BadgeUnlockModal.vue';

const props = defineProps({
  title: {
    type: [String, Object],
    default: 'Onboarding Academy'
  },
  userName: {
    type: [String, Object],
    default: 'Nachwuchskraft'
  }
});
</script>

<template>
  <div class="layout">
    <Sidebar class="layout__sidebar" />
    <div class="layout__main">
      <TopBar :title="props.title" :user-name="props.userName" />
      <main class="layout__content">
        <slot />
      </main>
    </div>
    <BadgeUnlockModal />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 280px 1fr;
  background: var(--color-bg);
  color: var(--color-text);
}

.layout__sidebar {
  border-right: 1px solid rgba(255, 255, 255, 0.05);
}

.layout__main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  backdrop-filter: blur(24px);
}

.layout__content {
  flex: 1;
  padding: 24px;
  background: var(--color-bg);
  overflow-y: auto;
}

@media (max-width: 960px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .layout__sidebar {
    position: sticky;
    top: 0;
    z-index: 20;
  }
}
</style>
