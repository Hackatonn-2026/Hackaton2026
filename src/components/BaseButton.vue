<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary', // primary | outline | icon
  },
  icon: {
    type: String,
    default: null,
  },
})

defineEmits(['click'])
</script>

<template>
  <button
    class="inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
    :class="[
      variant === 'primary' && 'bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5',
      variant === 'outline' && 'bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 px-5 py-2.5',
      variant === 'icon' && 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 w-11 h-11 p-0',
    ]"
    @click="$emit('click')"
  >
    <slot name="icon" />
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>