<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUsuarioStore } from '@/stores/usuario'
import { profissionais } from '@/dataJs/profissionais.js'
import ProfileHeader from '../components/CabecalhoPerfil.vue'
import ProfileTabs from '../components/AbasPerfil.vue'
import AboutSection from '../components/SecaoSobre.vue'
import ServicesSidebar from '../components/BarraServicos.vue'
import AbaAvaliacao from '@/components/AbaAvaliacao.vue'
import ProfessionalCard from '@/components/CartaoProfissional.vue'

const route = useRoute()
const router = useRouter()
const usuarioStore = useUsuarioStore()
const activeTab = ref('Sobre')
const abaContratacoes = ref(route.query.aba === 'espera' ? 'espera' : 'contratados')
const contratacoesSection = ref(null)

function rolarParaContratacoes() {
  if (route.query.aba !== 'espera') return
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      contratacoesSection.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })
}

watch(() => route.query.aba, (aba) => {
  if (aba === 'espera') {
    abaContratacoes.value = 'espera'
    rolarParaContratacoes()
  }
}, { flush: 'post' })

onMounted(rolarParaContratacoes)

function formatarPreco(valor) {
  const numero = Number(valor)
  if (!Number.isFinite(numero)) return 'Sob consulta'
  return numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function criarExperiencia(usuario) {
  if (!usuario.profissao && !usuario.anosExperiencia) return []
  return [{
    role: usuario.profissao || 'Freelancer',
    company: 'Profissional autônomo',
    period: usuario.anosExperiencia ? `${usuario.anosExperiencia} de experiência` : '',
    description: usuario.descricao || 'Experiência profissional informada pelo freelancer.'
  }]
}

const profissional = computed(() => {
  const encontrado = profissionais.find(item => String(item.id) === String(route.params.id))
  if (encontrado) return encontrado

  const cadastrado = usuarioStore.buscarPorId(route.params.id)
  if (cadastrado) {
    return {
      id: cadastrado.id,
      name: cadastrado.nome,
      title: cadastrado.profissao || 'Profissional freelancer',
      avatar: cadastrado.fotoPerfil,
      verified: false,
      rating: cadastrado.rating || 0,
      reviewsCount: cadastrado.reviewsCount || 0,
      location: cadastrado.cidade || 'Localização não informada',
      completedProjects: cadastrado.completedProjects || 0,
      bio: cadastrado.descricao || 'Nenhuma descrição informada.',
      skills: cadastrado.categorias || [],
      experiences: criarExperiencia(cadastrado),
      services: cadastrado.precoServico
        ? [{ title: cadastrado.profissao, priceRange: formatarPreco(cadastrado.precoServico), duration: 'A combinar' }]
        : [],
      reviews: []
    }
  }

  const usuario = usuarioStore.buscarPorId(usuarioStore.state.usuario?.id)
    || usuarioStore.state.usuario
    || {}
  return {
    id: usuario.id,
    name: usuario.nome || 'Profissional',
    title: usuario.profissao || 'Profissional freelancer',
    avatar: usuario.fotoPerfil,
    verified: false,
    rating: 0,
    reviewsCount: 0,
    location: usuario.cidade || 'Localização não informada',
    completedProjects: 0,
    bio: usuario.descricao || 'Nenhuma descrição informada.',
    skills: usuario.categorias || [],
    experiences: criarExperiencia(usuario),
    services: usuario.precoServico
      ? [{ title: usuario.profissao, priceRange: formatarPreco(usuario.precoServico), duration: 'A combinar' }]
      : [],
    reviews: []
  }
})

const servicos = computed(() => profissional.value.services || [])
const ehMeuPerfil = computed(() => (
  !route.params.id || String(route.params.id) === String(usuarioStore.state.usuario?.id)
))
const contratacoes = computed(() => usuarioStore.state.usuario?.contratacoes || [])
const profissionaisEmEspera = computed(() => usuarioStore.state.usuario?.profissionaisEmEspera || [])
const profissionaisContratacoesExibidos = computed(() => (
  abaContratacoes.value === 'espera' ? profissionaisEmEspera.value : contratacoes.value
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
    services: profissional.services || []
  }
}

function verPerfilContratado(profissional) {
  router.push(`/perfil-freelancer/${profissional.id}`)
}

function cancelarPedido(profissional) {
  usuarioStore.cancelarContratacao(profissional.id)
}

function handleRequestQuote() {
  if (ehMeuPerfil.value) return
  if (!usuarioStore.state.usuario) {
    router.push('/login')
    return
  }
  usuarioStore.adicionarContratacao(profissional.value)
  if (usuarioStore.state.tipoUsuario === 'freelancer') {
    router.push({
      name: 'perfil-freelancer',
      params: { id: usuarioStore.state.usuario.id },
      query: { aba: 'espera' }
    })
    return
  }

  router.push({
    name: 'dashboard-cliente',
    query: { aba: 'espera' }
  })
}

function handleScheduleCall() {
  console.log('Agendar conversa')
}
</script>

<template>
  <div class="page-container">
    <ProfileHeader
      :name="profissional.name"
      :title="profissional.title"
      :avatar="profissional.avatar"
      :verified="profissional.verified"
      :rating="profissional.rating"
      :reviews-count="profissional.reviewsCount"
      :location="profissional.location"
      :completed-projects="profissional.completedProjects"
      :show-edit="ehMeuPerfil"
      :allow-request="!ehMeuPerfil"
      @request-quote="handleRequestQuote"
      @schedule-call="handleScheduleCall"
    />
    <main class="main-content">
      <div class="content-card">
        <ProfileTabs v-model="activeTab" />
        <div class="tab-body">
          <AboutSection
            v-if="activeTab === 'Sobre'"
            :bio="profissional.bio"
            :skills="profissional.skills"
            :experiences="profissional.experiences"
          />
          <div v-else-if="activeTab === 'Portfólio'" class="empty-tab">
            Nenhum item de portfólio ainda.
          </div>
          <AbaAvaliacao
            v-else-if="activeTab === 'Avaliações'"
            :profissional="profissional"
          />
        </div>
      </div>
      <ServicesSidebar
        :services="servicos"
        :allow-request="!ehMeuPerfil"
        @request-quote="handleRequestQuote"
      />
    </main>

    <section
      v-if="ehMeuPerfil"
      ref="contratacoesSection"
      class="contratacoes-section"
    >
      <div class="contratacoes-tabs" role="tablist" aria-label="Contratações">
        <button
          type="button"
          class="contratacoes-tab"
          :class="{ 'contratacoes-tab--ativa': abaContratacoes === 'contratados' }"
          @click="abaContratacoes = 'contratados'"
        >
          Contratados
          <span>{{ contratacoes.length }}</span>
        </button>
        <button
          type="button"
          class="contratacoes-tab"
          :class="{ 'contratacoes-tab--ativa': abaContratacoes === 'espera' }"
          @click="abaContratacoes = 'espera'"
        >
          Em espera
          <span>{{ profissionaisEmEspera.length }}</span>
        </button>
      </div>

      <div v-if="profissionaisContratacoesExibidos.length" class="contratacoes-grid">
        <ProfessionalCard
          v-for="contratado in profissionaisContratacoesExibidos"
          :key="contratado.id"
          :professional="transformarContratacao(contratado)"
          :show-cancel="abaContratacoes === 'espera'"
          @verPerfil="verPerfilContratado"
          @cancelar="cancelarPedido"
        />
      </div>
      <p v-else class="contratacoes-vazio">
        {{ abaContratacoes === 'espera' ? 'Nenhum profissional em espera.' : 'Nenhum freelancer contratado.' }}
      </p>
    </section>
  </div>
</template>

<style scoped>
.page-container { min-height: 100vh; background: #f8fafc; font-family: Arial, sans-serif; }
.main-content { max-width: 1120px; margin: 0 auto; display: grid; grid-template-columns: 1fr 320px; gap: 32px; padding: 32px 24px; }
.content-card { background: #fff; border-radius: 16px; border: 1px solid #e5e7eb; padding: 32px; }
.tab-body { padding-top: 24px; }
.empty-tab { color: #9ca3af; text-align: center; padding: 32px 0; font-size: 14px; }
.contratacoes-section { max-width: 1120px; margin: 0 auto 32px; padding: 0 24px 32px; }
.contratacoes-tabs { display: flex; gap: 8px; border-bottom: 1px solid #e5e7eb; }
.contratacoes-tab { border: 0; border-bottom: 2px solid transparent; background: transparent; color: #6b7280; padding: 12px 16px; font-weight: 700; cursor: pointer; }
.contratacoes-tab span { margin-left: 6px; color: #9ca3af; }
.contratacoes-tab--ativa { border-bottom-color: #2563eb; color: #2563eb; }
.contratacoes-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 24px; margin-top: 16px; }
.contratacoes-vazio { color: #6b7280; text-align: center; padding: 24px; }
@media (max-width: 900px) { .main-content { grid-template-columns: 1fr; } }
</style>
