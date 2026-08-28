<template>
  <div class="solicitar-page">

    <header class="header">
      <div class="brand">
        <span class="brand-logo">ai</span>
        <span class="brand-name">CiroLancers</span>
      </div>

      <button class="btn-voltar" @click="voltar">
        ← Voltar
      </button>
    </header>

    <main class="solicitar-container">

      <section class="solicitar-card">

        <div class="topo">
          <h1>Solicitar Serviço</h1>
          <p class="subtitulo">
            Conte os detalhes do que você precisa
          </p>
        </div>

        <div class="freelancer-resumo">
          <img
            v-if="freelancer.fotoPerfil"
            :src="freelancer.fotoPerfil"
            alt="Foto do freelancer"
            class="freelancer-foto"
          />
          <div v-else class="freelancer-foto-placeholder">
            {{ primeiraLetra }}
          </div>

          <div class="freelancer-info">
            <strong>{{ freelancer.nome || 'Profissional' }}</strong>
            <span v-if="freelancer.profissao">{{ freelancer.profissao }}</span>
          </div>
        </div>

        <form @submit.prevent="handleSubmit">

          <div class="campo">
            <label>Título do projeto</label>
            <input
              v-model="form.titulo"
              type="text"
              placeholder="Ex: Criação de logotipo para minha empresa"
            />
          </div>

          <div class="campo">
            <label>Descreva o que você precisa</label>
            <textarea
              v-model="form.descricao"
              rows="5"
              placeholder="Explique os detalhes do serviço, prazos desejados e expectativas..."
            ></textarea>
          </div>

          <div class="form-grid">
            <div class="campo">
              <label>Orçamento estimado (R$)</label>
              <input
                v-model="form.orcamento"
                type="number"
                min="0"
                placeholder="Ex: 500"
              />
            </div>

            <div class="campo">
              <label>Prazo desejado</label>
              <select v-model="form.prazo">
                <option value="" disabled>Selecione</option>
                <option value="urgente">Urgente (até 3 dias)</option>
                <option value="1-semana">1 semana</option>
                <option value="2-semanas">2 semanas</option>
                <option value="1-mes">1 mês</option>
                <option value="a-combinar">A combinar</option>
              </select>
            </div>
          </div>

          <p v-if="erro" class="form-error">{{ erro }}</p>
          <p v-if="sucesso" class="form-sucesso">{{ sucesso }}</p>

          <button type="submit" class="btn-enviar" :disabled="loading">
            {{ loading ? 'Enviando...' : 'Enviar Solicitação' }}
          </button>

        </form>

      </section>

    </main>

  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUsuarioStore } from '@/stores/usuario'

const route = useRoute()
const router = useRouter()
const usuarioStore = useUsuarioStore()

if (!usuarioStore.state.usuario) {
  router.replace('/login')
}

// dados do freelancer que está sendo contratado, recebidos por query da URL
// ex: /solicitar?id=123&nome=Fulano&profissao=Designer&fotoPerfil=...
const freelancer = computed(() => ({
  id: route.query.id || null,
  nome: route.query.nome || '',
  profissao: route.query.profissao || '',
  fotoPerfil: route.query.fotoPerfil || null
}))

const primeiraLetra = computed(() => {
  if (!freelancer.value.nome) return '?'
  return freelancer.value.nome.charAt(0).toUpperCase()
})

const loading = ref(false)
const erro = ref('')
const sucesso = ref('')

const form = reactive({
  titulo: '',
  descricao: '',
  orcamento: '',
  prazo: ''
})

function validate() {
  if (!form.titulo.trim() || !form.descricao.trim()) {
    return 'Preencha o título e a descrição do serviço'
  }
  if (!form.prazo) {
    return 'Selecione o prazo desejado'
  }
  return ''
}

async function handleSubmit() {
  erro.value = ''
  sucesso.value = ''

  erro.value = validate()
  if (erro.value) return

  loading.value = true
  try {
    usuarioStore.contratar({
      id: freelancer.value.id,
      nome: freelancer.value.nome,
      profissao: freelancer.value.profissao,
      fotoPerfil: freelancer.value.fotoPerfil,
      titulo: form.titulo.trim(),
      descricao: form.descricao.trim(),
      orcamento: form.orcamento,
      prazo: form.prazo
    })

    sucesso.value = 'Solicitação enviada com sucesso!'

    setTimeout(() => {
      router.push('/dashboard-cliente')
    }, 1000)
  } catch (e) {
    erro.value = e.message
  } finally {
    loading.value = false
  }
}

function voltar() {
  router.back()
}
</script>

<style scoped>

.solicitar-page {
  min-height: 100vh;
  background: #f3f4f6;
}

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

.solicitar-container {
  max-width: 640px;
  margin: 40px auto;
  padding: 0 20px 64px;
}

.solicitar-card {
  background: white;
  border-radius: 18px;
  padding: 40px;
  box-shadow:
    0 2px 5px rgba(0,0,0,0.05),
    0 10px 30px rgba(0,0,0,0.05);
  box-sizing: border-box;
}

.topo {
  margin-bottom: 24px;
}

.topo h1 {
  margin: 0 0 6px;
  font-size: 26px;
  color: #1a1a2e;
  font-weight: 800;
}

.subtitulo {
  color: #6b7280;
  font-size: 15px;
  margin: 0;
}

.freelancer-resumo {
  display: flex;
  align-items: center;
  gap: 14px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 14px 16px;
  margin-bottom: 28px;
}

.freelancer-foto,
.freelancer-foto-placeholder {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.freelancer-foto-placeholder {
  background: #3b5bfd;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
}

.freelancer-info {
  display: flex;
  flex-direction: column;
}

.freelancer-info strong {
  color: #1a1a2e;
  font-size: 15px;
}

.freelancer-info span {
  color: #3b5bfd;
  font-size: 13.5px;
  font-weight: 600;
}

.campo {
  margin-bottom: 18px;
}

.campo label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 6px;
}

.campo input,
.campo select,
.campo textarea {
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 12px 14px;
  font-size: 14px;
  color: #1a1a2e;
  box-sizing: border-box;
  font-family: inherit;
}

.campo textarea {
  resize: vertical;
}

.campo input:focus,
.campo select:focus,
.campo textarea:focus {
  outline: none;
  border-color: #3b5bfd;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-error {
  color: #dc2626;
  background: #fef2f2;
  border: 1px solid #fecaca;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 16px;
}

.form-sucesso {
  color: #15803d;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 16px;
}

.btn-enviar {
  width: 100%;
  border: none;
  background: #3b5bfd;
  color: white;
  font-size: 16px;
  font-weight: 700;
  padding: 14px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 4px;
}

.btn-enviar:hover {
  background: #2f4bea;
}

.btn-enviar:disabled {
  background: #a5b4fc;
  cursor: not-allowed;
}

@media (max-width: 600px) {

  .solicitar-card {
    padding: 24px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

}

</style>
