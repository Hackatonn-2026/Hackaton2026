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
            placeholder="Buscar profissionais ou serviços..."
          />
          <button>Pesquisar</button>
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

    <section class="categories">
      <div class="section-title">
        <h2>Categorias Populares</h2>
        <p>
          Encontre profissionais especializados em diversas áreas
        </p>
      </div>

      <div class="cards">

        <div
          class="card"
          v-for="category in categories"
          :key="category.name"
        >
          <div class="icon">
            {{ category.icon }}
          </div>

          <h3>{{ category.name }}</h3>
          <p>{{ category.description }}</p>
        </div>

      </div>
    </section>

  </main>
</template>

<script setup>
const categories = [
  {
    icon: "</>",
    name: "Desenvolvimento",
    description: "Sites, aplicativos e sistemas"
  },
  {
    icon: "✎",
    name: "Design",
    description: "Logotipos e identidade visual"
  },
  {
    icon: "⚡",
    name: "Elétrica",
    description: "Instalações e reparos"
  },
  {
    icon: "💻",
    name: "Informática",
    description: "Suporte técnico"
  },
  {
    icon: "✂",
    name: "Jardinagem",
    description: "Paisagismo e manutenção"
  },
  {
    icon: "📷",
    name: "Fotografia",
    description: "Eventos e produtos"
  },
  {
    icon: "📖",
    name: "Aulas",
    description: "Particulares e online"
  },
  {
    icon: "🖌",
    name: "Pintura",
    description: "Residencial e comercial"
  },
  {
    icon: "🚗",
    name: "Mecânica",
    description: "Automotiva e geral"
  }
];
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

/* CATEGORIAS */

.categories {
  padding: 70px 8%;
}

.section-title {
  text-align: center;
  margin-bottom: 50px;
}

.section-title h2 {
  font-size: 42px;
  color: #1f2937;
}

.section-title p {
  margin-top: 10px;
  color: #6b7280;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px,1fr));
  gap: 30px;
}

.card {
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 30px;
  transition: .25s;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0,0,0,.08);
}

.icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: #dbeafe;
  color: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 20px;
}

.card h3 {
  margin-bottom: 10px;
  color: #1f2937;
}

.card p {
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
