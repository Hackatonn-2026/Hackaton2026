<template>
  <div class="auth-header">
    <div class="brand">
      <span class="brand-logo">G</span>
      <span class="brand-name">Guey</span>
    </div>
    <h1 class="auth-title">{{ title }}</h1>
    <p v-if="subtitle" class="auth-subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
})
</script>

<style scoped>
.auth-header {
  text-align: center;
  margin-bottom: 32px;
}

.brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;
}

.brand-logo {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #2f5df5;
  color: #ffffff;
  font-weight: 700;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-name {
  font-size: 26px;
  font-weight: 700;
  color: #111827;
}

.auth-title {
  font-size: 26px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 8px;
}

.auth-subtitle {
  font-size: 15px;
  color: #6b7280;
  margin: 0;
}
</style>
