<template>
<Input class="nome"
  v-model="nome"
  label="Nome completo"
  placeholder="Digite seu nome"
  type="text"
/>
<Input class="email"
  v-model="email"
  label="E-mail"
  placeholder="Digite seu e-mail"
  type="email"
/>
<Input class="telefone"
  v-model="telefone"
  label="Telefone"
  placeholder="Digite seu número de telefone"
  type="tel"
/>
/>
<Input class="email"
  v-model="email"
  label="E-mail"
  placeholder="Digite seu e-mail"
  type="email"
/>
</template>

<script setup>
import { ref } from 'vue';

    const nome = ref('');  
    const email = ref('');
    const telefone = ref('');
    
</script>

<style scoped>

</style>