<template>
  <article class="cartao" :style="{ padding }">
    <slot />
  </article>
</template>

<script setup>
defineOptions({
  name: 'AppCard',
})

defineProps({
  padding: {
    type: String,
    default: '20px',
  },
})
</script>

<style scoped>
.cartao {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgb(15 23 42 / 8%);
  padding: 20px;
}
</style>
