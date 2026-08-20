<template>
  <div class="toggle">
    <button
      type="button"
      :class="['toggle-btn', { active: modelValue === 'cliente' }]"
      @click="$emit('update:modelValue', 'cliente')"
    >
      Quero contratar
    </button>
    <button
      type="button"
      :class="['toggle-btn', { active: modelValue === 'freelancer' }]"
      @click="$emit('update:modelValue', 'freelancer')"
    >
      Sou o profissional
    </button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: 'cliente',
  },
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.toggle {
  display: inline-flex;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 999px;
  padding: 4px;
  gap: 4px;
}

.toggle-btn {
  border: none;
  background: transparent;
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 999px;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.toggle-btn.active {
  background: #16225e;
  color: #ffffff;
}
</style>
