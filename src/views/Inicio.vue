<template>
  <main class="home">

    <section class="hero">
      <div class="hero-content">
        <h1>Encontre um profissional agora</h1>
        <p>Conecte-se com os melhores freelancers para seu projeto</p>

        <div class="search">
          <input
            type="text"
            v-model="query"
            placeholder="Qual serviço você procura?"
          />
          <BaseButton type="button" @click="buscar">Buscar</BaseButton>
        </div>

        <div class="populares">
          <span>Popular:</span>
          <button
            v-for="termo in buscasPopulares"
            :key="termo"
            class="tag-popular"
            @click="buscarPopular(termo)"
          >
            {{ termo }}
          </button>
        </div>
      </div>
    </section>

    <section class="stats">
      <div class="stat">
        <h2>32</h2>
        <span>Profissionais Ativos</span>
      </div>

      <div class="stat">
        <h2>1.000</h2>
        <span>Projetos Concluídos</span>
      </div>

      <div class="stat">
        <h2>98%</h2>
        <span>Satisfação</span>
      </div>

      <div class="stat">
        <h2>1</h2>
        <span>Estados</span>
      </div>
    </section>

    <Categorias :limit="3" :is-home="true" />

    <section class="featured">
      <h2>Profissionais em Destaque</h2>
      <p>Conheça alguns dos nossos melhores profissionais</p>

      <div class="grid">
        <ProfessionalCard
          v-for="p in professionals"
          :key="p.id"
          :professional="p"
          @ver-perfil="handleVerPerfil"
        />
      </div>
    </section>

    <ComoFunciona />

    <Depoimentos />

    <CtaFinal />
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Categorias from '@/components/Categorias.vue'
import ProfessionalCard from '@/components/CartaoProfissional.vue'
import ComoFunciona from '@/components/ComoFunciona.vue'
import Depoimentos from '@/components/Depoimentos.vue'
import CtaFinal from '@/components/ChamadaFinal.vue'
import { useNotificacoes } from '@/composables/useNotificacoes'

const query = ref('')
const router = useRouter()
const { adicionar } = useNotificacoes()

const buscasPopulares = ['Desenvolvimento Web', 'Design Gráfico', 'Marketing Digital', 'Fotografia']

const professionals = [
  { id: 1, name: 'Carlos Silva', role: 'Desenvolvedor Full Stack', rating: 4.9, reviews: 127, price: 150, avatar: '/img/carlos.jpg' },
  { id: 2, name: 'Ana Costa', role: 'Designer Gráfica', rating: 5, reviews: 89, price: 120, avatar: '/img/ana.jpg' },
  { id: 3, name: 'Roberto Santos', role: 'Eletricista', rating: 4.8, reviews: 203, price: 80, avatar: '/img/roberto.jpg' },
  { id: 4, name: 'Mariana Lima', role: 'Professora de Inglês', rating: 4.9, reviews: 156, price: 60, avatar: '/img/mariana.jpg' },
]

function handleVerPerfil(prof) {
  router.push(`/perfil/${prof.id}`)
}

function buscarPopular(termo) {
  query.value = termo
  buscar()
}

function buscar() {
  const termo = query.value.trim()

  if (!termo) {
    adicionar('Digite o serviço ou profissional que deseja encontrar.', 'aviso')
    return
  }

  router.push({ path: '/buscar', query: { q: termo } })
}
</script>

<style scoped>
.home {
  width: 100%;
  background: #fff;
}

/* HERO */

.hero {
  padding: 70px 8% 60px;
  text-align: center;
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
}

.hero h1 {
  font-size: 48px;
  color: #fff;
  margin-bottom: 16px;
}

.hero p {
  max-width: 700px;
  margin: auto;
  color: #dbe4ff;
  font-size: 18px;
  line-height: 1.6;
}

.search {
  margin: 40px auto 0;
  display: flex;
  align-items: center;
  max-width: 750px;
  background: #fff;
  border-radius: 50px;
  padding: 8px 8px 8px 22px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.search-icon {
  margin-right: 10px;
  opacity: 0.6;
}

.search input {
  flex: 1;
  border: none;
  padding: 12px 0;
  font-size: 16px;
}

.search input:focus {
  outline: none;
}

.search button {
  border: none;
  background: #2563eb;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 40px;
  padding: 14px 28px;
}

.populares {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 14px;
  color: #dbe4ff;
}

.tag-popular {
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.tag-popular:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* STATS */

.stats {
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
  background: #f8f9fc;
  padding: 40px 8%;
}

.stat {
  text-align: center;
}

.stat h2 {
  color: #2563eb;
  font-size: 34px;
}

.stat span {
  color: #6b7280;
}

/* FEATURED */

.featured {
  padding: 60px 8% 80px;
  text-align: center;
  background: #fff;
}

.featured h2 {
  font-size: 28px;
  color: #111827;
  margin-bottom: 8px;
}

.featured p {
  color: #6b7280;
  margin-bottom: 40px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 280px));
  gap: 24px;
  justify-content: center;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 34px;
  }

  .search {
    flex-direction: column;
    border-radius: 20px;
    padding: 14px;
  }

  .search input {
    width: 100%;
    text-align: center;
  }

  .search button {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
