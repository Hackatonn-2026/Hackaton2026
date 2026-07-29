<template>
  <header class="header">
    <RouterLink to="/" class="logo">
      <img src="@/assets/aidentro.jpg" alt="Aí dentro" class="logo-icon" />
      <span class="logo-text">CiroLancers</span>
    </RouterLink>

   <SearchBar />

   <NavbarView />

  </header>
</template>

<script setup>
import SearchBar from '@/components/SearchBar.vue'
import NavbarView from '@/components/NavbarView.vue'
</script>
