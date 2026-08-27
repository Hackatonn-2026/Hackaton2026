<template>
  <div class="sobre">
    <!-- HERO -->
    <section class="hero">
      <h1>Sobre a CiroLancers</h1>
      <p>Conectando profissionais e clientes em Joinville, Santa Catarina</p>
    </section>

    <!-- MISSÃO / VISÃO -->
    <section class="bloco">
      <div class="texto-imagem">
        <div class="texto">
          <h2>Nossa Missão</h2>
          <p>
            Democratizar o acesso a serviços de qualidade e criar oportunidades para que profissionais talentosos possam prosperar, utilizando suas habilidades como fonte de renda ou atividade profissional complementar.
          </p>
        </div>
        <img :src="teamImage" alt="Profissionais trabalhando em Joinville" />
      </div>
      <div class="texto-imagem inverso">
        <div class="texto">
          <h2>Nossa Visão</h2>
          <p>
            Tornar a CiroLancers a principal plataforma de conexão entre profissionais e clientes de Joinville, reconhecida pela confiança, inovação e excelência.
          </p>
        </div>
        <img :src="personImage" alt="Cliente e prestador de serviço" />
      </div>
    </section>

    <!-- DIFERENCIAL -->
    <section class="valores">
      <h2>O Que Nos Diferencia</h2>
      <p class="subtitulo">
        Diferente das plataformas tradicionais de trabalho sob demanda, valorizamos o profissional em cada etapa
      </p>
      <div class="cards">
        <div v-for="valor in valores" :key="valor.titulo" class="card">
          <img class="card-icone" :src="valor.icone" alt="" aria-hidden="true" />
          <h3>{{ valor.titulo }}</h3>
          <p>{{ valor.descricao }}</p>
        </div>
      </div>
    </section>

    <!-- COMO FUNCIONA -->
    <section class="como-funciona">
      <h2>Como Funciona</h2>
      <p class="subtitulo claro">Dois perfis, uma mesma plataforma</p>
      <div class="colunas">
        <div class="coluna">
          <h3>Para Clientes</h3>
          <ol>
            <li v-for="(passo, i) in passosCliente" :key="i">{{ passo }}</li>
          </ol>
        </div>
        <div class="coluna">
          <h3>Para Prestadores de Serviço</h3>
          <ol>
            <li v-for="(passo, i) in passosPrestador" :key="i">{{ passo }}</li>
          </ol>
        </div>
      </div>
    </section>

    <!-- SEGURANÇA E QUALIDADE -->
    <section class="seguranca">
      <h2>Segurança e Qualidade</h2>
      <p class="subtitulo">Pilares que sustentam cada contratação</p>
      <div class="cards">
        <div v-for="item in seguranca" :key="item.titulo" class="card">
          <img class="card-icone" :src="item.icone" alt="" aria-hidden="true" />
          <h3>{{ item.titulo }}</h3>
          <p>{{ item.descricao }}</p>
        </div>
      </div>
    </section>

    <!-- EQUIPE -->
    <SecaoEquipe />

    <!-- JOINVILLE -->
    <section class="joinville">
      <h2>Uma Empresa Construída para Joinville</h2>
      <p>
        Ao concentrar a plataforma em uma única cidade, conseguimos aproximar profissionais e clientes que fazem parte da mesma comunidade, favorecendo relações mais próximas, confiáveis e acessíveis. A longo prazo, buscamos consolidar a CiroLancers como referência na conexão entre profissionais e clientes da cidade, promovendo oportunidades e movimentando a economia local.
      </p>
    </section>

    <!-- CTA FINAL -->
    <section class="cta">
      <h2>Faça Parte da CiroLancers</h2>
      <p>Junte-se a profissionais e clientes de Joinville que já confiam na CiroLancers</p>
      <div class="botoes">
        <RouterLink to="/cadastro-cliente" class="btn-primario">Começar Agora</RouterLink>
        <RouterLink to="/como-funciona" class="btn-secundario">Saber Mais</RouterLink>
      </div>
    </section>
  </div>
</template>
<script setup>
import SecaoEquipe from '../components/SecaoEquipe.vue';
import teamImage from '../assets/team.jpg';
import personImage from '../assets/person.jpg';
import maosIcon from '../assets/icons/maos.png';
import segurancaIcon from '../assets/icons/seguranca.png';
import avaliacaoIcon from '../assets/icons/avaliacao.png';
import localizacaoIcon from '../assets/icons/localizacao.png';
import cartaoIcon from '../assets/icons/card.png';
import ouvidoriaIcon from '../assets/icons/ouvidoria.png';

// O que diferencia a CiroLancers de plataformas tradicionais
const valores = [
  {
    icone: maosIcon,
    titulo: "Valorização do Profissional",
    descricao: "Condições justas de trabalho, sem uberização ou disputa constante por tarefas.",
  },
  {
    icone: segurancaIcon,
    titulo: "Segurança",
    descricao: "Pagamento protegido até a conclusão do serviço, conforme combinado entre as partes.",
  },
  {
    icone: avaliacaoIcon,
    titulo: "Transparência",
    descricao: "Avaliações reais de clientes constroem o histórico e a reputação de cada profissional.",
  },
  {
    icone: localizacaoIcon,
    titulo: "Comunidade Local",
    descricao: "Conectamos profissionais e clientes que fazem parte da mesma comunidade em Joinville.",
  },
];

// Passo a passo para quem contrata
const passosCliente = [
  "Cadastro gratuito na plataforma",
  "Publica uma demanda descrevendo o serviço e a categoria",
  "Recebe propostas de profissionais da área ou pesquisa diretamente por um perfil",
  "Compara profissionais pelo portfólio, experiência e avaliações",
  "Contrata com o pagamento protegido até a conclusão do serviço",
];

// Passo a passo para quem presta serviço
const passosPrestador = [
  "Cadastro gratuito na plataforma",
  "Cria um perfil profissional com áreas de atuação e portfólio",
  "Cadastra os serviços oferecidos",
  "Visualiza demandas da sua categoria e envia propostas",
  "Recebe o pagamento com segurança após a conclusão do serviço",
];

// Itens da seção de segurança e qualidade
const seguranca = [
  {
    icone: segurancaIcon,
    titulo: "Perfis Avaliados",
    descricao: "Antes de disponibilizar um profissional, avaliamos informações sobre atuação e qualificação.",
  },
  {
    icone: cartaoIcon,
    titulo: "Pagamento Protegido",
    descricao: "O valor fica retido até que o serviço seja concluído conforme o combinado.",
  },
  {
    icone: avaliacaoIcon,
    titulo: "Avaliações",
    descricao: "Cada serviço concluído gera uma avaliação que constrói o histórico do profissional.",
  },
  {
    icone: ouvidoriaIcon,
    titulo: "Suporte Dedicado",
    descricao: "Nossa equipe auxilia em contratações e eventuais conflitos, com reembolso quando previsto.",
  },
];
</script>

<style scoped>
.sobre {
  --sobre-azul: #1d4ed8;
  --sobre-azul-claro: #eff6ff;
  --sobre-texto: #1f2937;
  --sobre-texto-suave: #64748b;
  --sobre-borda: #dbe4f0;
  min-height: 70vh;
  background: #f8fafc;
  color: var(--sobre-texto);
  font-family: inherit;
}

.sobre h1,
.sobre h2,
.sobre h3 {
  color: #111827;
  font-weight: 700;
}

.subtitulo {
  margin: 0 auto 40px;
  color: var(--sobre-texto-suave);
}

.subtitulo.claro {
  color: #dbeafe;
}

section {
  padding: 72px 8%;
}

.hero {
  padding: 96px 8%;
  background: var(--sobre-azul);
  color: #fff;
  text-align: center;
}

.hero h1 {
  color: #fff;
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  line-height: 1.1;
}

.hero p {
  margin: 18px auto 0;
  color: #dbeafe;
  font-size: 1.1rem;
}

.texto-imagem {
  display: flex;
  align-items: center;
  gap: 56px;
  max-width: 1080px;
  margin: 0 auto 72px;
}

.texto-imagem:last-child {
  margin-bottom: 0;
}

.texto-imagem.inverso {
  flex-direction: row-reverse;
}

.texto-imagem .texto {
  flex: 1 1 0;
  max-width: 680px;
}

.texto-imagem h2 {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.8rem;
}

.secao-icone {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.texto-imagem p,
.joinville p {
  color: var(--sobre-texto-suave);
  line-height: 1.7;
}

.texto-imagem img {
  flex: 0 1 340px;
  width: min(34%, 340px);
  aspect-ratio: 4 / 3;
  border: 1px solid var(--sobre-borda);
  border-radius: 14px;
  object-fit: cover;
}

.valores,
.seguranca {
  text-align: center;
}

.valores {
  background: #fff;
}

.seguranca {
  background: var(--sobre-azul-claro);
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  max-width: 1080px;
  margin: 0 auto;
}

.card {
  padding: 28px 24px;
  background: #fff;
  border: 1px solid var(--sobre-borda);
  border-radius: 14px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.card:hover {
  border-color: #bfdbfe;
  box-shadow: 0 12px 24px rgb(30 64 175 / 10%);
  transform: translateY(-5px);
}

.card-icone {
  display: block;
  width: 32px;
  height: 32px;
  margin: 0 auto 12px;
  object-fit: contain;
}

.card h3 {
  font-size: 1.15rem;
}

.card p {
  color: var(--sobre-texto-suave);
  line-height: 1.6;
}

.como-funciona {
  background: var(--sobre-azul);
  color: #fff;
  text-align: center;
}

.como-funciona h2,
.como-funciona h3 {
  color: #fff;
}

.colunas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
}

.coluna {
  padding: 28px;
  background: rgb(255 255 255 / 10%);
  border: 1px solid rgb(255 255 255 / 20%);
  border-radius: 14px;
}

.coluna h3 {
  text-align: center;
}

.coluna ol {
  padding-left: 20px;
  color: #dbeafe;
  font-weight: 500;
  line-height: 1.8;
}

.joinville {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 88px;
  padding-bottom: 88px;
  text-align: center;
}

.joinville h2 {
  color: var(--sobre-azul);
  margin-bottom: 16px;
}

.cta {
  text-align: center;
  background: #fff;
}

.cta h2 {
  margin-bottom: 12px;
}

.cta p {
  color: var(--sobre-texto-suave);
}

.botoes {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 24px;
}

.btn-primario,
.btn-secundario {
  display: inline-block;
  padding: 12px 22px;
  border-radius: 9px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.btn-primario:hover,
.btn-secundario:hover {
  transform: translateY(-2px);
}

.btn-primario {
  background: var(--sobre-azul);
  color: white;
  border: none;
}

.btn-primario:hover {
  background: var(--sobre-azul-escuro);
  box-shadow: 0 8px 16px rgb(30 58 138 / 18%);
}

.btn-secundario {
  background: #fff;
  color: var(--sobre-azul);
  border: 2px solid var(--sobre-azul);
}

.btn-secundario:hover {
  background: var(--sobre-azul-claro);
}

:deep(.equipe) {
  background: #fff;
  padding: 72px 8% 96px;
  text-align: center;
}

:deep(.equipe h2) {
  color: var(--sobre-azul);
}

:deep(.equipe .subtitulo) {
  margin-bottom: 56px;
}

:deep(.cards-equipe) {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

:deep(.card-membro) {
  min-width: 0;
  padding: 24px 18px;
  background: #fff;
  border: 1px solid var(--sobre-borda);
  border-radius: 14px;
}

:deep(.card-membro img) {
  display: block;
  width: 112px;
  height: 112px;
  margin: 0 auto 18px;
  border-radius: 50%;
  object-fit: cover;
}

:deep(.card-membro h3) {
  font-size: 1.05rem;
}

:deep(.cargo) {
  display: block;
  margin-bottom: 12px;
  color: var(--sobre-azul);
  font-size: 0.85rem;
  font-weight: 700;
}

:deep(.card-membro p) {
  color: var(--sobre-texto-suave);
  font-size: 0.92rem;
  line-height: 1.55;
}

@media (max-width: 768px) {
  section {
    padding: 56px 6%;
  }

  .hero {
    padding: 72px 6%;
  }

  .texto-imagem,
  .texto-imagem.inverso {
    flex-direction: column;
    gap: 28px;
    margin-bottom: 56px;
  }

  .texto-imagem img {
    flex: 0 1 340px;
    width: min(100%, 340px);
  }

  :deep(.cards-equipe) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  :deep(.equipe) {
    padding: 56px 6% 72px;
  }
}

@media (max-width: 480px) {
  .botoes {
    flex-direction: column;
  }

  .btn-primario,
  .btn-secundario {
    width: 100%;
  }

  :deep(.cards-equipe) {
    grid-template-columns: 1fr;
  }
}
</style>
