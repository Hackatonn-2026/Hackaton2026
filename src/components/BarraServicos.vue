<script setup>
import ServicesCard from './CartaoServico.vue'

defineProps({
  services: {
    type: Array,
    default: () => [],
  },
})

defineEmits(['request-quote'])
</script>

<template>
  <aside class="sidebar-container">
    <h3 class="sidebar-title">Serviços Oferecidos</h3>

    <div class="services-list">
      <ServicesCard
        v-for="(service, i) in services"
        :key="i"
        :title="service.title"
        :price-range="service.priceRange"
        :duration="service.duration"
      />
    </div>

    <button class="quote-btn" @click="$emit('request-quote')">
      Solicitar Orçamento
    </button>
  </aside>
</template>

<style scoped>
.sidebar-container {
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 24px;
  height: fit-content;
}

.sidebar-title {
  font-size: 17px;
  font-weight: bold;
  color: #111827;
  margin: 0 0 12px 0;
}

.services-list {
  display: flex;
  flex-direction: column;
}

.quote-btn {
  width: 100%;
  margin-top: 20px;
  background-color: #2563eb;
  color: #ffffff;
  border: none;
  padding: 12px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s ease;
}

.quote-btn:hover {
  background-color: #1d4ed8;
}
</style>
