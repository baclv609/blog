import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'AuthForm' },
      component: LoginView,
    },
    {
      path: '/sigin',
      name: 'sigin',
      meta: { layout: 'AuthForm' },
      component: () => import('@/views/SiginView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',

      component: () => import('@/views/NotFound.vue'),
    },
  ],
});

export default router;
