<template>
  <div class="dashboard-page">
    <div class="dashboard-container">
      <div class="perfil-card">
        <img
          :src="usuario.fotoPerfil || avatarPadrao"
          :alt="usuario.nomeEmpresa || usuario.nome"
          class="perfil-card__foto"
        />
        <div class="perfil-card__info">
          <h1 class="perfil-card__nome">
            {{ usuario.nomeEmpresa || usuario.nome }}
          </h1>
          <p class="perfil-card__segmento">
            {{ segmentoLabel }}
          </p>
          <p
            v-if="usuario.cidade"
            class="perfil-card__cidade"
          >
            {{ usuario.cidade }}
          </p>
          <p
            v-if="usuario.descricao"
            class="perfil-card__descricao"
          >
            {{ usuario.descricao }}
          </p>
        </div>
        <div class="perfil-card__acoes">
          <RouterLink
            to="/editar-perfil"
            class="perfil-card__editar"
          >
            Editar Perfil
          </RouterLink>
        </div>
      </div>
      <div class="contratados-section">
        <div class="profissionais-tabs" role="tablist" aria-label="Profissionais">
          <button
            type="button"
            class="profissionais-tab"
            :class="{ 'profissionais-tab--ativa': abaAtiva === 'contratados' }"
            @click="abaAtiva = 'contratados'"
          >
            Contratados
            <span>{{ contratacoes.length }}</span>
          </button>
          <button
            type="button"
            class="profissionais-tab"
            :class="{ 'profissionais-tab--ativa': abaAtiva === 'espera' }"
            @click="abaAtiva = 'espera'"
          >
            Em espera
            <span>{{ profissionaisEmEspera.length }}</span>
          </button>
        </div>

        <h2 class="contratados-section__title">
          {{ abaAtiva === 'espera' ? 'Profissionais em espera' : 'Profissionais contratados' }}
        </h2>
        <div v-if="profissionaisExibidos.length === 0" class="estado-vazio">
          <div class="estado-vazio__icone">🤝</div>
          <p class="estado-vazio__titulo">
            {{ abaAtiva === 'espera' ? 'Nenhum profissional aguardando resposta' : 'Você ainda não contratou ninguém' }}
          </p>
          <p class="estado-vazio__texto">
            {{ abaAtiva === 'espera' ? 'As solicitações enviadas aparecerão aqui.' : 'Quando você contratar um profissional, ele vai aparecer aqui.' }}
          </p>
          <RouterLink to="/buscar" class="estado-vazio__botao">
            Buscar profissionais
          </RouterLink>
        </div>
        <div v-else class="contratados-grid">
          <ProfessionalCard
            v-for="contratado in profissionaisExibidos"
            :key="contratado.id"
            :professional="transformarContratacao(contratado)"
            :show-cancel="abaAtiva === 'espera'"
            @verPerfil="verPerfilContratado"
            @cancelar="cancelarPedido"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUsuarioStore } from '@/stores/usuario'
import ProfessionalCard from '@/components/CartaoProfissional.vue'
const router = useRouter()
const route = useRoute()
const usuarioStore = useUsuarioStore()
const avatarPadrao = '/img/avatar-padrao.png'
if (!usuarioStore.state.usuario) {
  router.replace('/login')
}
const usuario = computed(() => usuarioStore.state.usuario || {})
const contratacoes = computed(() => (
  usuario.value.profissionaisEmEspera ? usuario.value.contratacoes || [] : []
))
const profissionaisEmEspera = computed(() => (
  usuario.value.profissionaisEmEspera || (
    usuario.value.contratacoes && !usuario.value.profissionaisEmEspera
      ? usuario.value.contratacoes
      : []
  )
))
const abaAtiva = ref(route.query.aba === 'contratados' ? 'contratados' : 'espera')
const profissionaisExibidos = computed(() => (
  abaAtiva.value === 'espera' ? profissionaisEmEspera.value : contratacoes.value
))

function transformarContratacao(profissional) {
  return {
    id: profissional.id,
    name: profissional.nome || profissional.name || 'Profissional',
    title: profissional.profissao || profissional.title || 'Profissional freelancer',
    avatar: profissional.fotoPerfil || profissional.avatar,
    rating: profissional.avaliacao || profissional.rating || 0,
    reviewsCount: profissional.reviewsCount || 0,
    location: profissional.localizacao || profissional.location || '',
    skills: profissional.skills || [],
    services: profissional.services || (profissional.precoServico
      ? [{ title: profissional.profissao, priceRange: profissional.precoServico, duration: 'A combinar' }]
      : [])
  }
}

function verPerfilContratado(profissional) {
  router.push(`/perfil-freelancer/${profissional.id}`)
}
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
function cancelarPedido(profissional) {
  usuarioStore.cancelarContratacao(profissional.id)
}
</script>
<style scoped>
.dashboard-page {
  min-height: 100vh;
  width: 100%;
  background: #f3f4f6;
  padding: 40px 16px 64px;
  box-sizing: border-box;
}
.dashboard-container {
  max-width: 1120px;
  margin: 0 auto;
}
.perfil-card {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background: #fff;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 6%), 0 8px 24px rgb(0 0 0 / 4%);
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
  min-width: 0;
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
.perfil-card__acoes {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
}
.perfil-card__editar {
  border: 1px solid #3b5bfd;
  background: transparent;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #3b5bfd;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
}
.perfil-card__editar:hover {
  background: #e8ecff;
}
.perfil-card__sair {
  border: 1px solid #d1d5db;
  background: transparent;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  color: #4b5563;
  cursor: pointer;
}
.perfil-card__sair:hover {
  border-color: #dc2626;
  color: #dc2626;
}
.contratados-section__title {
  font-size: 18px;
  font-weight: 800;
  color: #1a1a2e;
  margin: 0 0 18px;
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
.contratados-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 280px));
  justify-content: start;
  gap: 24px;
}
.contratados-grid :deep(.card) {
  width: 100%;
  max-width: none;
  margin: 0;
}
.profissionais-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  border-bottom: 1px solid #e5e7eb;
}
.profissionais-tab {
  padding: 10px 14px;
  border: 0;
  border-bottom: 2px solid transparent;
  background: transparent;
  color: #6b7280;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}
.profissionais-tab span {
  display: inline-flex;
  min-width: 20px;
  justify-content: center;
  margin-left: 4px;
  color: #9ca3af;
}
.profissionais-tab--ativa {
  border-bottom-color: #3b5bfd;
  color: #3b5bfd;
}
.profissionais-tab--ativa span {
  color: #3b5bfd;
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
.contratado-card__detalhes {
  display: flex;
  gap: 10px;
  font-size: 12px;
  color: #6b7280;
  margin: 0 0 2px;
}
.contratado-card__detalhes span:first-child {
  color: #d97706;
  font-weight: 600;
}
.contratado-card__status {
  font-size: 12px;
  color: #b45309;
  margin: 4px 0 8px;
}
.contratado-card__perfil {
  display: inline-block;
  padding: 7px 12px;
  border-radius: 7px;
  background: #eef2ff;
  color: #3b5bfd;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
}
.contratado-card__perfil:hover {
  background: #e0e7ff;
}
.contratado-card__cancelar {
  display: inline-block;
  margin-left: 6px;
  padding: 7px 12px;
  border: 1px solid #fecaca;
  border-radius: 7px;
  background: #fff;
  color: #dc2626;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
}
.contratado-card__cancelar:hover {
  background: #fef2f2;
}
@media (max-width: 600px) {
  .perfil-card {
    flex-direction: column;
    align-items: flex-start;
  }
  .perfil-card__acoes {
    flex-direction: row;
    align-self: flex-end;
  }
  .contratados-grid {
    grid-template-columns: 1fr;
  }
}

</style>
