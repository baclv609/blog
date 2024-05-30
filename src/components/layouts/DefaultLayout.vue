<script setup lang="ts">
import Header from '../Header.vue';
import Footer from '../Footer.vue';
</script>
<template>
  <div>
    <Header />
    <div class="">
      <slot />
    </div>

    <div>
      <Footer/>
    </div>
  </div>
</template>
