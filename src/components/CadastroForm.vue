<template>
  <div class="auth-page">
    <h1 class="auth-title">Criar Conta</h1>
    <p class="auth-subtitle">
      Junte-se à maior plataforma de freelancers do Brasil
    </p>
    <div class="auth-tabs">
      <button
        type="button"
        class="auth-tabs__btn"
        :class="{ 'auth-tabs__btn--active': tipoUsuario === 'contratante' }"
        @click="trocarTipo('contratante')"
      >
        Quero Contratar
      </button>
      <button
        type="button"
        class="auth-tabs__btn"
        :class="{ 'auth-tabs__btn--active': tipoUsuario === 'freelancer' }"
        @click="trocarTipo('freelancer')"
      >
        Sou Profissional
      </button>
    </div>
    <!-- CARD -->
    <div class="auth-card">
      <form @submit.prevent="handleSubmit">

        <div class="form-section">
          <h2 class="form-section__title">
            Dados Pessoais
          </h2>
          <div class="form-grid">
            <InputForm
              v-model="form.nome"
              label="Nome Completo"
              placeholder="Seu nome"
              icon="user"
            />
            <InputForm
              v-model="form.email"
              label="E-mail"
              placeholder="seu@email.com"
              type="email"
            />
            <InputForm
              v-model="form.senha"
              label="Senha"
              placeholder="Digite sua senha"
              type="password"
            />
            <InputForm
              v-model="form.telefone"
              label="Telefone"
              placeholder="(11) 99999-9999"
              type="tel"
            />
          </div>
          <div class="campo-largo">
            <InputForm
              v-model="form.cidade"
              label="Cidade"
              placeholder="São Paulo, SP"
              icon="location"
            />
          </div>
        </div>
               <div
          v-if="tipoUsuario === 'freelancer'"
          class="form-section"
        >
          <h2 class="form-section__title">
            Informações Profissionais
          </h2>
          <InputForm
            v-model="form.profissao"
            label="Profissão/Especialidade"
            placeholder="Ex: Desenvolvedor Full Stack"
            icon="briefcase"
          />
          <InputForm
            v-model="form.precoServico"
            label="Preço do serviço"
            placeholder="Ex: 150"
            type="number"
            min="0"
            step="0.01"
          />
          <div class="campo">
            <SelectForm
              v-model="form.anosExperiencia"
              label="Anos de Experiência"
              :options="opcoesExperiencia"
            />
          </div>
          <div class="campo">
            <TextareaForm
              v-model="form.descricao"
              label="Descrição Profissional"
              placeholder="Fale sobre sua experiência, habilidades e diferenciais..."
            />
          </div>
          <div class="campo">
            <CheckboxGroup
              v-model="form.categorias"
              label="Categorias de Atuação"
              :options="categoriasDisponiveis"
            />
          </div>

          <div class="campo">
            <FileUpload
              v-model:file="form.fotoPerfil"
              label="Foto de Perfil"
              @update:file="onFotoSelecionada"
            />
            <div
              v-if="previewFoto"
              class="foto-preview"
            >
              <img
                :src="previewFoto"
                alt="Pré-visualização da foto de perfil"
              />
              <span>Assim sua foto vai aparecer no seu perfil</span>
            </div>
          </div>
          <FileUpload
            v-model:file="form.certificados"
            label="Certificados (Opcional)"
            hint="PDF até 10MB"
            accept="application/pdf"
          />
        </div>
        <!-- TERMOS -->
        <label class="auth-checkbox-row">
          <input
            type="checkbox"
            v-model="form.aceitaTermos"
          />
          <span>
            Eu concordo com os
            <RouterLink
              to="/suporte"
              class="auth-link"
            >
              Termos de Uso
            </RouterLink>
            e
            <RouterLink
              to="/suporte"
              class="auth-link"
            >
              Política de Privacidade
            </RouterLink>
          </span>
        </label>
               <p
          v-if="erro"
          class="form-error"
        >
          {{ erro }}
        </p>
        <!-- BOTÃO -->
        <button
          type="submit"
          class="auth-submit"
          :disabled="loading"
        >
          {{ loading ? 'Criando conta...' : 'Criar Conta' }}
        </button>
      </form>
      <p class="auth-footer-text">
        Já tem uma conta?
        <RouterLink
          to="/login"
          class="auth-link"
        >
          Faça login
        </RouterLink>
      </p>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useUsuarioStore } from '@/stores/usuario'
import InputForm from './FormularioEntrada.vue'
import SelectForm from './FormularioSelecao.vue'
import TextareaForm from './FormularioTexto.vue'
import CheckboxGroup from './GrupoCheckbox.vue'
import FileUpload from './EnvioArquivo.vue'
const props = defineProps({
  tipoInicial: {
    type: String,
    default: 'freelancer'
  }
})
const router = useRouter()
const usuarioStore = useUsuarioStore()
const tipoUsuario = ref(props.tipoInicial)
const loading = ref(false)
const erro = ref('')
// avatar padrão usado quando o usuário não envia foto
const AVATAR_PADRAO = '/img/avatar-padrao.png'
const form = reactive({
  nome: '',
  email: '',
  senha: '',
  telefone: '',
  cidade: '',
  profissao: '',
  precoServico: '',
  anosExperiencia: '',
  descricao: '',
  categorias: [],
  fotoPerfil: null,
  certificados: null,
  aceitaTermos: false
})
const opcoesExperiencia = [
  {
    value: 'menos-1',
    label: 'Menos de 1 ano'
  },
  {
    value: '1-3',
    label: '1 a 3 anos'
  },
  {
    value: '3-5',
    label: '3 a 5 anos'
  },
  {
    value: '5-10',
    label: '5 a 10 anos'
  },
  {
    value: 'mais-10',
    label: 'Mais de 10 anos'
  }
]
const categoriasDisponiveis = [
  'Desenvolvimento',
  'Design',
  'Elétrica',
  'Informática',
  'Jardinagem',
  'Fotografia',
  'Aulas Particulares',
  'Pintura',
  'Mecânica',
  'Marketing',
  'Tradução',
  'Edição de Vídeo',
  'Redação',
  'Consultoria',
  'Limpeza',
  'Música'
]
function trocarTipo(tipo) {
  tipoUsuario.value = tipo
}
watch(tipoUsuario, (tipo) => {
  const destino =
    tipo === 'freelancer'
      ? '/cadastro-freelancer'
      : '/cadastro-cliente'
  if (router.currentRoute.value.path !== destino) {
    router.replace(destino)
  }
})
const previewFoto = ref(null)
function onFotoSelecionada(file) {
  if (!file) {
    previewFoto.value = null
    return
  }
  converterImagem(file)
    .then((base64) => {
      previewFoto.value = base64
    })
    .catch(() => {
      previewFoto.value = null
    })
}
function converterImagem(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.onerror = (error) => {
      reject(error)
    }
    reader.readAsDataURL(file)
  })
}
function validate() {
  if (
   !form.nome.trim() ||
    !form.email.trim() ||
    !form.senha ||
    !form.telefone.trim() ||
    !form.cidade.trim()
  ) {
    return 'Preencha todos os campos obrigatórios'
  }
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
  if (!emailValido) {
    return 'Informe um e-mail válido'
  }
  if (
    tipoUsuario.value === 'freelancer' &&
    !form.profissao.trim()
  ) {
    return 'Informe sua profissão'
  }
  if (
    tipoUsuario.value === 'freelancer' &&
    !form.anosExperiencia
  ) {
    return 'Informe seus anos de experiência'
  }
  if (!form.aceitaTermos) {
    return 'Você precisa aceitar os termos para continuar'
  }
  return ''
}

async function handleSubmit() {
  erro.value = validate()
  if (erro.value) {
    return
  }
  loading.value = true
  try {

    let foto = previewFoto.value
    if (!foto && form.fotoPerfil) {
      foto = await converterImagem(form.fotoPerfil)
    }
    if (!foto) {
      foto = AVATAR_PADRAO
    }
    const certificadoNome = form.certificados
      ? form.certificados.name
      : null

    const {
      fotoPerfil,
      certificados,
      ...resto
    } = form
    const usuario = {
      ...resto,
      nome: form.nome.trim(),
      email: form.email.trim(),
      senha: form.senha,
      telefone: form.telefone.trim(),
      cidade: form.cidade.trim(),
      profissao: form.profissao.trim(),
      precoServico: form.precoServico.trim(),
      fotoPerfil: foto,
      certificadoNome,
      // lista de profissionais contratados (preenchida depois, ao contratar alguém)
      contratacoes: tipoUsuario.value === 'contratante' ? [] : undefined,
      tipo: tipoUsuario.value
    }

    try {
      usuarioStore.cadastrar(
        usuario,
        tipoUsuario.value
      )
    } catch (erroCadastro) {
      erro.value = erroCadastro.message
      return
    }

    if (tipoUsuario.value === 'freelancer') {
      router.push('/perfil-freelancer')
    }
    else {
      router.push('/dashboard-cliente')
    }
  } catch (error) {
    console.error(
      'Erro ao cadastrar:',
      error
    )
    erro.value =
      'Não foi possível criar a conta.'
  } finally {
    loading.value = false
  }
}
</script>
<style scoped>
.auth-page {
  min-height: 100vh;
  width: 100%;
  background: #f3f4f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 16px 64px;
  box-sizing: border-box;
}
.auth-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 28px;
}
.auth-brand__logo {
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
.auth-brand__name {
  font-size: 24px;
  font-weight: 800;
  color: #1a1a2e;
}
.auth-title {
  font-size: 28px;
  font-weight: 800;
  color: #1a1a2e;
  text-align: center;
  margin: 0 0 6px;
}
.auth-subtitle {
  font-size: 15px;
  color: #6b7280;
  text-align: center;
  margin: 0 0 28px;
}
.auth-tabs {
  width: 100%;
  max-width: 620px;
  display: flex;
  background: white;
  border-radius: 12px;
  padding: 6px;
  box-shadow:
    0 1px 3px rgba(0,0,0,.06);
  margin-bottom: 20px;
  box-sizing: border-box;
}
.auth-tabs__btn {
  flex: 1;
  border: none;
  background: transparent;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  color: #1a1a2e;
  cursor: pointer;
}
.auth-tabs__btn--active {
  background: #3b5bfd;
  color: white;
}
.auth-card {
  width: 100%;
  max-width: 620px;
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow:
    0 1px 3px rgba(0,0,0,.06),
    0 8px 24px rgba(0,0,0,.04);
  box-sizing: border-box;
}
.form-section {
  margin-bottom: 24px;
}
.form-section + .form-section {
  padding-top: 24px;
  border-top: 1px solid #e5e7eb;
}
.form-section__title {
  font-size: 17px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 18px;
}
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.campo-largo {
  margin-top: 16px;
}
.campo {
  margin-top: 16px;
}
.foto-preview {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}
.foto-preview img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #e5e7eb;
}
.foto-preview span {
  font-size: 13px;
  color: #6b7280;
}
.auth-checkbox-row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  color: #374151;
  margin-top: 20px;
}
.auth-checkbox-row input {
  width: 18px;
  height: 18px;
  margin-top: 2px;
  accent-color: #3b5bfd;
}
.auth-link {
  color: #3b5bfd;
  font-weight: 600;
  text-decoration: none;
}
.auth-link:hover {
  text-decoration: underline;
}
.form-error {
  color: #dc2626;
  background: #fef2f2;
  border: 1px solid #fecaca;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 14px;
  margin-top: 16px;
}
.auth-submit {
  width: 100%;
  border: none;
  background: #3b5bfd;
  color: white;
  font-size: 16px;
  font-weight: 700;
  padding: 14px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 18px;
}
.auth-submit:hover {
  background: #2f4bea;
}
.auth-submit:disabled {
  background: #a5b4fc;
  cursor: not-allowed;
}
.auth-footer-text {
  text-align: center;
  font-size: 14px;
  color: #374151;
  margin-top: 20px;
}
@media (max-width: 600px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
  .auth-card {
    padding: 22px;
  }
}
</style>
