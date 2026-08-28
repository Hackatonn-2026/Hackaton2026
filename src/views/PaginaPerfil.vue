<template>
  <PerfilCard :usuario="state.usuario" :tipo-usuario="state.tipoUsuario" />
</template>

<script setup>
import { useUsuarioStore } from '@/stores/usuario'
import PerfilCard from '@/components/PerfilCard.vue' // esse é o arquivo que você mandou

const { state } = useUsuarioStore()
</script>