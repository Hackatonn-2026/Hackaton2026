<template>
  <div class="perfil-page">

        <header class="header">
      <div class="brand">
        <span class="brand-logo">ai</span>
        <span class="brand-name">CiroLancers</span>
      </div>

      <button class="btn-voltar" @click="voltar">
        ← Voltar
      </button>
    </header>

    
    <main class="perfil-container">

      <section class="perfil-card">

    
        <div class="perfil-topo">

          <div class="foto-container">
            <img
              v-if="freelancer.fotoPerfil"
              :src="freelancer.fotoPerfil"
              alt="Foto de perfil"
              class="foto"
            />

            <div v-else class="foto-placeholder">
              {{ primeiraLetra }}
            </div>
          </div>

          <div class="informacoes-principais">

            <h1>
              {{ freelancer.nome }}
            </h1>

            <h2>
              {{ freelancer.profissao }}
            </h2>

            <p class="localizacao">
              📍 {{ freelancer.cidade }}
            </p>

          </div>

        </div>

    
        <section class="secao">

          <h3>Sobre mim</h3>

          <p class="descricao">
            {{ freelancer.descricao || 'Nenhuma descrição informada.' }}
          </p>

        </section>

    
        <section class="secao">

          <h3>Experiência profissional</h3>

          <div class="experiencia">

            <span class="icone">💼</span>

            <div>
              <strong>Experiência</strong>

              <p>
                {{ experienciaTexto }}
              </p>
            </div>

          </div>

        </section>

            <section class="secao">

          <h3>Áreas de atuação</h3>

          <div class="categorias">

            <span
              v-for="categoria in freelancer.categorias"
              :key="categoria"
              class="categoria"
            >
              {{ categoria }}
            </span>

            <span
              v-if="!freelancer.categorias?.length"
              class="sem-categoria"
            >
              Nenhuma categoria informada.
            </span>

          </div>

        </section>

            <section class="contato">

          <h3>Interessado no trabalho?</h3>

          <button class="btn-contato" @click="contatar">
            Entrar em contato
          </button>

        </section>

      </section>

    </main>

  </div>
</template>


<script setup>

import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const freelancer = ref({
  nome: '',
  profissao: '',
  cidade: '',
  descricao: '',
  anosExperiencia: '',
  categorias: [],
  fotoPerfil: null
})

onMounted(() => {

  const dadosSalvos = localStorage.getItem('freelancerPerfil')

  if (dadosSalvos) {
    freelancer.value = JSON.parse(dadosSalvos)
  }

})


const primeiraLetra = computed(() => {

  if (!freelancer.value.nome) {
    return '?'
  }

  return freelancer.value.nome.charAt(0).toUpperCase()

})


const experienciaTexto = computed(() => {

  const experiencias = {

    'menos-1': 'Menos de 1 ano',

    '1-3': '1 a 3 anos',

    '3-5': '3 a 5 anos',

    '5-10': '5 a 10 anos',

    'mais-10': 'Mais de 10 anos'

  }

  return experiencias[freelancer.value.anosExperiencia]
    || 'Experiência não informada'

})


function voltar() {
  router.back()
}


function contatar() {

  if (freelancer.value.email) {

    window.location.href =
      `mailto:${freelancer.value.email}`

  }

}

</script>


<style scoped>

.perfil-page {
  min-height: 100vh;
  background: #f3f4f6;
}

/* HEADER */

.header {
  height: 72px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6%;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-logo {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #3b5bfd;
  color: white;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-name {
  font-size: 22px;
  font-weight: 800;
  color: #1a1a2e;
}

.btn-voltar {
  border: none;
  background: transparent;
  color: #3b5bfd;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}

.perfil-container {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
}

.perfil-card {
  background: white;
  border-radius: 18px;
  padding: 40px;
  box-shadow:
    0 2px 5px rgba(0,0,0,0.05),
    0 10px 30px rgba(0,0,0,0.05);
}



.perfil-topo {
  display: flex;
  align-items: center;
  gap: 25px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e5e7eb;
}

.foto-container {
  flex-shrink: 0;
}

.foto {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #eef2ff;
}

.foto-placeholder {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: #3b5bfd;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-weight: 700;
}
.informacoes-principais h1 {
  margin: 0;
  font-size: 30px;
  color: #1a1a2e;
}

.informacoes-principais h2 {
  margin: 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: #3b5bfd;
}

.localizacao {
  color: #6b7280;
  margin: 8px 0;
}
.secao {
  padding: 28px 0;
  border-bottom: 1px solid #e5e7eb;
}

.secao h3 {
  margin: 0 0 14px;
  font-size: 18px;
  color: #1a1a2e;
}

.descricao {
  color: #4b5563;
  line-height: 1.7;
  font-size: 15px;
}

.experiencia {
  display: flex;
  align-items: center;
  gap: 15px;
}

.icone {
  width: 45px;
  height: 45px;
  background: #eef2ff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.experiencia strong {
  color: #1a1a2e;
}

.experiencia p {
  margin: 5px 0 0;
  color: #6b7280;
}

.categorias {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.categoria {
  background: #eef2ff;
  color: #3b5bfd;
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
}

.sem-categoria {
  color: #6b7280;
}

.contato {
  padding-top: 30px;
  text-align: center;
}

.contato h3 {
  color: #1a1a2e;
  margin-bottom: 18px;
}

.btn-contato {
  border: none;
  background: #3b5bfd;
  color: white;
  padding: 13px 28px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
}

.btn-contato:hover {
  background: #2f4bea;
}

@media (max-width: 600px) {

  .perfil-card {
    padding: 25px;
  }

  .perfil-topo {
    flex-direction: column;
    text-align: center;
  }

  .informacoes-principais h1 {
    font-size: 25px;
  }

}

</style>