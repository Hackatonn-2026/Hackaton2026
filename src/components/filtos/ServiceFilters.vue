<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['filter'])

const categories = [
  'Todas',
  'Limpeza',
  'Manutenção',
  'Beleza',
  'Tecnologia',
  'Educação',
  'Eventos',
  'Fotografia',
  'Design',
  'Construção',
  'Jardinagem'
]

const cities = [
  'Todas',
  'Bombas',
  'Porto Belo',
  'Itapema'
]

const ratings = [
  'Qualquer avaliação',
  '5',
  '4',
  '3'
]

const experiences = [
  'Qualquer experiência',
  '1',
  '3',
  '5'
]

const attendances = [
  'Todos',
  'Presencial',
  'Online'
]

const availabilityOptions = [
  'Qualquer dia',
  'Hoje',
  'Amanhã',
  'Esta semana',
  'Final de semana'
]

const category = ref('Todas')
const city = ref('Todas')
const rating = ref('Qualquer avaliação')
const experience = ref('Qualquer experiência')
const attendance = ref('Todos')
const availability = ref('Qualquer dia')

const minPrice = ref('')
const maxPrice = ref('')

const verified = ref(false)
const certificates = ref(false)

const showMoreFilters = ref(false)

const activeFilters = computed(() => {
  let total = 0

  if (category.value !== 'Todas') total++
  if (city.value !== 'Todas') total++
  if (rating.value !== 'Qualquer avaliação') total++
  if (experience.value !== 'Qualquer experiência') total++
  if (attendance.value !== 'Todos') total++
  if (availability.value !== 'Qualquer dia') total++
  if (minPrice.value) total++
  if (maxPrice.value) total++
  if (verified.value) total++
  if (certificates.value) total++

  return total
})

function applyFilters() {
  emit('filter', {
    category: category.value,
    city: city.value,
    rating: rating.value,
    experience: experience.value,
    attendance: attendance.value,
    availability: availability.value,
    minPrice: minPrice.value,
    maxPrice: maxPrice.value,
    verified: verified.value,
    certificates: certificates.value
  })
}

function clearFilters() {
  category.value = 'Todas'
  city.value = 'Todas'
  rating.value = 'Qualquer avaliação'
  experience.value = 'Qualquer experiência'
  attendance.value = 'Todos'
  availability.value = 'Qualquer dia'

  minPrice.value = ''
  maxPrice.value = ''

  verified.value = false
  certificates.value = false

  applyFilters()
}
</script>

<template>
  <section class="filter-container">

    <div class="filter-header">
      <div>
        <h2>Encontre o profissional ideal</h2>
        <p>Escolha os filtros para encontrar o serviço que você precisa.</p>
      </div>

      <button
        class="clear-button"
        @click="clearFilters"
      >
        Limpar filtros
      </button>
    </div>

    <div class="quick-filters">

      <div class="filter-field">
        <label>Categoria</label>

        <select v-model="category">
          <option
            v-for="item in categories"
            :key="item"
            :value="item"
          >
            {{ item }}
          </option>
        </select>
      </div>

      <div class="filter-field">
        <label>Localização</label>

        <select v-model="city">
          <option
            v-for="item in cities"
            :key="item"
            :value="item"
          >
            {{ item }}
          </option>
        </select>
      </div>

      <div class="filter-field">
        <label>Avaliação</label>

        <select v-model="rating">
          <option
            v-for="item in ratings"
            :key="item"
            :value="item"
          >
            {{ item === 'Qualquer avaliação' ? item : `${item} estrelas ou mais` }}
          </option>
        </select>
      </div>

      <div class="filter-field">
        <label>Disponibilidade</label>

        <select v-model="availability">
          <option
            v-for="item in availabilityOptions"
            :key="item"
            :value="item"
          >
            {{ item }}
          </option>
        </select>
      </div>

    </div>

    <button
      class="more-filters-button"
      @click="showMoreFilters = !showMoreFilters"
    >
      {{ showMoreFilters ? 'Ocultar filtros' : 'Mais filtros' }}

      <span v-if="activeFilters > 0">
        {{ activeFilters }}
      </span>
    </button>

    <div
      v-if="showMoreFilters"
      class="advanced-filters"
    >

      <div class="filter-field">
        <label>Experiência mínima</label>

        <select v-model="experience">
          <option
            v-for="item in experiences"
            :key="item"
            :value="item"
          >
            {{
              item === 'Qualquer experiência'
                ? item
                : `${item}+ anos`
            }}
          </option>
        </select>
      </div>

      <div class="filter-field">
        <label>Tipo de atendimento</label>

        <select v-model="attendance">
          <option
            v-for="item in attendances"
            :key="item"
            :value="item"
          >
            {{ item }}
          </option>
        </select>
      </div>

      <div class="price-group">

        <div class="filter-field">
          <label>Preço mínimo</label>

          <input
            v-model="minPrice"
            type="number"
            min="0"
            placeholder="R$ 0"
          />
        </div>

        <div class="filter-field">
          <label>Preço máximo</label>

          <input
            v-model="maxPrice"
            type="number"
            min="0"
            placeholder="R$ 500"
          />
        </div>

      </div>

      <div class="checkbox-group">

        <label class="checkbox">
          <input
            v-model="verified"
            type="checkbox"
          />

          <span>
            Profissional verificado
          </span>
        </label>

        <label class="checkbox">
          <input
            v-model="certificates"
            type="checkbox"
          />

          <span>
            Possui certificados
          </span>
        </label>

      </div>

    </div>

    <button
      class="apply-button"
      @click="applyFilters"
    >
      Encontrar profissionais
    </button>

  </section>
</template>

<style scoped>
.filter-container {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
}

.filter-header h2 {
  margin: 0 0 6px;
}

.filter-header p {
  margin: 0;
  color: #666;
}

.clear-button {
  border: none;
  background: transparent;
  cursor: pointer;
  text-decoration: underline;
}

.quick-filters,
.advanced-filters {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.filter-field {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.filter-field label {
  font-size: 14px;
  font-weight: 600;
}

.filter-field select,
.filter-field input {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
  font-size: 14px;
}

.more-filters-button {
  margin-top: 20px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-weight: 600;
}

.more-filters-button span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 5px;
  border-radius: 50%;
  background: #222;
  color: white;
  font-size: 12px;
}

.advanced-filters {
  margin-top: 20px;
  grid-template-columns: repeat(3, 1fr);
}

.price-group {
  display: flex;
  gap: 10px;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
}

.checkbox {
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
}

.apply-button {
  width: 100%;
  margin-top: 24px;
  padding: 14px;
  border: none;
  border-radius: 8px;
  background: #111;
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}

.apply-button:hover {
  opacity: 0.9;
}

@media (max-width: 900px) {
  .quick-filters,
  .advanced-filters {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .filter-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .quick-filters,
  .advanced-filters {
    grid-template-columns: 1fr;
  }

  .price-group {
    flex-direction: column;
  }
}
</style>