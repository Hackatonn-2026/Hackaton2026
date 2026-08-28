<template>
  <div class="textarea-form">
    <label v-if="label" class="textarea-form__label" :for="textareaId">{{ label }}</label>
    <textarea
      :id="textareaId"
      class="textarea-form__input"
      :placeholder="placeholder"
      :rows="rows"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  modelValue: { type: String, default: '' },
  rows: { type: [String, Number], default: 4 }
})

defineEmits(['update:modelValue'])

const textareaId = `textarea-${Math.random().toString(36).slice(2, 9)}`
</script>

<style scoped>
.textarea-form {
  width: 100%;
}

.textarea-form__label {
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 8px;
}

.textarea-form__input {
  width: 100%;
  box-sizing: border-box;
  padding: 12px 14px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 14px;
  color: #1a1a2e;
  font-family: inherit;
  resize: vertical;
}

.textarea-form__input::placeholder {
  color: #9ca3af;
}

.textarea-form__input:focus {
  outline: none;
  border-color: #3b5bfd;
  box-shadow: 0 0 0 3px rgba(59, 91, 253, 0.12);
}
</style>
