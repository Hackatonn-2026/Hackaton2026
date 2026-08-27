<script setup>
defineProps({
  rating: {
    type: Number,
    required: true,
  },
  reviewsCount: {
    type: Number,
    default: 0,
  },
  light: {
    type: Boolean,
    default: false, // true = texto claro (usado sobre fundo azul)
  },
})
</script>

<template>
  <div class="flex items-center gap-1.5">
    <svg class="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
      <path
        d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.62 1-5.8-4.21-4.1 5.82-.85L10 1.5z"
      />
    </svg>
    <span class="font-semibold" :class="light ? 'text-white' : 'text-gray-900'">
      {{ rating.toFixed(1) }}
    </span>
    <span :class="light ? 'text-blue-100' : 'text-gray-500'">
      ({{ reviewsCount }} avaliações)
    </span>
  </div>
</template>