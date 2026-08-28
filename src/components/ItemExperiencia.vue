<script setup>
defineProps({
  role: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    default: '',
  },
  period: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="flex gap-3">
    <div class="mt-1 shrink-0 w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
      <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20 7H4a1 1 0 00-1 1v10a2 2 0 002 2h14a2 2 0 002-2V8a1 1 0 00-1-1zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
        />
      </svg>
    </div>
    <div>
      <h4 class="font-semibold text-gray-900">{{ role }}</h4>
      <p v-if="company || period" class="text-sm text-gray-500">
        {{ company }}<span v-if="company && period"> · </span>{{ period }}
      </p>
      <p v-if="description" class="text-sm text-gray-600 mt-1">{{ description }}</p>
    </div>
  </div>
</template>