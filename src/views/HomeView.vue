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
          <BaseButton type="button">Pesquisar</BaseButton>
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

    <Categorias />

  </main>
</template>

<script setup>
  import { ref } from 'vue'
  import Categorias from '@/components/Categorias.vue';

  const query = ref('')
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
