<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import AppLayout from './layouts/AppLayout.vue';
import { modulesForTrack } from './data/tracks';

const route = useRoute();
const store = useStore();

const activeTrack = computed(() => store.getters['user/track']);

const pageTitle = computed(() => {
  if (route.name === 'dashboard') {
    return 'Dashboard';
  }
  if (route.name === 'team') {
    return 'Team';
  }
  if (route.name === 'module') {
    const module = modulesForTrack(activeTrack.value).find((m) => m.id === route.params.id);
    return module ? module.title : 'Module';
  }
  return 'Onboarding Academy';
});

const userName = computed(() => store.state.user.name);
</script>

<template>
  <AppLayout :title="pageTitle" :user-name="userName">
    <router-view />
  </AppLayout>
</template>
