<script setup>
defineProps({
  to: {
    type: String,
    default: null
  },

  variant: {
    type: String,
    default: "primary"
  },

  type: {
    type: String,
    default: "button"
  },

  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <RouterLink
    v-if="to"
    :to="to"
    :class="['button', variant]"
  >
    <slot />
  </RouterLink>

  <button
    v-else
    :type="type"
    :disabled="disabled"
    :class="['button', variant]"
  >
    <slot />
  </button>
</template>