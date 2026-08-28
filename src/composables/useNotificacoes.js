import { readonly, ref } from 'vue'

const notificacoes = ref([])
let proximoId = 1

function remover(id) {
  notificacoes.value = notificacoes.value.filter((notificacao) => notificacao.id !== id)
}

function adicionar(mensagem, tipo = 'info', duracao = 4500) {
  const id = proximoId++

  notificacoes.value.push({ id, mensagem, tipo })

  if (duracao > 0) {
    window.setTimeout(() => remover(id), duracao)
  }

  return id
}

export function useNotificacoes() {
  return {
    notificacoes: readonly(notificacoes),
    adicionar,
    remover
  }
}
