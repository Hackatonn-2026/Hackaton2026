<script setup>
import AppHeader from './layout/AppHeader.vue'
import TheFooter from './layout/TheFooter.vue'
import Loading from './components/Loading.vue'
import Notificacoes from './components/Notificacoes.vue'
import { useNotificacoes } from './composables/useNotificacoes'
import { carregandoRota } from './router'

const { notificacoes, remover } = useNotificacoes()
</script>

<template>
  <AppHeader />
  <RouterView />
  <TheFooter />

  <Transition name="loading">
    <div v-if="carregandoRota" class="loading-overlay" aria-live="polite">
      <Loading />
    </div>
  </Transition>

  <div class="notificacoes" aria-live="polite" aria-atomic="true">
    <TransitionGroup name="notificacao">
      <Notificacoes
        v-for="notificacao in notificacoes"
        :key="notificacao.id"
        :mensagem="notificacao.mensagem"
        :tipo="notificacao.tipo"
        @fechar="remover(notificacao.id)"
      />
    </TransitionGroup>
  </div>
</template>

<style>
.notificacoes {
  position: fixed;
  z-index: 1000;
  top: 20px;
  right: 20px;
  display: grid;
  gap: 10px;
  width: min(calc(100% - 32px), 380px);
}

.loading-overlay {
  position: fixed;
  z-index: 1100;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgb(255 255 255 / 82%);
}

.loading-enter-active,
.loading-leave-active {
  transition: opacity 0.15s ease;
}

.loading-enter-from,
.loading-leave-to {
  opacity: 0;
}

.notificacao-enter-active,
.notificacao-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.notificacao-enter-from,
.notificacao-leave-to {
  opacity: 0;
  transform: translateX(16px);
}

@media (max-width: 480px) {
  .notificacoes {
    top: 12px;
    right: 16px;
  }
}
</style>
