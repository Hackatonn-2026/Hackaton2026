<template>
  <div class="auth-page">
    <div class="auth-brand">
      <span class="auth-brand__logo">ai</span>
      <span class="auth-brand__name">CiroLancers</span>
    </div>

    <h1 class="auth-title">Criar Conta</h1>
    <p class="auth-subtitle">Junte-se à maior plataforma de freelancers do Brasil</p>

    <div class="auth-tabs">
      <button
        v-for="tipo in ['contratante', 'freelancer']"
        :key="tipo"
        type="button"
        class="auth-tabs__btn"
        :class="{ 'auth-tabs__btn--active': tipoUsuario === tipo }"
        @click="trocarTipo(tipo)"
      >
        {{ tipo === 'contratante' ? 'Quero Contratar' : 'Sou Profissional' }}
      </button>
    </div>

    <div class="auth-card auth-card--wide">
      <form @submit.prevent="handleSubmit">
        <div class="form-section">
          <h2 class="form-section__title">Dados Pessoais</h2>

          <div class="form-grid form-grid--cols-2">
            <InputForm label="Nome Completo" placeholder="Seu nome" icon="user" v-model="form.nome" />
            <InputForm label="E-mail" placeholder="seu@email.com" type="email" v-model="form.email" />
            <InputForm label="Senha" placeholder="••••••••" type="password" v-model="form.senha" />
            <InputForm label="Telefone" placeholder="(11) 99999-9999" type="tel" v-model="form.telefone" />
          </div>

          <div style="margin-top: 16px">
            <InputForm label="Cidade" placeholder="São Paulo, SP" icon="location" v-model="form.cidade" />
          </div>
        </div>

        <div v-if="tipoUsuario === 'freelancer'" class="form-section">
          <h2 class="form-section__title">Informações Profissionais</h2>

          <InputForm
            label="Profissão/Especialidade"
            placeholder="Ex: Desenvolvedor Full Stack"
            icon="briefcase"
            v-model="form.profissao"
            style="margin-bottom: 16px"
          />

          <SelectForm
            label="Anos de Experiência"
            v-model="form.anosExperiencia"
            :options="opcoesExperiencia"
            style="margin-bottom: 16px"
          />

          <TextareaForm
            label="Descrição Profissional"
            placeholder="Fale sobre sua experiência, habilidades e diferenciais..."
            v-model="form.descricao"
            style="margin-bottom: 20px"
          />

          <CheckboxGroup
            label="Categorias de Atuação"
            :options="categoriasDisponiveis"
            v-model="form.categorias"
            style="margin-bottom: 20px"
          />

          <FileUpload label="Foto de Perfil" v-model="form.fotoPerfil" style="margin-bottom: 16px" />
          <FileUpload label="Certificados (Opcional)" hint="PDF até 10MB" accept="application/pdf" v-model="form.certificados" />
        </div>

        <label class="auth-checkbox-row" style="margin-top: 20px">
          <input type="checkbox" v-model="form.aceitaTermos" />
          <span>
            Eu concordo com os
            <RouterLink to="/suporte" class="auth-link">Termos de Uso</RouterLink>
            e
            <RouterLink to="/suporte" class="auth-link">Política de Privacidade</RouterLink>
          </span>
        </label>

        <p v-if="erro" class="form-error">{{ erro }}</p>

        <button type="submit" class="auth-submit" :disabled="loading">
          {{ loading ? 'Criando conta...' : 'Criar Conta' }}
        </button>
      </form>

      <p class="auth-footer-text">
        Já tem uma conta?
        <RouterLink to="/login" class="auth-link">Faça login</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import InputForm from './InputForm.vue'
import SelectForm from './SelectForm.vue'
import TextareaForm from './TextareaForm.vue'
import CheckboxGroup from './CheckboxGroup.vue'
import FileUpload from './FileUpload.vue'

const props = defineProps({ tipoInicial: { type: String, default: 'freelancer' } })

const router = useRouter()
const tipoUsuario = ref(props.tipoInicial)
const loading = ref(false)
const erro = ref('')

const form = reactive({
  nome: '', email: '', senha: '', telefone: '', cidade: '',
  profissao: '', anosExperiencia: '', descricao: '', categorias: [],
  fotoPerfil: null, certificados: null, aceitaTermos: false
})

const opcoesExperiencia = [
  { value: 'menos-1', label: 'Menos de 1 ano' },
  { value: '1-3', label: '1 a 3 anos' },
  { value: '3-5', label: '3 a 5 anos' },
  { value: '5-10', label: '5 a 10 anos' },
  { value: 'mais-10', label: 'Mais de 10 anos' }
]

const categoriasDisponiveis = ['Desenvolvimento', 'Design', 'Marketing', 'Consultoria', 'Edição', 'Tradução']

function trocarTipo(tipo) {
  tipoUsuario.value = tipo
}

watch(tipoUsuario, (tipo) => {
  const destino = tipo === 'freelancer' ? '/cadastro-freelancer' : '/cadastro-cliente'
  if (router.currentRoute.value.path !== destino) router.replace(destino)
})

function validate() {
  if (!form.nome || !form.email || !form.senha || !form.telefone || !form.cidade) {
    return 'Preencha todos os campos obrigatórios'
  }
  if (tipoUsuario.value === 'freelancer' && !form.profissao) {
    return 'Informe sua profissão'
  }
  if (!form.aceitaTermos) {
    return 'Você precisa aceitar os termos para continuar'
  }
  return ''
}

async function handleSubmit() {
  erro.value = validate()
  if (erro.value) return

  loading.value = true
  try {
    // TODO: integrar com a API de cadastro
    // await api.post('/cadastro', { tipoUsuario: tipoUsuario.value, ...form })
    router.push(tipoUsuario.value === 'freelancer' ? '/dashboard-freelancer' : '/dashboard-cliente')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.auth-page { min-height: 100vh; width: 100%; background: #f3f4f6; display: flex; flex-direction: column; align-items: center; padding: 48px 16px 64px; box-sizing: border-box; }
.auth-brand { display: flex; align-items: center; gap: 10px; margin-bottom: 28px; }
.auth-brand__logo { width: 40px; height: 40px; border-radius: 10px; background: #3b5bfd; color: #fff; font-weight: 700; font-size: 20px; display: flex; align-items: center; justify-content: center; }
.auth-brand__name { font-size: 24px; font-weight: 800; color: #1a1a2e; }
.auth-title { font-size: 28px; font-weight: 800; color: #1a1a2e; text-align: center; margin: 0 0 6px; }
.auth-subtitle { font-size: 15px; color: #6b7280; text-align: center; margin: 0 0 28px; }
.auth-card { width: 100%; max-width: 460px; background: #fff; border-radius: 16px; padding: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04); box-sizing: border-box; }
.auth-card--wide { max-width: 620px; }
.auth-tabs { width: 100%; max-width: 620px; display: flex; background: #fff; border-radius: 12px; padding: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); margin-bottom: 20px; box-sizing: border-box; }
.auth-tabs__btn { flex: 1; border: none; background: transparent; padding: 12px 16px; border-radius: 8px; font-size: 15px; font-weight: 700; color: #1a1a2e; cursor: pointer; transition: background 0.15s, color 0.15s; }
.auth-tabs__btn--active { background: #3b5bfd; color: #fff; }
.form-section { margin-bottom: 8px; }
.form-section + .form-section { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; }
.form-section__title { font-size: 16px; font-weight: 700; color: #1a1a2e; margin: 0 0 16px; }
.form-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
@media (min-width: 560px) { .form-grid--cols-2 { grid-template-columns: 1fr 1fr; } }
.auth-checkbox-row { display: flex; align-items: flex-start; gap: 8px; font-size: 14px; color: #374151; }
.auth-checkbox-row input { width: 18px; height: 18px; margin-top: 2px; accent-color: #1a1a2e; cursor: pointer; flex-shrink: 0; }
.auth-link { color: #3b5bfd; font-size: 14px; font-weight: 600; text-decoration: none; }
.auth-link:hover { text-decoration: underline; }
.form-error { font-size: 13px; color: #ef4444; margin: 12px 0 0; }
.auth-submit { width: 100%; border: none; background: #3b5bfd; color: #fff; font-size: 16px; font-weight: 700; padding: 14px; border-radius: 10px; cursor: pointer; transition: background 0.15s; margin-top: 16px; }
.auth-submit:hover { background: #2f4bea; }
.auth-submit:disabled { background: #a5b4fc; cursor: not-allowed; }
.auth-footer-text { text-align: center; font-size: 14px; color: #374151; margin-top: 16px; }
</style>
