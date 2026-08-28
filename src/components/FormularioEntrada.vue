<template>
  <div class="input-form">
    <label v-if="label" class="input-form__label" :for="inputId">{{ label }}</label>

    <div class="input-form__wrapper" :class="{ 'input-form__wrapper--error': error }">
      <span v-if="iconPath" class="input-form__icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
          <path :d="iconPath" />
        </svg>
      </span>

      <input
        :id="inputId"
        class="input-form__input"
        :class="{ 'input-form__input--no-icon': !iconPath }"
        :type="resolvedType"
        :placeholder="placeholder"
        :value="modelValue"
        :maxlength="maxlength"
        v-bind="$attrs"
        @input="$emit('update:modelValue', $event.target.value)"
      />

      <button
        v-if="type === 'password'"
        type="button"
        class="input-form__toggle"
        @click="showPassword = !showPassword"
        :aria-label="showPassword ? 'Ocultar senha' : 'Mostrar senha'"
      >
        <svg v-if="!showPassword" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
          <path d="M17.94 17.94A10.94 10.94 0 0112 20c-7 0-11-8-11-8a21.6 21.6 0 015.06-6.06M9.9 4.24A10.94 10.94 0 0112 4c7 0 11 8 11 8a21.6 21.6 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" />
          <line x1="1" y1="1" x2="23" y2="23" />
        </svg>
      </button>
    </div>

    <p v-if="error" class="input-form__error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  type: { type: String, default: 'text' }, // text | email | password | tel
  modelValue: { type: [String, Number], default: '' },
  // ícone: user | email | password | phone | location | briefcase | link
  icon: { type: String, default: '' },
  error: { type: String, default: '' },
  maxlength: { type: [String, Number], default: null }
})

defineEmits(['update:modelValue'])

const showPassword = ref(false)

const inputId = `input-${Math.random().toString(36).slice(2, 9)}`

const resolvedType = computed(() => {
  if (props.type === 'password') {
    return showPassword.value ? 'text' : 'password'
  }
  return props.type
})

// mapa de ícones (auto por type, ou sobrescrito por prop "icon")
const icons = {
  user: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
  email: 'M4 4h16v16H4V4Zm0 0 8 8 8-8',
  password: 'M5 11h14v10H5V11Zm3 0V7a4 4 0 0 1 8 0v4',
  phone: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z',
  location: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0Z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  briefcase: 'M3 7h18v13H3V7Zm5 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2',
  link: 'M9 17H7a5 5 0 0 1 0-10h2M15 7h2a5 5 0 0 1 0 10h-2M8 12h8'
}

const iconPath = computed(() => {
  if (props.icon) return icons[props.icon] || ''
  if (props.type === 'email') return icons.email
  if (props.type === 'password') return icons.password
  if (props.type === 'tel') return icons.phone
  return ''
})
</script>

<style scoped>
.input-form {
  width: 100%;
}

.input-form__label {
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 8px;
}

.input-form__wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-form__icon {
  position: absolute;
  left: 14px;
  display: flex;
  color: #9ca3af;
  pointer-events: none;
}

.input-form__icon svg {
  width: 18px;
  height: 18px;
}

.input-form__input {
  width: 100%;
  box-sizing: border-box;
  padding: 12px 14px 12px 42px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 14px;
  color: #1a1a2e;
  background: #fff;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.input-form__input--no-icon {
  padding-left: 14px;
}

.input-form__input::placeholder {
  color: #9ca3af;
}

.input-form__input:focus {
  outline: none;
  border-color: #3b5bfd;
  box-shadow: 0 0 0 3px rgba(59, 91, 253, 0.12);
}

.input-form__toggle {
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  padding: 4px;
  display: flex;
  color: #9ca3af;
  cursor: pointer;
}

.input-form__toggle svg {
  width: 18px;
  height: 18px;
}

.input-form__wrapper--error .input-form__input {
  border-color: #ef4444;
}

.input-form__error {
  margin: 6px 0 0;
  font-size: 13px;
  color: #ef4444;
}
</style>
