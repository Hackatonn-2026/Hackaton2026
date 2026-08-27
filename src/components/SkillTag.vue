<script setup>
defineProps({
  label: { type: String, required: true },
})
</script>

<template>
  <span class="skill-tag">
    {{ label }}
  </span>
</template>

<style scoped>
.skill-tag {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 10px;
  background-color: #eff6ff;
  color: #2563eb;
  font-size: 13px;
  font-weight: 600;
  border: 1px solid #dbeafe;
}
</style>