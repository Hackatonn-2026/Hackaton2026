<script setup>
import { ref, computed } from 'vue'

import ServiceFilters from '../components/filters/ServiceFilters.vue'
import ProfessionalCard from '../components/cards/ProfessionalCard.vue'

import { professionals } from '../data/professionals'

const search = ref('')

const filters = ref({
  category: 'Todas',
  city: 'Todas',
  rating: 'Qualquer avaliação',
  experience: 'Qualquer experiência',
  attendance: 'Todos',
  availability: 'Qualquer dia',
  minPrice: '',
  maxPrice: '',
  verified: false,
  certificates: false
})

function updateFilters(newFilters) {
  filters.value = newFilters
}

const filteredProfessionals = computed(() => {
  return professionals.filter((professional) => {

    // PESQUISA
    const searchText = search.value.toLowerCase()

    const matchesSearch =
      professional.name.toLowerCase().includes(searchText) ||
      professional.specialty.toLowerCase().includes(searchText) ||
      professional.category.toLowerCase().includes(searchText)

    if (!matchesSearch) return false

    // CATEGORIA
    if (
      filters.value.category !== 'Todas' &&
      professional.category !== filters.value.category
    ) {
      return false
    }

    // CIDADE
    if (
      filters.value.city !== 'Todas' &&
      professional.city !== filters.value.city
    ) {
      return false
    }

    // AVALIAÇÃO
    if (
      filters.value.rating !== 'Qualquer avaliação' &&
      professional.rating < Number(filters.value.rating)
    ) {
      return false
    }

    // EXPERIÊNCIA
    if (
      filters.value.experience !== 'Qualquer experiência' &&
      professional.experience < Number(filters.value.experience)
    ) {
      return false
    }

    // ATENDIMENTO
    if (
      filters.value.attendance !== 'Todos' &&
      professional.attendance !== filters.value.attendance
    ) {
      return false
    }

    // DISPONIBILIDADE
    if (
      filters.value.availability !== 'Qualquer dia' &&
      !professional.availability.includes(filters.value.availability)
    ) {
      return false
    }

    // PREÇO MÍNIMO
    if (
      filters.value.minPrice &&
      professional.price < Number(filters.value.minPrice)
    ) {
      return false
    }

    // PREÇO MÁXIMO
    if (
      filters.value.maxPrice &&
      professional.price > Number(filters.value.maxPrice)
    ) {
      return false
    }

    // VERIFICADO
    if (
      filters.value.verified &&
      !professional.verified
    ) {
      return false
    }

    // CERTIFICADOS
    if (
      filters.value.certificates &&
      !professional.certificates
    ) {
      return false
    }

    return true
  })
})
</script>

<template>
  <main class="professionals-page">

    <header class="page-header">

      <span class="eyebrow">
        PROFISSIONAIS DA REGIÃO
      </span>

      <h1>
        Encontre quem pode te ajudar
      </h1>

      <p>
        Profissionais selecionados e verificados pela nossa equipe.
      </p>

      <div class="search-container">
        <input
          v-model="search"
          type="search"
          placeholder="Busque por serviço, profissão ou profissional..."
        />

        <span>⌕</span>
      </div>

    </header>

    <section class="filters-section">

      <ServiceFilters
        @filter="updateFilters"
      />

    </section>

    <section class="results">

      <div class="results-header">

        <h2>
          Profissionais encontrados
        </h2>

        <span>
          {{ filteredProfessionals.length }}
          resultado(s)
        </span>

      </div>

      <div
        v-if="filteredProfessionals.length"
        class="professionals-grid"
      >

        <ProfessionalCard
          v-for="professional in filteredProfessionals"
          :key="professional.id"
          :professional="professional"
        />

      </div>

      <div
        v-else
        class="empty-state"
      >

        <h3>
          Nenhum profissional encontrado
        </h3>

        <p>
          Tente alterar ou remover alguns filtros.
        </p>

      </div>

    </section>

  </main>
</template>

<style scoped>
.professionals-page {
  min-height: 100vh;
  padding: 50px 7%;
  background: #f7f7f7;
}

.page-header {
  max-width: 900px;
  margin: 0 auto 40px;
  text-align: center;
}

.eyebrow {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.page-header h1 {
  margin: 12px 0;
  font-size: 42px;
}

.page-header p {
  color: black;
}

.search-container {
  position: relative;
  max-width: 650px;
  margin: 30px auto 0;
}

.search-container input {
  width: 100%;
  box-sizing: border-box;
  padding: 16px 50px 16px 18px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 15px;
}

.search-container span {
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
}

.filters-section {
  max-width: 1200px;
  margin: auto;
}

.results {
  max-width: 1200px;
  margin: 50px auto 0;
}

.results-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.results-header h2 {
  margin: 0;
}

.results-header span {
  color: black;
}

.professionals-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.empty-state {
  padding: 70px 20px;
  text-align: center;
  background: white;
  border-radius: 16px;
}

.empty-state p {
  color: black;
}

@media (max-width: 1000px) {
  .professionals-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 650px) {
  .professionals-page {
    padding: 30px 20px;
  }

  .page-header h1 {
    font-size: 32px;
  }

  .professionals-grid {
    grid-template-columns: 1fr;
  }

  .results-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>