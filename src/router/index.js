import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '../views/DashboardView.vue';
import ModuleView from '../views/ModuleView.vue';
import TeamView from '../views/TeamView.vue';
import AchievementsView from '../views/AchievementsView.vue';

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
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView
    },
    {
      path: '/achievements',
      name: 'achievements',
      component: AchievementsView
    }
  ]
});

export default router;
