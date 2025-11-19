import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '../views/DashboardView.vue';
import ModuleView from '../views/ModuleView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/module/:id',
      name: 'module',
      component: ModuleView,
      props: true
    }
  ]
});

export default router;
