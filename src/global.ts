import { defineAsyncComponent } from 'vue';
export function registerGlobalComponent(app: any) {
  app.component(
    'DefaultLayout',
    defineAsyncComponent(() => import('@/components/layouts/DefaultLayout.vue')),
  );
  app.component(
    'AuthLayout',
    defineAsyncComponent(() => import('@/components/layouts/AuthFormLayout.vue')),
  );
}