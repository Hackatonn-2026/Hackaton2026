<template>
  <main class="como-funciona">
    <section class="intro">
      <p class="eyebrow">CIROLANCERS</p>
      <h1>Encontre o profissional certo em poucos passos</h1>
      <p>
        A CiroLancers conecta você a profissionais qualificados para tornar a contratação
        de serviços mais simples, segura e rápida.
      </p>
    </section>

    <section class="passos" aria-label="Como funciona a CiroLancers">
      <article v-for="passo in passos" :key="passo.numero" class="passo">
        <span class="numero">{{ passo.numero }}</span>
        <h2>{{ passo.titulo }}</h2>
        <p>{{ passo.descricao }}</p>
      </article>
    </section>

    <section class="cta">
      <h2>Pronto para começar?</h2>
      <p>Explore as categorias e encontre quem pode ajudar no seu próximo projeto.</p>
      <RouterLink to="/categorias" class="cta-button">Ver categorias</RouterLink>
    </section>
  </main>
</template>

<script setup>
const passos = [
  {
    numero: '01',
    titulo: 'Encontre o que precisa',
    descricao: 'Busque por uma categoria ou serviço e conheça os profissionais disponíveis.',
  },
  {
    numero: '02',
    titulo: 'Escolha um profissional',
    descricao: 'Compare perfis, avaliações e valores para fazer a melhor escolha.',
  },
  {
    numero: '03',
    titulo: 'Solicite o serviço',
    descricao: 'Entre em contato, combine os detalhes e acompanhe a realização do trabalho.',
  },
]
</script>

<style scoped>
.como-funciona {
  min-height: 70vh;
  background: #f9fafb;
  padding: 72px 8% 88px;
}

.intro {
  max-width: 720px;
  margin: 0 auto 52px;
  text-align: center;
}

.eyebrow {
  margin: 0 0 12px;
  color: #2563eb;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.intro h1,
.cta h2 {
  margin: 0;
  color: #111827;
}

.intro h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.15;
}

.intro > p:last-child,
.passo p,
.cta p {
  color: #6b7280;
  line-height: 1.6;
}

.intro > p:last-child {
  margin: 20px 0 0;
  font-size: 1.08rem;
}

.passos {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  max-width: 1080px;
  margin: 0 auto;
}

.passo {
  padding: 30px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
}

.numero {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin-bottom: 20px;
  border-radius: 50%;
  background: #dbeafe;
  color: #2563eb;
  font-weight: 700;
}

.passo h2 {
  margin: 0 0 10px;
  color: #1f2937;
  font-size: 1.2rem;
}

.passo p {
  margin: 0;
}

.cta {
  max-width: 720px;
  margin: 56px auto 0;
  padding: 40px;
  border-radius: 16px;
  background: #eff6ff;
  text-align: center;
}

.cta p {
  margin: 12px 0 24px;
}

.cta-button {
  display: inline-block;
  padding: 12px 22px;
  border-radius: 9px;
  background: #2563eb;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
}

.cta-button:hover {
  background: #1d4ed8;
}

@media (max-width: 768px) {
  .como-funciona {
    padding: 56px 6% 64px;
  }

  .passos {
    grid-template-columns: 1fr;
  }

  .cta {
    padding: 30px 22px;
  }
}
</style>
