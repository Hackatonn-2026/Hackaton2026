<template>
  <div class="dashboard-page">
    <div class="dashboard-container">
      <div class="perfil-card">
        <img :src="usuario.fotoPerfil || avatarPadrao" :alt="usuario.nomeEmpresa || usuario.nome" class="perfil-card__foto" />
        <div class="perfil-card__info">
          <h1 class="perfil-card__nome">{{ usuario.nomeEmpresa || usuario.nome }}</h1>
          <p class="perfil-card__segmento">{{ segmentoLabel }}</p>
          <p v-if="usuario.cidade" class="perfil-card__cidade">{{ usuario.cidade }}</p>
          <p v-if="usuario.descricao" class="perfil-card__descricao">{{ usuario.descricao }}</p>
        </div>
        <button type="button" class="perfil-card__sair" @click="sair">Sair</button>
      </div>

      <div class="solicitacoes-section">
        <div class="titulo-section">
          <div>
            <h2>Minhas solicitações</h2>
            <p>Acompanhe os serviços que você solicitou.</p>
          </div>
          <span v-if="solicitacoes.length" class="contador">{{ solicitacoes.length }}</span>
        </div>

        <div v-if="solicitacoes.length === 0" class="estado-vazio">
          <div class="estado-vazio__icone">📋</div>
          <p class="estado-vazio__titulo">Você ainda não solicitou nenhum serviço</p>
          <p class="estado-vazio__texto">Quando você contratar um freelancer, sua solicitação aparecerá aqui.</p>
          <RouterLink to="/buscar" class="estado-vazio__botao">Buscar profissionais</RouterLink>
        </div>

        <div v-else class="solicitacoes-lista">
          <div v-for="solicitacao in solicitacoes" :key="solicitacao.id" class="solicitacao-card">
            <div class="solicitacao-topo">
              <div class="freelancer-info">
                <img :src="solicitacao.freelancerFoto || avatarPadrao" :alt="solicitacao.freelancerNome || 'Freelancer'" class="freelancer-foto" />
                <div>
                  <span class="pequeno-texto">Freelancer contratado</span>
                  <h3>{{ solicitacao.freelancerNome || 'Freelancer' }}</h3>
                </div>
              </div>
              <span class="status" :class="statusClasse(solicitacao.status)">{{ statusTexto(solicitacao.status) }}</span>
            </div>

            <div class="servico-principal">
              <span class="servico-label">Você solicitou</span>
              <h2>{{ solicitacao.titulo }}</h2>
              <span class="categoria">{{ solicitacao.categoria }}</span>
            </div>

            <div class="descricao-servico">
              <strong>Descrição</strong>
              <p>{{ solicitacao.descricao }}</p>
            </div>

            <div class="informacoes-grid">
              <div class="informacao">
                <span class="informacao-icone">📅</span>
                <div>
                  <span>Data</span>
                  <strong>{{ formatarData(solicitacao.data) }}</strong>
                </div>
              </div>
              <div class="informacao">
                <span class="informacao-icone">🕐</span>
                <div>
                  <span>Período</span>
                  <strong>{{ solicitacao.periodo || 'Não informado' }}</strong>
                </div>
              </div>
              <div class="informacao">
                <span class="informacao-icone">📍</span>
                <div>
                  <span>Cidade</span>
                  <strong>{{ solicitacao.cidade || 'Não informado' }}</strong>
                </div>
              </div>
              <div class="informacao">
                <span class="informacao-icone">💰</span>
                <div>
                  <span>Orçamento</span>
                  <strong>{{ solicitacao.orcamento || 'A combinar' }}</strong>
                </div>
              </div>
            </div>

            <div v-if="solicitacao.status === 'pendente'" class="mensagem-status pendente">
              <span>⏳</span>
              <div>
                <strong>Aguardando resposta do freelancer</strong>
                <p>Sua solicitação foi enviada. Aguarde o freelancer responder.</p>
              </div>
            </div>

            <div v-if="solicitacao.status === 'aceita'" class="mensagem-status aceita">
              <span>✓</span>
              <div>
                <strong>Serviço aceito!</strong>
                <p>O freelancer aceitou sua solicitação.</p>
              </div>
            </div>

            <div v-if="solicitacao.status === 'recusada'" class="mensagem-status recusada">
              <span>✕</span>
              <div>
                <strong>Serviço recusado</strong>
                <p>O freelancer recusou esta solicitação.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contratados-section">
        <h2 class="contratados-section__title">Profissionais Contratados</h2>

        <div v-if="contratacoes.length === 0" class="estado-vazio">
          <div class="estado-vazio__icone">🤝</div>
          <p class="estado-vazio__titulo">Você ainda não contratou ninguém</p>
          <p class="estado-vazio__texto">Quando você contratar um profissional, ele vai aparecer aqui.</p>
          <RouterLink to="/buscar" class="estado-vazio__botao">Buscar profissionais</RouterLink>
        </div>

        <div v-else class="contratados-grid">
          <div v-for="contratado in contratacoes" :key="contratado.id" class="contratado-card">
            <img :src="contratado.fotoPerfil || avatarPadrao" :alt="contratado.nome" class="contratado-card__foto" />
            <div class="contratado-card__info">
              <p class="contratado-card__nome">{{ contratado.nome }}</p>
              <p v-if="contratado.profissao" class="contratado-card__profissao">{{ contratado.profissao }}</p>
              <p v-if="contratado.dataContratacao" class="contratado-card__data">Contratado em {{ formatarData(contratado.dataContratacao) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUsuarioStore } from '@/stores/usuario'

const router = useRouter()
const usuarioStore = useUsuarioStore()
const avatarPadrao = '/img/avatar-padrao.png'

if (!usuarioStore.state.usuario) {
  router.replace('/login')
}

const usuario = computed(() => {
  return usuarioStore.state.usuario || {}
})

const contratacoes = computed(() => {
  return usuario.value.contratacoes || []
})

const solicitacoes = ref([])

const opcoesSegmento = {
  tecnologia: 'Tecnologia',
  varejo: 'Varejo / E-commerce',
  saude: 'Saúde',
  educacao: 'Educação',
  financeiro: 'Financeiro',
  outro: 'Outro'
}

const segmentoLabel = computed(() => {
  return opcoesSegmento[usuario.value.segmento] || ''
})

onMounted(() => {
  carregarSolicitacoes()
})

function carregarSolicitacoes() {
  const dados = localStorage.getItem('solicitacoes')

  if (!dados) {
    solicitacoes.value = []
    return
  }

  try {
    const todas = JSON.parse(dados)
    const clienteId = usuario.value.id || usuario.value.email || ''
    const clienteEmail = usuario.value.email || ''
    const clienteNome = usuario.value.nome || usuario.value.nomeEmpresa || ''

    solicitacoes.value = todas.filter(solicitacao => {
      if (solicitacao.clienteId && clienteId && solicitacao.clienteId === clienteId) {
        return true
      }

      if (solicitacao.clienteEmail && clienteEmail && solicitacao.clienteEmail === clienteEmail) {
        return true
      }

      if (solicitacao.clienteNome && clienteNome && solicitacao.clienteNome === clienteNome) {
        return true
      }

      return false
    })
  } catch (erro) {
    console.error('Erro ao carregar solicitações:', erro)
    solicitacoes.value = []
  }
}

function formatarData(data) {
  if (!data) {
    return 'Não informada'
  }

  const partes = data.split('-')

  if (partes.length !== 3) {
    return data
  }

  return `${partes[2]}/${partes[1]}/${partes[0]}`
}

function statusTexto(status) {
  const textos = {
    pendente: 'Aguardando resposta',
    aceita: 'Serviço aceito',
    recusada: 'Recusado'
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
  usuarioStore.logout()
  router.push('/')
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.dashboard-page {
  min-height: 100vh;
  width: 100%;
  background: #f3f4f6;
  padding: 40px 16px 64px;
}

.dashboard-container {
  max-width: 860px;
  margin: 0 auto;
}

.perfil-card {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background: white;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 1px 3px rgba(0,0,0,.06), 0 8px 24px rgba(0,0,0,.04);
  margin-bottom: 32px;
}

.perfil-card__foto {
  width: 88px;
  height: 88px;
  border-radius: 16px;
  object-fit: cover;
  border: 1px solid #e5e7eb;
  flex-shrink: 0;
}

.perfil-card__info {
  flex: 1;
}

.perfil-card__nome {
  font-size: 22px;
  font-weight: 800;
  color: #1a1a2e;
  margin: 0 0 4px;
}

.perfil-card__segmento {
  font-size: 14px;
  font-weight: 600;
  color: #3b5bfd;
  margin: 0 0 4px;
}

.perfil-card__cidade {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 10px;
}

.perfil-card__descricao {
  font-size: 14px;
  color: #374151;
  line-height: 1.5;
  margin: 0;
}

.perfil-card__sair {
  border: 1px solid #d1d5db;
  background: transparent;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  color: #4b5563;
  cursor: pointer;
  flex-shrink: 0;
}

.perfil-card__sair:hover {
  border-color: #dc2626;
  color: #dc2626;
}

.titulo-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.titulo-section h2 {
  font-size: 18px;
  font-weight: 800;
  color: #1a1a2e;
  margin: 0;
}

.titulo-section p {
  margin: 5px 0 0;
  color: #6b7280;
  font-size: 13px;
}

.contador {
  min-width: 30px;
  height: 30px;
  padding: 0 10px;
  border-radius: 20px;
  background: #3b5bfd;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
}

.solicitacoes-section {
  margin-bottom: 38px;
}

.solicitacoes-lista {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.solicitacao-card {
  background: white;
  border-radius: 16px;
  padding: 22px;
  box-shadow: 0 1px 3px rgba(0,0,0,.06);
  border: 1px solid #e5e7eb;
}

.solicitacao-topo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding-bottom: 17px;
  border-bottom: 1px solid #eee;
}

.freelancer-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.freelancer-foto {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
}

.pequeno-texto {
  display: block;
  font-size: 10px;
  color: #888;
  margin-bottom: 3px;
}

.freelancer-info h3 {
  margin: 0;
  font-size: 15px;
  color: #1a1a2e;
}

.status {
  padding: 7px 12px;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 700;
  white-space: nowrap;
}

.status-pendente {
  background: #fff4d6;
  color: #a66a00;
}

.status-aceita {
  background: #dcfce7;
  color: #15803d;
}

.status-recusada {
  background: #fee2e2;
  color: #b91c1c;
}

.servico-principal {
  padding: 20px 0 10px;
}

.servico-label {
  font-size: 10px;
  color: #888;
}

.servico-principal h2 {
  margin: 5px 0 9px;
  font-size: 21px;
  color: #1a1a2e;
}

.categoria {
  display: inline-block;
  padding: 5px 10px;
  background: #eef2ff;
  color: #3b5bfd;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 700;
}

.descricao-servico {
  padding: 12px 0 18px;
}

.descricao-servico strong {
  font-size: 11px;
}

.descricao-servico p {
  margin: 6px 0 0;
  color: #555;
  font-size: 12px;
  line-height: 1.6;
}

.informacoes-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  background: #f7f8ff;
  border-radius: 10px;
  padding: 15px;
}

.informacao {
  display: flex;
  align-items: center;
  gap: 7px;
}

.informacao-icone {
  font-size: 17px;
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

.mensagem-status {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 18px;
  padding: 13px;
  border-radius: 9px;
}

.mensagem-status > span {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
}

.mensagem-status strong {
  font-size: 11px;
}

.mensagem-status p {
  margin: 3px 0 0;
  font-size: 10px;
}

.pendente {
  background: #fff8e5;
  color: #8a5a00;
}

.pendente > span {
  background: #facc15;
  color: white;
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

.estado-vazio {
  background: white;
  border: 1px dashed #d1d5db;
  border-radius: 16px;
  padding: 48px 24px;
  text-align: center;
}

.estado-vazio__icone {
  font-size: 36px;
  margin-bottom: 10px;
}

.estado-vazio__titulo {
  font-size: 16px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 6px;
}

.estado-vazio__texto {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 18px;
}

.estado-vazio__botao {
  display: inline-block;
  background: #3b5bfd;
  color: white;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 14px;
}

.estado-vazio__botao:hover {
  background: #2f4bea;
}

.contratados-section {
  margin-top: 30px;
}

.contratados-section__title {
  font-size: 18px;
  font-weight: 800;
  color: #1a1a2e;
  margin: 0 0 18px;
}

.contratados-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.contratado-card {
  display: flex;
  align-items: center;
  gap: 14px;
  background: white;
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,.06);
}

.contratado-card__foto {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.contratado-card__nome {
  font-size: 15px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 2px;
}

.contratado-card__profissao {
  font-size: 13px;
  color: #3b5bfd;
  margin: 0 0 2px;
}

.contratado-card__data {
  font-size: 12px;
  color: #9ca3af;
  margin: 0;
}

@media (max-width: 700px) {
  .informacoes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .perfil-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .perfil-card__sair {
    align-self: flex-end;
  }

  .contratados-grid {
    grid-template-columns: 1fr;
  }

  .solicitacao-topo {
    align-items: flex-start;
    flex-direction: column;
  }

  .status {
    align-self: flex-start;
  }
}

@media (max-width: 450px) {
  .informacoes-grid {
    grid-template-columns: 1fr;
  }
}
</style>