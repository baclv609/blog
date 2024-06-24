import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/auth/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/user/HomeView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/user/ContactView.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/user/BlogView.vue'),
    },
    {
      path: '/listBlog',
      name: 'listBlog',
      component: () => import('@/views/user/ListBlog.vue'),
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
      component: () => import('@/views/auth/SiginView.vue'),
    },
    {
      path: '/admin/',
      name: 'dashboard', 
      meta: { layout: 'Admin' },
      component: () => import('@/views/dashboard/Dashboard.vue'),
    },
    {
      path: '/admin/auth/all',
      name: 'auth/all', 
      meta: { layout: 'Admin' },
      component: () => import('../views/dashboard/auth/ListAuth.vue'),
    },
    {
      path: '/admin/blog',
      name: 'dashboard/blog', 
      meta: { layout: 'Admin' },
      component: () => import('@/views/dashboard/ListAlldashboard.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/errors/NotFound.vue'),
    },
  ],
});

export default router;
