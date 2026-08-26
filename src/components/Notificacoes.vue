<template>
  <article class="notificacao" :class="`notificacao--${tipo}`" role="alert">
    <span class="notificacao__icone" aria-hidden="true">{{ icone }}</span>
    <p class="notificacao__mensagem">{{ mensagem }}</p>

    <button
      class="notificacao__fechar"
      type="button"
      aria-label="Fechar notificação"
      @click="$emit('fechar')"
    >
      <span aria-hidden="true">×</span>
    </button>
  </article>
</template>

<script setup>
import { computed } from 'vue'

defineOptions({
  name: 'NotificacaoToast'
})

const props = defineProps({
  mensagem: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    default: 'sucesso',
    validator: (value) => ['sucesso', 'erro', 'aviso', 'info'].includes(value)
  }
})

defineEmits(['fechar'])

const icone = computed(() => ({
  sucesso: '✓',
  erro: '!',
  aviso: '!',
  info: 'i'
})[props.tipo])
</script>

<style scoped>
.notificacao {
  display: flex;
  align-items: center;
  gap: 12px;
  width: min(100%, 380px);
  padding: 14px 16px;
  border: 1px solid currentColor;
  border-radius: 10px;
  box-shadow: 0 12px 24px rgb(15 23 42 / 12%);
  font-size: 14px;
  line-height: 1.4;
}

.notificacao--sucesso {
  background-color: #d4edda;
  color: #155724;
}

.notificacao--erro {
  background-color: #f8d7da;
  color: #721c24;
}

.notificacao--aviso {
  background-color: #fff3cd;
  color: #7c5b00;
}

.notificacao--info {
  background-color: #dbeafe;
  color: #1e40af;
}

.notificacao__icone {
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  flex: 0 0 20px;
  border: 1px solid currentColor;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 700;
}

.notificacao__mensagem {
  flex: 1;
}

.notificacao__fechar {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  border-radius: 6px;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
}

.notificacao__fechar:hover,
.notificacao__fechar:focus-visible {
  background: rgb(0 0 0 / 10%);
  outline: none;
}
</style>
