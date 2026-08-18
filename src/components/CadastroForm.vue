<script setup>
  import { ref } from 'vue'
  import InputForm from './InputForm.vue';
  const tipoUsuario = ref('freelancer')
  const nome = ref('');  
  const email = ref('');
  const telefone = ref('');
  const identificacao = ref('');
</script>

<template>
  <select v-model="tipoUsuario">
    <option value="freelancer">Freelancer</option>
    <option value="contratante">Contratante</option>
  </select>

  <InputForm
    label="Nome"
    placeholder="Digite seu nome"
    v-model="nome"
  />

  <InputForm
    label="E-mail"
    placeholder="Digite seu e-mail"
    type="email"
    v-model="email"
  />

  <!-- Documentos do contratante -->
  <div v-if="tipoUsuario === 'contratante'">
    
    <InputForm
      label="CPF ou CNPJ"
      placeholder="Digite seu CPF ou CNPJ"
      v-model="identificacao"
    />

    <InputForm
      label="Telefone"
      placeholder="Digite seu telefone"
      v-model="telefone"
    />

    </div>

  <!-- Documentos do freelancer -->
  <div v-if="tipoUsuario === 'freelancer'">

    <InputForm
      label="CPF ou CNPJ"
      placeholder="Digite seu CPF ou CNPJ"
      v-model="identificacao"
    />

    <InputForm
    label="Telefone"
    placeholder="Digite seu telefone"
    v-model="telefone"
    />

    <InputForm
      label="Portfólio"
      placeholder="Link do portfólio"
      v-model="portfolio"
    />

  </div>
  
</template>