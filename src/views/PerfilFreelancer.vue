<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { profissionais } from '@/dataJs/profissionais.js'
import AppHeader from '@/layout/Header.vue'
import ProfileHeader from '../components/CabecalhoPerfil.vue'
import ProfileTabs from '../components/AbasPerfil.vue'
import AboutSection from '../components/SecaoSobre.vue'
import ServicesSidebar from '../components/BarraServicos.vue'
import AbaAvaliacao from '@/components/AbaAvaliacao.vue'

const route = useRoute()
const activeTab = ref('Sobre')

// Encontra o profissional pelo ID da rota de forma reativa e segura
const profissional = computed(() => {
  const idRoute = Number(route.params.id)
  return profissionais.find(p => Number(p.id) === idRoute) || null
})

// Usa os serviços do próprio profissional cadastrado (se houver) ou fallback
const servicos = computed(() => {
  if (profissional.value && profissional.value.services && profissional.value.services.length > 0) {
    return profissional.value.services
  }
  return [
    {
      title: 'Atendimento e Consultoria',
      priceRange: 'A combinar',
      duration: 'Por projeto',
    }
  ]
})

function handleRequestQuote() {
  console.log('Solicitar orçamento')
}

function handleScheduleCall() {
  console.log('Agendar conversa')
}
</script>

<template>
  <div v-if="!profissional" class="nao-encontrado">
    <h2>Profissional não encontrado</h2>
    <p>O perfil que você tentou acessar não existe ou foi removido.</p>
    <RouterLink to="/buscar" class="btn-voltar">Voltar para a busca</RouterLink>
  </div>

  <div v-else class="page-container">

    <ProfileHeader
      :name="profissional.name"
      :title="profissional.title"
      :avatar="profissional.avatar"
      :verified="profissional.verified"
      :rating="profissional.rating"
      :reviews-count="profissional.reviewsCount || 0"
      :location="profissional.location"
      :completed-projects="profissional.completedProjects || 0"
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
.page-container {
  min-height: 100vh;
  background-color: #f8fafc;
  font-family: Arial, sans-serif;
  color: #1f2937;
}

.main-content {
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 32px;
  padding: 32px 24px;
}

.content-card {
  background-color: #ffffff;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.tab-body {
  padding-top: 24px;
  color: #374151; /* Garante visibilidade do texto */
}

.empty-tab {
  color: #6b7280;
  text-align: center;
  padding: 32px 0;
  font-size: 14px;
}

.nao-encontrado {
  text-align: center;
  padding: 80px 20px;
  font-family: Arial, sans-serif;
}

.nao-encontrado h2 {
  font-size: 24px;
  color: #111827;
  margin-bottom: 8px;
}

.nao-encontrado p {
  color: #6b7280;
  margin-bottom: 24px;
}

.btn-voltar {
  display: inline-block;
  background-color: #2563eb;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}

@media (max-width: 900px) {
  .main-content {
    grid-template-columns: 1fr;
  }
}
</style>
