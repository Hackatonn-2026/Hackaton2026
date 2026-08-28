<template>
  <div class="services-page">
    <!-- HEADER DA PÁGINA -->
    <section class="services-header">
      <div class="header-content">
        <span class="tag">SERVIÇOS</span>

        <h1>
          Encontre o profissional<br />
          <span>ideal para você.</span>
        </h1>

        <p>Serviços realizados por profissionais selecionados e qualificados pela nossa empresa.</p>

        <!-- BUSCA -->
        <div class="search-box">
          <span class="search-icon">⌕</span>

          <input v-model="search" type="text" placeholder="O que você precisa?" />

          <button>Buscar</button>
        </div>
      </div>
    </section>
    <section class="categories-section">
      <div class="section-title">
        <span>ENCONTRE O QUE PRECISA</span>
        <h2>Explore nossos serviços</h2>
      </div>

      <div class="categories">
        <button
          v-for="category in categories"
          :key="category"
          :class="{ active: selectedCategory === category }"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>
    </section>
    <section class="services-section">
      <div class="services-top">
        <div>
          <span class="section-label">PROFISSIONAIS SELECIONADOS</span>

          <h2>Serviços disponíveis</h2>
        </div>

        <span class="results"> {{ filteredServices.length }} serviços encontrados </span>
      </div>

      <div class="services-grid">
        <!-- CARD -->
        <article v-for="service in filteredServices" :key="service.id" class="service-card">
          <!-- IMAGEM -->
          <div class="service-image">
            <img :src="service.image" :alt="service.title" />

            <span class="category-badge">
              {{ service.category }}
            </span>
          </div>
          <div class="service-content">
            <h3>
              {{ service.title }}
            </h3>

            <p class="description">
              {{ service.description }}
            </p>

            <!-- PROFISSIONAL -->
            <div class="professional">
              <div class="avatar">
                {{ service.professional.charAt(0) }}
              </div>

              <div>
                <strong>
                  {{ service.professional }}
                </strong>

                <span> Profissional credenciado </span>
              </div>
            </div>
            <div class="rating">
              <span class="stars"> ★★★★★ </span>

              <strong>
                {{ service.rating }}
              </strong>

              <span> ({{ service.reviews }} avaliações) </span>
            </div>

            <div class="location">📍 {{ service.location }}</div>
            <div class="card-footer">
              <div class="price">
                <span>A partir de</span>

                <strong>
                  {{ service.price }}
                </strong>
              </div>

              <button class="details-button" @click="viewService(service)">Ver serviço</button>
            </div>
          </div>
        </article>
      </div>
      <div v-if="filteredServices.length === 0" class="empty-state">
        <h3>Nenhum serviço encontrado</h3>

        <p>Tente buscar por outro serviço ou categoria.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
defineOptions({
  name: 'ServicesPage',
})

import { computed, ref } from 'vue'

const search = ref('')
const selectedCategory = ref('Todos')
const categories = ['Todos', 'Casa', 'Beleza', 'Tecnologia', 'Educação', 'Eventos', 'Automotivo']
const services = [
  {
    id: 1,
    title: 'Limpeza residencial',
    category: 'Casa',
    description: 'Limpeza completa de ambientes residenciais com profissionais qualificados.',
    professional: 'Mariana Costa',
    rating: '4.9',
    reviews: 38,
    location: 'Bombas - SC',
    price: 'R$ 120',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
  },

  {
    id: 2,
    title: 'Manutenção elétrica',
    category: 'Casa',
    description: 'Serviços de manutenção elétrica residencial e pequenos reparos.',
    professional: 'Carlos Mendes',
    rating: '5.0',
    reviews: 27,
    location: 'Bombinhas - SC',
    price: 'R$ 100',
    image:
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
  },

  {
    id: 3,
    title: 'Design para redes sociais',
    category: 'Tecnologia',
    description: 'Criação de artes profissionais para Instagram, Facebook e outras redes.',
    professional: 'Lucas Almeida',
    rating: '4.8',
    reviews: 19,
    location: 'Porto Belo - SC',
    price: 'R$ 80',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
  },

  {
    id: 4,
    title: 'Aulas particulares',
    category: 'Educação',
    description: 'Aulas personalizadas de reforço escolar para diferentes níveis de ensino.',
    professional: 'Ana Beatriz',
    rating: '4.9',
    reviews: 31,
    location: 'Bombinhas - SC',
    price: 'R$ 60',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  },

  {
    id: 5,
    title: 'Maquiagem profissional',
    category: 'Beleza',
    description: 'Maquiagem para eventos, festas, ensaios e ocasiões especiais.',
    professional: 'Juliana Martins',
    rating: '5.0',
    reviews: 44,
    location: 'Bombas - SC',
    price: 'R$ 150',
    image:
      'https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Fotografia para eventos',
    category: 'Eventos',
    description: 'Cobertura fotográfica profissional para eventos e momentos especiais.',
    professional: 'Rafael Souza',
    rating: '4.9',
    reviews: 22,
    location: 'Porto Belo - SC',
    price: 'R$ 300',
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
  },
]
const filteredServices = computed(() => {
  return services.filter((service) => {
    const matchesCategory =
      selectedCategory.value === 'Todos' || service.category === selectedCategory.value
    const matchesSearch = service.title.toLowerCase().includes(search.value.toLowerCase())
    return matchesCategory && matchesSearch
  })
})

const viewService = (service) => {
  console.log('Serviço selecionado:', service)
  // Futuramente:
  // router.push(`/servicos/${service.id}`)
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.services-page {
  background: #f8f9f7;
  min-height: 100vh;
  color: #1d2922;
}

.services-header {
  background: #183c2b;
  color: white;
  padding: 90px 8% 100px;
}
.header-content {
  max-width: 1100px;
  margin: 0 auto;
}
.tag {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #a7d5b5;
  margin-bottom: 20px;
}
.services-header h1 {
  font-size: clamp(40px, 6vw, 68px);
  line-height: 1.05;
  margin: 0;
  font-weight: 700;
}
.services-header h1 span {
  color: #9fd4ad;
}

.services-header p {
  max-width: 600px;
  font-size: 18px;
  line-height: 1.6;
  color: #d6e5da;
  margin: 25px 0 35px;
}

.search-box {
  background: white;
  display: flex;
  align-items: center;
  max-width: 700px;
  border-radius: 12px;
  padding: 7px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.search-icon {
  color: #6b756e;
  font-size: 25px;
  padding-left: 15px;
}

.search-box input {
  flex: 1;
  border: none;
  outline: none;
  padding: 15px;
  font-size: 16px;
}

.search-box button {
  border: none;
  background: #9fd4ad;
  color: #173b29;
  font-weight: 700;
  padding: 15px 25px;
  border-radius: 8px;
  cursor: pointer;
}
.categories-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 70px 20px 30px;
}

.section-title span,
.section-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #5b8268;
}

.section-title h2 {
  font-size: 32px;
  margin: 8px 0 30px;
}

.categories {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.categories button {
  background: white;
  border: 1px solid #dfe6e1;
  color: #46534b;
  padding: 12px 20px;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.2s;
}

.categories button:hover {
  border-color: #78ad88;
}

.categories button.active {
  background: #183c2b;
  color: white;
  border-color: #183c2b;
}

.services-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px 20px 100px;
}

.services-top {
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 30px;
}

.services-top h2 {
  margin: 7px 0 0;
  font-size: 32px;
}

.results {
  color: #718078;
  font-size: 14px;
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.service-card {
  background: white;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid #e6ebe7;
  transition: 0.25s;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(25, 60, 43, 0.1);
}

.service-image {
  height: 210px;
  position: relative;
  overflow: hidden;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.4s;
}

.service-card:hover .service-image img {
  transform: scale(1.05);
}
.category-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background: white;
  color: #183c2b;
  padding: 7px 12px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
}
.service-content {
  padding: 22px;
}
.service-content h3 {
  margin: 0;
  font-size: 21px;
}
.description {
  color: #69756e;
  font-size: 14px;
  line-height: 1.5;
  min-height: 42px;
  margin: 10px 0 18px;
}
.professional {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 15px;
  border-bottom: 1px solid #edf0ed;
}

.avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #dceee1;
  color: #275c3b;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}
.professional strong {
  display: block;
  font-size: 14px;
}
.professional span {
  display: block;
  color: #87918b;
  font-size: 11px;
  margin-top: 3px;
}
.rating {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 15px;
  font-size: 12px;
  color: #858e88;
}
.stars {
  color: #e5a93d;
  letter-spacing: 1px;
}

.rating strong {
  color: #29352e;
}
.location {
  font-size: 12px;
  color: #6f7973;
  margin-top: 12px;
}
.card-footer {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-top: 20px;
}
.price span {
  display: block;
  font-size: 10px;
  color: #89928c;
}
.price strong {
  font-size: 18px;
  color: #183c2b;
}
.details-button {
  background: #183c2b;
  color: white;
  border: none;
  padding: 11px 15px;
  border-radius: 7px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;
}
.details-button:hover {
  background: #285b40;
}
.empty-state {
  text-align: center;
  padding: 70px 20px;
  color: #68736c;
}
.empty-state h3 {
  color: #26352c;
}
@media (max-width: 900px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 650px) {
  .services-header {
    padding: 60px 20px 70px;
  }
  .search-box {
    flex-direction: column;
    align-items: stretch;
    padding: 8px;
  }
  .search-icon {
    display: none;
  }
  .search-box input {
    padding: 14px;
  }
  .search-box button {
    width: 100%;
  }
  .services-top {
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }
  .services-grid {
    grid-template-columns: 1fr;
  }
  .categories-section,
  .services-section {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
