<template>
  <div class="busca-page">
    <div class="container">

      <header class="busca-header">
        <h1>Profissionais</h1>
        <p>{{ profissionaisFiltrados.length }} profissionais encontrados para <strong>{{ categoriaSelecionada }}</strong></p>
      </header>

      <div class="busca-content">
        <aside class="sidebar-wrapper">
          <FilterSidebar />
        </aside>

        <main class="lista-profissionais">

          <div v-if="profissionaisFiltrados.length === 0" class="empty-state">
            Nenhum profissional encontrado para esta categoria.
          </div>

          <div class="cards-grid" v-else>
            <ProfessionalCard
              v-for="prof in profissionaisFiltrados"
              :key="prof.id"
              :professional="prof"
              @verPerfil="irParaPerfil"
            />
          </div>

        </main>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import FilterSidebar from '@/components/FilterSidebar.vue'
import ProfessionalCard from '@/components/ProfessionalCard.vue'
const route = useRoute()
const router = useRouter()
const categoriaSelecionada = computed(() => route.query.busca || 'Todas as categorias')

const profissionais = ref([
  {
    id: 1,
    name: 'Carlos Silva',
    role: 'Desenvolvedor Full Stack',
    category: 'Desenvolvimento',
    rating: '4.9',
    reviews: 127,
    price: '150'
  },
  {
    id: 2,
    name: 'Ana Costa',
    role: 'Designer Gráfica',
    category: 'Design',
    rating: '5.0',
    reviews: 89,
    price: '120'
  },
  {
    id: 3,
    name: 'Roberto Santos',
    role: 'Eletricista Residencial',
    category: 'Elétrica',
    rating: '4.8',
    reviews: 203,
    price: '90'
  },
  {
    id: 4,
    name: 'Mariana Silva',
    role: 'UX/UI Designer',
    category: 'Design',
    rating: '4.7',
    reviews: 56,
    price: '100'
  }
])

const profissionaisFiltrados = computed(() => {
  // Se não tiver filtro na URL, exibe todos
  if (!route.query.busca) {
    return profissionais.value
  }

  // Retorna apenas os profissionais que tem a mesma categoria da URL
  return profissionais.value.filter(
    (p) => p.category === route.query.busca
  )
})

function irParaPerfil(profissional) {
  console.log('Navegando para o perfil de:', profissional.name)
  router.push(`/perfil/${profissional.id}`)
}
</script>

<style scoped>
.busca-page {
  background-color: #f9fafb;
  min-height: 100vh;
  padding: 40px 0;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.busca-header h1 {
  font-size: 32px;
  color: #111827;
  margin-bottom: 8px;
}

.busca-header p {
  color: #6b7280;
  margin-bottom: 30px;
  font-size: 15px;
}

.busca-content {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

.sidebar-wrapper {
  width: 280px;
  flex-shrink: 0;
}

.lista-profissionais {
  flex: 1;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
}

.empty-state {
  padding: 40px;
  text-align: center;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  color: #6b7280;
}
</style>
