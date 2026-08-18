<template>
  <div class="input-group">
    <label v-if="label" :for="id">
      {{ label }}

      <span v-if="required" class="required">*</span>
    </label>

    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disabled"
      :required="required"
      :readonly="readonly"
      :class="{ 'input-error': error }"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <span v-if="error" class="error-message">
      {{ error }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    default: undefined,
  },

  label: {
    type: String,
    default: '',
  },

  placeholder: {
    type: String,
    default: '',
  },

  type: {
    type: String,
    default: 'text',
  },

  modelValue: {
    type: String,
    default: '',
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  required: {
    type: Boolean,
    default: false,
  },

  readonly: {
    type: Boolean,
    default: false,
  },

  error: {
    type: String,
    default: '',
  },
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.input-group label {
  font-weight: 500;
}

.required {
  color: red;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

input:focus {
  outline: none;
  border-color: #3b82f6;
}

input.input-error {
  border-color: red;
}

input:disabled {
  background-color: #f3f3f3;
  cursor: not-allowed;
}

.error-message {
  color: red;
  font-size: 12px;
}
</style>