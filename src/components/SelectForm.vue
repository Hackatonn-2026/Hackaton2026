<template>
  <div class="select-form">
    <label v-if="label" class="select-form__label" :for="selectId">{{ label }}</label>

    <div class="select-form__wrapper">
      <span v-if="iconPath" class="select-form__icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
          <path :d="iconPath" />
        </svg>
      </span>

      <select
        :id="selectId"
        class="select-form__select"
        :class="{ 'select-form__select--no-icon': !iconPath, 'select-form__select--placeholder': !modelValue }"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
      >
        <option value="" disabled>{{ placeholder || 'Selecione' }}</option>
        <option v-for="opt in options" :key="opt.value ?? opt" :value="opt.value ?? opt">
          {{ opt.label ?? opt }}
        </option>
      </select>

      <span class="select-form__chevron">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: { type: String, default: '' },
  placeholder: { type: String, default: 'Selecione' },
  modelValue: { type: [String, Number], default: '' },
  options: { type: Array, default: () => [] }, // ['a','b'] ou [{value,label}]
  icon: { type: String, default: 'graduation' }
})

defineEmits(['update:modelValue'])

const selectId = `select-${Math.random().toString(36).slice(2, 9)}`

const icons = {
  graduation: 'M22 10 12 5 2 10l10 5 10-5Zm-18 3v5c3 2 13 2 16 0v-5'
}

const iconPath = computed(() => icons[props.icon] || '')
</script>

<style scoped>
.select-form {
  width: 100%;
}

.select-form__label {
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 8px;
}

.select-form__wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.select-form__icon {
  position: absolute;
  left: 14px;
  display: flex;
  color: #9ca3af;
  pointer-events: none;
}

.select-form__icon svg {
  width: 18px;
  height: 18px;
}

.select-form__chevron {
  position: absolute;
  right: 14px;
  display: flex;
  color: #9ca3af;
  pointer-events: none;
}

.select-form__chevron svg {
  width: 16px;
  height: 16px;
}

.select-form__select {
  width: 100%;
  box-sizing: border-box;
  padding: 12px 38px 12px 42px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 14px;
  color: #1a1a2e;
  background: #fff;
  appearance: none;
  cursor: pointer;
}

.select-form__select--no-icon {
  padding-left: 14px;
}

.select-form__select--placeholder {
  color: #9ca3af;
}

.select-form__select:focus {
  outline: none;
  border-color: #3b5bfd;
  box-shadow: 0 0 0 3px rgba(59, 91, 253, 0.12);
}
</style>
