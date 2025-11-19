<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import AppLayout from './layouts/AppLayout.vue';

const route = useRoute();
const store = useStore();

const pageTitle = computed(() => {
  if (route.name === 'dashboard') {
    return 'Dashboard';
  }
  if (route.name === 'module') {
    return 'Module: ' + (route.params.id || '');
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
