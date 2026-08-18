<template>
  <div class="field">
    <label :for="id" class="field-label">{{ label }}</label>
    <div class="input-wrap">
      <span class="input-icon">
        <slot name="icon" />
      </span>
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        class="field-input"
        required
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.field-label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 6px;
}

.input-wrap {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #9aa1ac;
  display: flex;
  align-items: center;
}

.field-input {
  width: 100%;
  padding: 12px 14px 12px 42px;
  border-radius: 10px;
  border: 1px solid #e2e5ea;
  background: #ffffff;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
}

.field-input:focus {
  border-color: #2f5df5;
}

.field-input::placeholder {
  color: #b0b6bf;
}
</style>