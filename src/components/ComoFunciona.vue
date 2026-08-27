<template>
  <section class="como-funciona">
    <h2>Como Funciona</h2>
    <p>Contrate profissionais em 4 passos simples</p>

    <div class="passos">
      <div class="passo" v-for="(item, index) in passos" :key="item.titulo">
        <div class="icone-wrap">
          <div class="icone">
            <span v-html="item.icone"></span>
          </div>
          <span class="numero">{{ index + 1 }}</span>
        </div>

        <h3>{{ item.titulo }}</h3>
        <p>{{ item.descricao }}</p>
      </div>
    </div>
  </section>  
</template>

<script setup>
const passos = [
  {
    titulo: 'Descreva seu projeto',
    descricao: 'Conte-nos o que você precisa de forma simples e rápida',
    icone: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  },
  {
    titulo: 'Receba propostas',
    descricao: 'Profissionais qualificados enviarão orçamentos para você',
    icone: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  },
  {
    titulo: 'Escolha o melhor',
    descricao: 'Compare avaliações, preços e portfólios',
    icone: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  },
  {
    titulo: 'Pague com segurança',
    descricao: 'Seu dinheiro fica protegido até a conclusão do trabalho',
    icone: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  },
]
</script>

<style scoped>
.como-funciona {
  padding: 70px 8% 80px;
  text-align: center;
  background: #fff;
}

.como-funciona h2 {
  font-size: 28px;
  color: #111827;
  margin-bottom: 8px;
}

.como-funciona > p {
  color: #6b7280;
  margin-bottom: 50px;
}

.passos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;
}

.icone-wrap {
  position: relative;
  width: 72px;
  margin: 0 auto 20px;
}

.icone {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
}

.numero {
  position: absolute;
  top: -6px;
  right: -6px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #dbeafe;
  color: #2563eb;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.passo h3 {
  font-size: 17px;
  color: #111827;
  margin-bottom: 8px;
}

.passo p {
  color: #6b7280;
  font-size: 14px;
  line-height: 1.5;
}
</style>
