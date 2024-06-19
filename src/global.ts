import { defineAsyncComponent } from 'vue';
export function registerGlobalComponent(app: any) {
  app.component(
    'DefaultLayout',
    defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue')),
  );
  app.component(
    'AuthLayout',
    defineAsyncComponent(() => import('@/layouts/AuthFormLayout.vue')),
  );
  app.component(
    'AdminLayout',
    defineAsyncComponent(() => import('@/layouts/AdminLayout.vue')),
  );
}