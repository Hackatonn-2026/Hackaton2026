<script setup>
import AppHeader from './layout/AppHeader.vue';
import TheFooter from './layout/TheFooter.vue';
import { RouterLink, RouterView } from 'vue'
</script>

<template>
  <AppHeader />
  <RouterView />
  <TheFooter />
</template>
