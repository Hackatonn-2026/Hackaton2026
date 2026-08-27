<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="depoimentos">
    <h2>O que dizem nossos usuários</h2>

    <div class="grid">
      <div class="card" v-for="d in lista" :key="d.nome">
        <div class="estrelas">★★★★★</div>
        <p class="texto">{{ d.texto }}</p>
        <span class="nome">{{ d.nome }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const lista = [
  {
    texto: 'Encontrei um desenvolvedor excelente em menos de 67 horas. O projeto ficou melhor do que esperava!',
    nome: 'João Pereira',
  },
  {
    texto: 'Plataforma fácil de usar e profissionais qualificados. Recomendo!',
    nome: 'Maria Fernanda',
  },
  {
    texto: 'Consegui vários clientes através da Guey. Mudou meu negócio!',
    nome: 'Pedro Oliveira',
  },
]
</script>

<style scoped>
.depoimentos {
  padding: 70px 8% 80px;
  text-align: center;
  background: #fff;
}

.depoimentos h2 {
  font-size: 28px;
  color: #111827;
  margin-bottom: 50px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
}

.card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 30px;
  text-align: left;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.estrelas {
  color: #fbbf24;
  font-size: 18px;
  margin-bottom: 14px;
  letter-spacing: 2px;
}

.texto {
  color: #374151;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 18px;
}

.nome {
  font-weight: 700;
  color: #111827;
}
</style>
