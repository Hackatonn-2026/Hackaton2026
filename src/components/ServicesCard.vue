<script setup>
defineProps({
  title: { type: String, required: true },
  priceRange: { type: String, required: true },
  duration: { type: String, required: true },
})
</script>

<template>
  <div class="service-card">
    <h4 class="service-title">{{ title }}</h4>
    <p class="service-price">{{ priceRange }}</p>
    <p class="service-duration">{{ duration }}</p>
  </div>
</template>

<style scoped>
.service-card {
  padding: 14px 0;
  border-bottom: 1px solid #f3f4f6;
}

.service-card:last-child {
  border-bottom: none;
}

.service-title {
  font-size: 14px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 4px 0;
}

.service-price {
  font-size: 15px;
  font-weight: bold;
  color: #2563eb;
  margin: 0;
}

.service-duration {
  font-size: 12px;
  color: #6b7280;
  margin: 4px 0 0 0;
}
</style>