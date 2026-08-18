<script setup>
defineOptions({
  name: 'LoadingIndicator'
})
</script>

<template>
  <div class="loading" role="status" aria-live="polite">
    <div class="spinner" aria-hidden="true"></div>
    <p>Carregando...</p>
  </div>
</template>

<style scoped>
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 40px;

  color: #64748b;
  font-size: 14px;
}

.spinner {
  width: 35px;
  height: 35px;

  border: 4px solid #e5e7eb;
  border-top: 4px solid #2563eb;

  border-radius: 50%;

  animation: girar 0.8s linear infinite;

  margin-bottom: 12px;
}

.loading p {
  margin: 0;
}

@keyframes girar {
  to {
    transform: rotate(360deg);
  }
}
</style>
