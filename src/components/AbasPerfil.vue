<script setup>
// A aba muda quando o usuário clica em outra opção.
defineProps({
  tabs: {
    type: Array,
    default: () => ['Sobre', 'Portfólio', 'Avaliações'],
  },
  modelValue: {
    type: String,
    required: true,
  },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="tabs-container">
    <button
      v-for="tab in tabs"
      :key="tab"
      class="tab-button"
      :class="{ active: modelValue === tab }"
      @click="$emit('update:modelValue', tab)"
    >
      {{ tab }}
    </button>
  </div>
</template>

<style scoped>
.tabs-container {
  display: flex;
  gap: 48px;
  border-bottom: 1px solid #e5e7eb;
}

.tab-button {
  background: none;
  border: none;
  padding-bottom: 14px;
  font-size: 15px;
  font-weight: 600;
  color: #6b7280;
  cursor: pointer;
  position: relative;
  transition: color 0.2s ease;
}

.tab-button:hover {
  color: #111827;
}

.tab-button.active {
  color: #2563eb;
  border-bottom: 2px solid #2563eb;
  margin-bottom: -1px;
}
</style>
