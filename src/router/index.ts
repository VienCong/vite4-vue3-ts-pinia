import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('@/pages/indexHome.vue'),
  },
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/pages/indexHome.vue'),
  },
  {
    path: '/vueUse',
    name: 'VueUse',
    meta: {
      title: 'VueUse',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/pages/vueUse.vue'),
  },
  {
    path: '/lessStyle',
    name: 'LessStyle',
    meta: {
      title: 'LessStyle',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/pages/lessStyle.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
