<template>
  <div class="item-experiencia">
    <div class="icone-box">
      <svg class="maleta-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
      </svg>
    </div>

    <div class="exp-conteudo">
      <h4 class="exp-cargo">{{ role }}</h4>
      <p class="exp-detalhes">
        <span class="exp-empresa">{{ company }}</span>
        <span v-if="period" class="exp-periodo"> • {{ period }}</span>
      </p>
      <p v-if="description" class="exp-descricao">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  role: String,
  company: String,
  period: String,
  description: String,
})
</script>

<style scoped>
.item-experiencia {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 12px 0;
}

.icone-box {
  width: 48px;
  height: 48px;
  min-width: 48px;
  min-height: 48px;
  background-color: #f3f4f6;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.maleta-icon {
  width: 24px !important;
  height: 24px !important;
  max-width: 24px !important;
  max-height: 24px !important;
  fill: #9ca3af;
}

.exp-conteudo {
  flex: 1;
}

.exp-cargo {
  font-size: 15px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 4px 0;
}

.exp-detalhes {
  font-size: 13px;
  color: #4b5563;
  margin: 0 0 6px 0;
}

.exp-empresa {
  font-weight: 600;
  color: #374151;
}

.exp-periodo {
  color: #6b7280;
}

.exp-descricao {
  font-size: 14px;
  color: #4b5563;
  line-height: 1.5;
  margin: 0;
}
</style>
