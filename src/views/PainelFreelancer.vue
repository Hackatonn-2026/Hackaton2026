<template>
  <div class="dashboard-page">
    <header class="header">
      <div class="brand">
        <span class="brand-logo">ai</span>
        <span class="brand-name">CiroLancers</span>
      </div>
      <div class="usuario-header">
        <span>{{ freelancer.nome || 'Freelancer' }}</span>
        <button class="btn-sair" @click="sair">Sair</button>
      </div>
    </header>

    <main class="dashboard-container">
      <div class="titulo-area">
        <div>
          <h1>Dashboard do Freelancer</h1>
          <p>Gerencie suas solicitações de serviços.</p>
        </div>
        <div class="contador">
          <strong>{{ solicitacoesPendentes.length }}</strong>
          <span>novas solicitações</span>
        </div>
      </div>

      <section class="solicitacoes-section">
        <div class="section-title">
          <div>
            <h2>📩 Novas solicitações</h2>
            <p>Clientes interessados no seu trabalho</p>
          </div>
        </div>

        <div v-if="solicitacoes.length === 0" class="sem-solicitacoes">
          <div class="sem-icone">📭</div>
          <h3>Nenhuma solicitação ainda</h3>
          <p>Quando um cliente solicitar um serviço, ele aparecerá aqui.</p>
        </div>

        <div v-else class="lista-solicitacoes">
          <article
            v-for="solicitacao in solicitacoes"
            :key="solicitacao.id"
            class="solicitacao-card"
          >
            <div class="solicitacao-header">
              <div class="cliente-info">
                <div class="cliente-foto">
                  <span>{{ primeiraLetraCliente(solicitacao) }}</span>
                </div>
                <div>
                  <span class="label">Solicitação de</span>
                  <h3>{{ solicitacao.clienteNome || 'Cliente' }}</h3>
                  <small>{{ solicitacao.clienteEmail || '' }}</small>
                </div>
              </div>

              <span
                class="status"
                :class="statusClasse(solicitacao.status)"
              >
                {{ statusTexto(solicitacao.status) }}
              </span>
            </div>

            <div class="mensagem">
              <span class="aspas">“</span>
              <p>Quero contratar você para</p>
              <h2>{{ solicitacao.titulo }}</h2>
            </div>

            <div class="informacoes">
              <div class="informacao">
                <span class="info-icone">🛠️</span>
                <div>
                  <span>Categoria</span>
                  <strong>{{ solicitacao.categoria }}</strong>
                </div>
              </div>

              <div class="informacao">
                <span class="info-icone">📅</span>
                <div>
                  <span>Data</span>
                  <strong>{{ formatarData(solicitacao.data) }}</strong>
                </div>
              </div>

              <div class="informacao">
                <span class="info-icone">📍</span>
                <div>
                  <span>Local</span>
                  <strong>{{ solicitacao.cidade || 'Não informado' }}</strong>
                </div>
              </div>

              <div class="informacao">
                <span class="info-icone">💰</span>
                <div>
                  <span>Orçamento</span>
                  <strong>{{ solicitacao.orcamento || 'A combinar' }}</strong>
                </div>
              </div>
            </div>

            <div class="descricao">
              <strong>Descrição do serviço</strong>
              <p>{{ solicitacao.descricao }}</p>
            </div>

            <div
              v-if="solicitacao.endereco || solicitacao.bairro || solicitacao.cep"
              class="endereco"
            >
              <strong>📍 Endereço</strong>
              <p>
                {{ solicitacao.endereco }}
                <span v-if="solicitacao.bairro">
                  - {{ solicitacao.bairro }}
                </span>
                <span v-if="solicitacao.cep">
                  - CEP {{ solicitacao.cep }}
                </span>
              </p>
            </div>

            <div v-if="solicitacao.negociavel" class="negociavel">
              💬 O cliente informou que o valor é negociável.
            </div>

            <div v-if="solicitacao.status === 'pendente'" class="acoes">
              <button
                class="btn-recusar"
                @click="recusar(solicitacao)"
              >
                ✕ Recusar
              </button>
              <button
                class="btn-aceitar"
                @click="aceitar(solicitacao)"
              >
                ✓ Aceitar serviço
              </button>
            </div>

            <div
              v-if="solicitacao.status === 'aceita'"
              class="resultado aceita"
            >
              <span>✓</span>
              <div>
                <strong>Serviço aceito!</strong>
                <p>Você aceitou a solicitação deste cliente.</p>
              </div>
            </div>

            <div
              v-if="solicitacao.status === 'recusada'"
              class="resultado recusada"
            >
              <span>✕</span>
              <div>
                <strong>Solicitação recusada</strong>
                <p>Esta solicitação foi recusada.</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const freelancer = ref({
  id: '',
  nome: '',
  profissao: '',
  email: '',
  fotoPerfil: null
})

const solicitacoes = ref([])

onMounted(() => {
  carregarFreelancer()
  carregarSolicitacoes()
})

function carregarFreelancer() {
  const dados = localStorage.getItem('freelancerPerfil')

  if (!dados) return

  try {
    const perfil = JSON.parse(dados)

    freelancer.value = {
      ...freelancer.value,
      ...perfil,
      id: perfil.id || perfil.email || perfil.nome || ''
    }
  } catch (erro) {
    console.error('Erro ao carregar freelancer:', erro)
  }
}

function carregarSolicitacoes() {
  const dados = localStorage.getItem('solicitacoes')

  if (!dados) {
    solicitacoes.value = []
    return
  }

  try {
    const todas = JSON.parse(dados)

    solicitacoes.value = todas.filter(
      solicitacao => pertenceAoFreelancer(solicitacao)
    )
  } catch (erro) {
    console.error('Erro ao carregar solicitações:', erro)
    solicitacoes.value = []
  }
}

function pertenceAoFreelancer(solicitacao) {
  const idAtual = freelancer.value.id
  const emailAtual = freelancer.value.email
  const nomeAtual = freelancer.value.nome

  if (
    solicitacao.freelancerId &&
    idAtual &&
    solicitacao.freelancerId === idAtual
  ) {
    return true
  }

  if (
    solicitacao.freelancerEmail &&
    emailAtual &&
    solicitacao.freelancerEmail === emailAtual
  ) {
    return true
  }

  if (
    solicitacao.freelancerNome &&
    nomeAtual &&
    solicitacao.freelancerNome === nomeAtual
  ) {
    return true
  }

  return false
}

const solicitacoesPendentes = computed(() => {
  return solicitacoes.value.filter(
    solicitacao => solicitacao.status === 'pendente'
  )
})

function aceitar(solicitacao) {
  const confirmar = window.confirm(
    `Deseja aceitar o serviço de ${solicitacao.clienteNome || 'este cliente'}?`
  )

  if (!confirmar) return

  alterarStatus(solicitacao.id, 'aceita')
  alert('Serviço aceito com sucesso! 🎉')
}

function recusar(solicitacao) {
  const confirmar = window.confirm(
    'Deseja realmente recusar esta solicitação?'
  )

  if (!confirmar) return

  alterarStatus(solicitacao.id, 'recusada')
  alert('Solicitação recusada.')
}

function alterarStatus(id, novoStatus) {
  const dados = localStorage.getItem('solicitacoes')

  if (!dados) return

  try {
    const todas = JSON.parse(dados)

    const atualizadas = todas.map(solicitacao => {
      if (solicitacao.id === id) {
        return {
          ...solicitacao,
          status: novoStatus,
          atualizadaEm: new Date().toISOString()
        }
      }

      return solicitacao
    })

    localStorage.setItem(
      'solicitacoes',
      JSON.stringify(atualizadas)
    )

    carregarSolicitacoes()
  } catch (erro) {
    console.error('Erro ao atualizar solicitação:', erro)
  }
}

function primeiraLetraCliente(solicitacao) {
  const nome = solicitacao.clienteNome || 'C'
  return nome.charAt(0).toUpperCase()
}

function formatarData(data) {
  if (!data) return 'Não informada'

  const partes = data.split('-')

  if (partes.length !== 3) return data

  return `${partes[2]}/${partes[1]}/${partes[0]}`
}

function statusTexto(status) {
  const textos = {
    pendente: 'Nova',
    aceita: 'Aceita',
    recusada: 'Recusada'
  }

  return textos[status] || status
}

function statusClasse(status) {
  return {
    'status-pendente': status === 'pendente',
    'status-aceita': status === 'aceita',
    'status-recusada': status === 'recusada'
  }
}

function sair() {
  router.push({
    name: 'login'
  })
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.dashboard-page {
  min-height: 100vh;
  background: #f3f4f6;
  color: #1a1a2e;
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  height: 72px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6%;
  box-shadow: 0 1px 5px rgba(0,0,0,.08);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-logo {
  width: 40px;
  height: 40px;
  background: #3b5bfd;
  color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
}

.brand-name {
  font-size: 22px;
  font-weight: 800;
}

.usuario-header {
  display: flex;
  align-items: center;
  gap: 18px;
  font-size: 14px;
  font-weight: 600;
}

.btn-sair {
  border: none;
  background: transparent;
  color: #3b5bfd;
  cursor: pointer;
  font-weight: 600;
}

.dashboard-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 35px 20px 60px;
}

.titulo-area {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}

.titulo-area h1 {
  margin: 0;
  font-size: 28px;
}

.titulo-area p {
  margin: 7px 0 0;
  color: #6b7280;
  font-size: 14px;
}

.contador {
  background: white;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contador strong {
  color: #3b5bfd;
  font-size: 22px;
}

.contador span {
  color: #777;
  font-size: 11px;
}

.section-title {
  margin-bottom: 15px;
}

.section-title h2 {
  margin: 0;
  font-size: 20px;
}

.section-title p {
  margin: 5px 0;
  color: #6b7280;
  font-size: 13px;
}

.sem-solicitacoes {
  background: white;
  border-radius: 15px;
  padding: 60px 20px;
  text-align: center;
  border: 1px solid #ddd;
}

.sem-icone {
  font-size: 45px;
  margin-bottom: 10px;
}

.sem-solicitacoes h3 {
  margin: 5px 0;
}

.sem-solicitacoes p {
  color: #777;
  font-size: 13px;
}

.lista-solicitacoes {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.solicitacao-card {
  background: white;
  border-radius: 16px;
  border: 1px solid #ddd;
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0,0,0,.04);
}

.solicitacao-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 18px;
  border-bottom: 1px solid #eee;
}

.cliente-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cliente-foto {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #3b5bfd;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 19px;
  font-weight: bold;
}

.label {
  display: block;
  color: #888;
  font-size: 10px;
}

.cliente-info h3 {
  margin: 2px 0;
  font-size: 15px;
}

.cliente-info small {
  color: #777;
  font-size: 10px;
}

.status {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 700;
}

.status-pendente {
  background: #fff4d6;
  color: #a66a00;
}

.status-aceita {
  background: #dcfce7;
  color: #16803a;
}

.status-recusada {
  background: #fee2e2;
  color: #b91c1c;
}

.mensagem {
  padding: 20px 0;
  position: relative;
}

.aspas {
  font-size: 50px;
  color: #dbe2ff;
  position: absolute;
  left: 0;
  top: 8px;
}

.mensagem p {
  margin: 0 0 5px 30px;
  color: #6b7280;
  font-size: 13px;
}

.mensagem h2 {
  margin: 0 0 0 30px;
  font-size: 21px;
  color: #1a1a2e;
}

.informacoes {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 18px;
  background: #f7f8ff;
  border-radius: 10px;
}

.informacao {
  display: flex;
  align-items: center;
  gap: 8px;
}

.info-icone {
  font-size: 18px;
}

.informacao span {
  display: block;
  color: #777;
  font-size: 9px;
}

.informacao strong {
  display: block;
  margin-top: 3px;
  font-size: 11px;
}

.descricao {
  padding: 18px 0;
}

.descricao strong {
  font-size: 12px;
}

.descricao p {
  margin: 7px 0 0;
  color: #555;
  line-height: 1.6;
  font-size: 12px;
}

.endereco {
  padding: 13px;
  background: #f8f8f8;
  border-radius: 8px;
  margin-bottom: 12px;
}

.endereco strong {
  font-size: 11px;
}

.endereco p {
  margin: 5px 0 0;
  color: #555;
  font-size: 10px;
}

.negociavel {
  background: #eef2ff;
  color: #3b5bfd;
  padding: 10px;
  border-radius: 7px;
  font-size: 10px;
}

.acoes {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
  padding-top: 18px;
  border-top: 1px solid #eee;
}

.acoes button {
  padding: 11px 20px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
}

.btn-recusar {
  background: white;
  color: #dc2626;
  border: 1px solid #dc2626;
}

.btn-recusar:hover {
  background: #fee2e2;
}

.btn-aceitar {
  background: #3b5bfd;
  color: white;
  border: 1px solid #3b5bfd;
}

.btn-aceitar:hover {
  background: #2f4bea;
}

.resultado {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
  padding: 14px;
  border-radius: 8px;
}

.resultado > span {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.resultado strong {
  font-size: 12px;
}

.resultado p {
  margin: 3px 0 0;
  font-size: 10px;
}

.aceita {
  background: #dcfce7;
  color: #166534;
}

.aceita > span {
  background: #22c55e;
  color: white;
}

.recusada {
  background: #fee2e2;
  color: #991b1b;
}

.recusada > span {
  background: #ef4444;
  color: white;
}

@media (max-width: 800px) {
  .informacoes {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .header {
    padding: 0 20px;
  }

  .brand-name {
    font-size: 18px;
  }

  .usuario-header span {
    display: none;
  }

  .titulo-area {
    align-items: flex-start;
    flex-direction: column;
    gap: 15px;
  }

  .solicitacao-card {
    padding: 18px;
  }

  .solicitacao-header {
    align-items: flex-start;
    gap: 10px;
  }

  .informacoes {
    grid-template-columns: 1fr;
  }

  .acoes {
    flex-direction: column;
  }

  .acoes button {
    width: 100%;
  }
}
</style>