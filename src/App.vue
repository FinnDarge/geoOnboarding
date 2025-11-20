<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import AppLayout from './layouts/AppLayout.vue';
import modules from './data/modules.json';

const route = useRoute();
const store = useStore();

const pageTitle = computed(() => {
  if (route.name === 'dashboard') {
    return 'Dashboard';
  }
  if (route.name === 'team') {
    return 'Team';
  }
  if (route.name === 'module') {
    const module = modules.find((m) => m.id === route.params.id);
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
