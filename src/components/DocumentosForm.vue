<template>
  <div>
    <h2>Documentos</h2>

    <InputForm
      label="CPF"
      placeholder="Digite seu CPF"
      v-model="cpf"
    />

    <InputForm
      label="Comprovante"
      placeholder="Digite o documento"
      v-model="comprovante"
    />
  </div>
</template>

<script setup>
import InputForm from './InputForm.vue'

defineProps({
  tipoUsuario: String
})
</script>