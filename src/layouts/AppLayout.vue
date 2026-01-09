<script setup>
import Sidebar from '../components/Sidebar.vue';
import TopBar from '../components/TopBar.vue';
import BadgeUnlockModal from '../components/BadgeUnlockModal.vue';
import IntroductionModal from '../components/IntroductionModal.vue';
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

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

const store = useStore();
const route = useRoute();
const showIntroModal = ref(false);

const hasSeenIntro = computed(() => store.getters['user/hasSeenIntro']);

onMounted(() => {
  // Show intro modal on dashboard if user hasn't seen it
  if (!hasSeenIntro.value && route.name === 'dashboard') {
    // Small delay for better UX
    setTimeout(() => {
      showIntroModal.value = true;
    }, 500);
  }
});

const openIntroModal = () => {
  showIntroModal.value = true;
};

const closeIntroModal = () => {
  showIntroModal.value = false;
};
</script>

<template>
  <div class="layout">
    <Sidebar class="layout__sidebar" />
    <div class="layout__main">
      <TopBar :title="props.title" :user-name="props.userName" @open-tutorial="openIntroModal" />
      <main class="layout__content">
        <slot />
      </main>
    </div>
    <BadgeUnlockModal />
    <IntroductionModal v-if="showIntroModal" @close="closeIntroModal" />
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
