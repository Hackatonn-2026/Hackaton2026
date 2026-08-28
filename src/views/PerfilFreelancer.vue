<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUsuarioStore } from '@/stores/usuario'
import { profissionais } from '@/dataJs/profissionais.js'
import ProfileHeader from '../components/CabecalhoPerfil.vue'
import ProfileTabs from '../components/AbasPerfil.vue'
import AboutSection from '../components/SecaoSobre.vue'
import ServicesSidebar from '../components/BarraServicos.vue'
import AbaAvaliacao from '@/components/AbaAvaliacao.vue'

const route = useRoute()
const router = useRouter()
const usuarioStore = useUsuarioStore()
const activeTab = ref('Sobre')

const profissional = computed(() => {
  const encontrado = profissionais.find(item => item.id === Number(route.params.id))
  if (encontrado) return encontrado

  const usuario = usuarioStore.state.usuario || {}
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
    experiences: [],
    reviews: []
  }
})

const servicos = [
  { title: 'Desenvolvimento de Website', priceRange: 'R$ 3.000 - R$ 8.000', duration: '2-4 semanas' },
  { title: 'App Mobile (iOS/Android)', priceRange: 'R$ 10.000 - R$ 25.000', duration: '1-3 meses' },
  { title: 'Consultoria Técnica', priceRange: 'R$ 150/hora', duration: 'Por hora' }
]

function handleRequestQuote() {
  if (!usuarioStore.state.usuario) {
    router.push('/login')
    return
  }
  usuarioStore.adicionarContratacao(profissional.value)
  router.push('/dashboard-cliente')
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
      <ServicesSidebar :services="servicos" @request-quote="handleRequestQuote" />
    </main>
  </div>
</template>

<style scoped>
.page-container { min-height: 100vh; background: #f8fafc; font-family: Arial, sans-serif; }
.main-content { max-width: 1120px; margin: 0 auto; display: grid; grid-template-columns: 1fr 320px; gap: 32px; padding: 32px 24px; }
.content-card { background: #fff; border-radius: 16px; border: 1px solid #e5e7eb; padding: 32px; }
.tab-body { padding-top: 24px; }
.empty-tab { color: #9ca3af; text-align: center; padding: 32px 0; font-size: 14px; }
@media (max-width: 900px) { .main-content { grid-template-columns: 1fr; } }
</style>
