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

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;
  padding: 12px 64px;
  background: #ffffff;
  border-bottom: 1px solid #eef0f3;
  box-shadow: 0 2px 8px rgb(15 23 42 / 6%);
  font-family: Arial, sans-serif;
  text-align: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.logo-icon {
  width: 34px;
  height: 34px;
  border-radius: 9px;
  object-fit: cover;
  flex-shrink: 0;
}

.logo-text {
  font-weight: bold;
  font-size: 19px;
  color: #111827;
}

.search-wrap {
  position: relative;
  flex: 1;
  max-width: 560px;
}

.search-wrap input {
  width: 100%;
  padding: 10px 14px;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 14px;
  outline: none;
}

.search-wrap input:focus {
  border-color: #2563eb;
}

.search-suggestions {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  list-style: none;
  overflow: hidden;
}

.suggestion-item {
  padding: 10px 14px;
  font-size: 14px;
  cursor: pointer;
}

.suggestion-item:hover {
  background: #f3f4f6;
}

.suggestion-empty {
  padding: 14px;
  font-size: 13px;
  color: #9ca3af;
  text-align: center;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-link {
  color: #4b5563;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #2563eb;
}

.cadastrar-btn {
  background: #2563eb;
  color: #fff;
  border: none;
  padding: 9px 18px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
}

.cadastrar-btn:hover {
  background: #1d4ed8;
}

.cadastrar-btn:active {
  transform: scale(0.96);
}
</style>
