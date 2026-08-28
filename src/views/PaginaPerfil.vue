<template>
  <PerfilCard :usuario="state.usuario" :tipo-usuario="state.tipoUsuario" />
</template>

<script setup>
import { useUsuarioStore } from '@/stores/usuario'
import PerfilCard from '@/components/PerfilCard.vue'

const { state } = useUsuarioStore()
</script>
