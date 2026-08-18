<template>
  <div class="input-group">
    <label>{{ label }}</label>
    <inputForm
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps({
  label: String,
  placeholder: String,
  type: { type: String, default: 'text' },
  modelValue: String,
});
defineEmits(['update:modelValue']);
</script>

<style scoped>

</style>