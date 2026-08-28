<template>
  <div class="checkbox-group">
    <label v-if="label" class="checkbox-group__label">{{ label }}</label>

    <div class="checkbox-group__grid">
      <label v-for="opt in options" :key="opt" class="checkbox-group__item">
        <input
          type="checkbox"
          :value="opt"
          :checked="modelValue.includes(opt)"
          @change="toggle(opt)"
        />
        <span>{{ opt }}</span>
      </label>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: { type: String, default: '' },
  options: { type: Array, default: () => [] },
  modelValue: { type: Array, default: () => [] }
})

const emit = defineEmits(['update:modelValue'])

function toggle(opt) {
  const current = [...props.modelValue]
  const idx = current.indexOf(opt)
  if (idx === -1) current.push(opt)
  else current.splice(idx, 1)
  emit('update:modelValue', current)
}
</script>

<style scoped>
.checkbox-group__label {
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 12px;
}

.checkbox-group__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px 32px;
}

@media (min-width: 480px) {
  .checkbox-group__grid {
    grid-template-columns: 1fr 1fr;
  }
}

.checkbox-group__item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #374151;
  cursor: pointer;
}

.checkbox-group__item input {
  width: 18px;
  height: 18px;
  accent-color: #1a1a2e;
  cursor: pointer;
}
</style>
