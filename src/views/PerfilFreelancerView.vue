<script setup>
import { ref } from 'vue'
import ProfileHeader from '../components/ProfileHeader.vue'
import ProfileTabs from '../components/ProfileTabs.vue'
import AboutSection from '../components/AboutSection.vue'
import ServicesSidebar from '../components/ServicesSidebar.vue'
import { profissionais } from '@/dataJs/profissionais.js'
import { useRoute } from 'vue-router'
import AbaAvaliacao from '@/components/AbaAvaliacao.vue'

const activeTab = ref('Sobre')

  const route = useRoute()

  const profissional = profissionais.find(p => p.id === Number(route.params.id))
// const profissional = profissionais.find(p => p.id === 1)
const servicos = [
  {
    title: 'Desenvolvimento de Website',
    priceRange: 'R$ 3.000 - R$ 8.000',
    duration: '2-4 semanas',
  },
  {
    title: 'App Mobile (iOS/Android)',
    priceRange: 'R$ 10.000 - R$ 25.000',
    duration: '1-3 meses',
  },
  {
    title: 'Consultoria Técnica',
    priceRange: 'R$ 150/hora',
    duration: 'Por hora',
  },
]

function handleRequestQuote() {
  console.log('Solicitar orçamento')
}

function handleScheduleCall() {
  console.log('Agendar conversa')
}
</script>

<template>
  <div class="page-container">
    <AppHeader />

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
.page-container {
  min-height: 100vh;
  background-color: #f8fafc;
  font-family: Arial, sans-serif;
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
}

.tab-body {
  padding-top: 24px;
}

.empty-tab {
  color: #9ca3af;
  text-align: center;
  padding: 32px 0;
  font-size: 14px;
}

@media (max-width: 900px) {
  .main-content {
    grid-template-columns: 1fr;
  }
}
</style>