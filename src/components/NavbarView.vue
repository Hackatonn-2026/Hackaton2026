<template>
  <nav class="nav-links">
    <RouterLink to="/" class="nav-link">Home</RouterLink>
    <RouterLink to="/buscar" class="nav-link">Buscar</RouterLink>
    <RouterLink to="/categorias" class="nav-link">Categorias</RouterLink>

    <RouterLink
      v-if="!usuarioStore.state.usuario"
      to="/login"
      class="nav-link login-link"
    >
      Login
    </RouterLink>

    <RouterLink
      v-else
      :to="linkPerfil"
      class="nav-link avatar-link"
    >
      <img
        :src="usuarioStore.state.usuario.fotoPerfil || avatarPadrao"
        :alt="usuarioStore.state.usuario.nome"
        class="avatar-link__img"
      />

      <span class="avatar-link__nome">
        {{ usuarioStore.state.usuario.nome }}
      </span>
    </RouterLink>

    <button
      v-if="usuarioStore.state.usuario"
      type="button"
      class="nav-link logout-btn"
      @click="sair"
    >
      Sair
    </button>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUsuarioStore } from '@/stores/usuario'

const router = useRouter()
const usuarioStore = useUsuarioStore()

const avatarPadrao = '/img/avatar-padrao.png'

const linkPerfil = computed(() => {
  const usuario = usuarioStore.state.usuario

  if (!usuario) return '/'

  return usuarioStore.state.tipoUsuario === 'freelancer'
    ? '/perfil-freelancer'
    : '/dashboard-cliente'
})

function sair() {
  usuarioStore.logout()
  router.push('/')
}
</script>

<style scoped>
.nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-link {
  color: #4b5563;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #2563eb;
}

.login-link {
  background: #2563eb;
  color: #fff;
  padding: 9px 18px;
  border-radius: 8px;
  font-weight: bold;
}

.login-link:hover {
  background: #1d4ed8;
  color: #fff;
}

.avatar-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #1f2937;
  font-weight: 600;
}

.avatar-link__img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #2563eb;
}

.avatar-link:hover {
  color: #2563eb;
}

.logout-btn {
  background: #dc2626;
  border: 1px solid #dc2626;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
}

.logout-btn:hover {
  background: #b91c1c;
  border-color: #b91c1c;
  color: #fff;
}
</style>