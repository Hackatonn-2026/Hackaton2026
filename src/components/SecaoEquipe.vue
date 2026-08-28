<template>
  <section class="equipe">
    <h2>Nossa Equipe</h2>
    <p class="subtitulo">As pessoas por trás da plataforma em Joinville</p>
    <div class="cards-equipe">
      <div v-for="membro in equipe" :key="membro.nome" class="card-membro">
        <img :src="membro.foto" :alt="membro.nome" />
        <h3>{{ membro.nome }}</h3>
        <span class="cargo">{{ membro.cargo }}</span>
        <p>{{ membro.descricao }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import carlosFoto from '../assets/carlos.png';
import eloisaFoto from '../assets/eloisa.png';
import guilhermeFoto from '../assets/guilherme.png';
import nicolasFoto from '../assets/nicolas.png';
import valentinaFoto from '../assets/valentina.png';

const equipe = [
  {
    nome: "Carlos Miguel de Oliveira",
    cargo: "Fundador & Diretor Geral",
    foto: carlosFoto,
    descricao: "Idealizou a plataforma focada na valorização do profissional e no fortalecimento do mercado local em Joinville."
  },
  {
    nome: "Eloisa Muller",
    cargo: "Líder de Suporte & Mediação",
    foto: eloisaFoto,
    descricao: "Responsável pelo suporte dedicado aos usuários, garantia de reembolsos e mediação transparente de conflitos."
  },
  {
    nome: "Guilherme Bloemer",
    cargo: "Desenvolvedor Principal",
    foto: guilhermeFoto,
    descricao: "Cuida do funcionamento técnico da plataforma, garantindo a navegação, segurança nos pagamentos e organização por categorias."
  },
  {
    nome: "Nicolas Martins Paiva",
    cargo: "Analista de Segurança & Qualidade",
    foto: nicolasFoto,
    descricao: "Avalia qualificações e dados dos prestadores antes de disponibilizá-los, mantendo a reputação e confiança na comunidade."
  },
  {
    nome: "Valentina Damas",
    cargo: "Gestor de Comunidade & Operações",
    foto: valentinaFoto,
    descricao: "Conecta os profissionais e clientes da região de Joinville, viabilizando parcerias e mantendo a sustentabilidade financeira."
  }
];
</script>
