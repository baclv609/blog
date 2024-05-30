<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const layout = computed(() => (route.meta.layout || 'Default') + 'Layout');
</script>

<template>
  <component :is="layout">
    <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component"></component>

        <template #fallback> <a-spin></a-spin> </template>
      </Suspense>
    </router-view>
  </component>
</template>
