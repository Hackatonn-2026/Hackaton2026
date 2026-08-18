<template>
  <div class="field">
    <label :for="id" class="field-label">{{ label }}</label>
    <div class="input-wrap">
      <span class="input-icon">
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path
            fill="currentColor"
            d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z"
          />
        </svg>
      </span>
      <input
        :id="id"
        :value="modelValue"
        :type="visible ? 'text' : 'password'"
        class="field-input"
        :autocomplete="autocomplete"
        required
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <button
        type="button"
        class="toggle-visibility"
        :aria-label="visible ? 'Ocultar senha' : 'Mostrar senha'"
        @click="visible = !visible"
      >
        <svg v-if="!visible" viewBox="0 0 24 24" width="18" height="18">
          <path
            fill="currentColor"
            d="M12 5c-5.05 0-9.27 3.11-11 7.5 1.73 4.39 5.95 7.5 11 7.5s9.27-3.11 11-7.5C21.27 8.11 17.05 5 12 5Zm0 12.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
          />
        </svg>
        <svg v-else viewBox="0 0 24 24" width="18" height="18">
          <path
            fill="currentColor"
            d="m2.1 3.51 1.41-1.42 18.4 18.4-1.41 1.42-3.4-3.4A11.6 11.6 0 0 1 12 20c-5.05 0-9.27-3.11-11-7.5a12.4 12.4 0 0 1 4.51-5.61L2.1 3.51ZM12 7.5c.51 0 1 .07 1.47.2l-1.65 1.65a3 3 0 0 0-3.47 3.47l-1.65 1.65A5 5 0 0 1 12 7.5Zm0 9a5 5 0 0 0 5-5c0-.4-.05-.79-.14-1.16l1.55-1.55c.98 1.06 1.77 2.33 2.29 3.71-1.73 4.39-5.95 7.5-11 7.5a11.5 11.5 0 0 1-2.98-.4l1.72-1.72c.5.13 1.03.2 1.56.62Z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: 'password',
  },
  label: {
    type: String,
    default: 'Senha',
  },
  autocomplete: {
    type: String,
    default: 'current-password',
  },
})

defineEmits(['update:modelValue'])

const visible = ref(false)
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
  padding: 12px 42px 12px 42px;
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

.toggle-visibility {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #9aa1ac;
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>