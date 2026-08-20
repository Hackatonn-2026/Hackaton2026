<template>
  <main class="home">

    <section class="hero">
      <div class="hero-content">
        <h1>Encontre o profissional ideal para qualquer serviço</h1>
        <p>
          Conectamos clientes aos melhores profissionais em diversas áreas,
          com rapidez, segurança e qualidade.
        </p>

        <div class="search">
          <input
            type="text"
            v-model="query"
            placeholder="Buscar profissionais ou serviços..."
          />
          <BaseButton type="button" @click="buscar">Pesquisar</BaseButton>
        </div>

        <div class="stats">
          <div class="stat">
            <h2>2.500+</h2>
            <span>Profissionais Ativos</span>
          </div>

          <div class="stat">
            <h2>12.000+</h2>
            <span>Projetos Concluídos</span>
          </div>

          <div class="stat">
            <h2>98%</h2>
            <span>Satisfação</span>
          </div>

          <div class="stat">
            <h2>27</h2>
            <span>Estados Atendidos</span>
          </div>
        </div>
      </div>
    </section>

    <Categorias :limit="3" :is-home="true" />
    <Categorias />
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
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Categorias from '@/components/Categorias.vue'
import ProfessionalCard from '@/components/ProfessionalCard.vue'
import { useNotificacoes } from '@/composables/useNotificacoes'

const query = ref('')
const router = useRouter()
const { adicionar } = useNotificacoes()

const professionals = [
  { id: 1, name: 'Carlos Silva', role: 'Desenvolvedor Full Stack', rating: 4.9, reviews: 127, price: 150, avatar: '/img/carlos.jpg' },
  { id: 2, name: 'Ana Costa', role: 'Designer Gráfica', rating: 5, reviews: 89, price: 120, avatar: '/img/ana.jpg' },
  { id: 3, name: 'Roberto Santos', role: 'Eletricista', rating: 4.8, reviews: 203, price: 80, avatar: '/img/roberto.jpg' },
  { id: 4, name: 'Mariana Lima', role: 'Professora de Inglês', rating: 4.9, reviews: 156, price: 60, avatar: '/img/mariana.jpg' },
]

function handleVerPerfil(prof) {
  router.push(`/perfil/${prof.id}`)
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
  padding: 70px 8%;
  text-align: center;
}

.hero h1 {
  font-size: 48px;
  color: #1f2937;
  margin-bottom: 20px;
}

.hero p {
  max-width: 700px;
  margin: auto;
  color: #6b7280;
  font-size: 18px;
  line-height: 1.6;
}

.search {
  margin: 45px auto;
  display: flex;
  justify-content: center;
  max-width: 750px;
}

.search input {
  flex: 1;
  padding: 16px;
  border: 1px solid #dcdcdc;
  border-right: none;
  border-radius: 10px 0 0 10px;
  font-size: 16px;
}

.search input:focus {
  outline: none;
}

.search button {
  width: 170px;
  border: none;
  background: #2563eb;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 0 10px 10px 0;
}

.stats {
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
}

.stat h2 {
  color: #2563eb;
  font-size: 34px;
}

.stat span {
  color: #6b7280;
}
.featured {
  padding: 60px 8% 80px;
  text-align: center;
  background: #f9fafb;
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
@media(max-width:768px){

.hero h1{
    font-size:34px;
}

.search{
    flex-direction:column;
}

.search input{
    border-radius:10px;
    border-right:1px solid #dcdcdc;
}

.search button{
    width:100%;
    margin-top:12px;
    border-radius:10px;
    padding:16px;
}

}
</style>
