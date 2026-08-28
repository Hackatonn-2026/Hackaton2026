<template>
  <div class="auth-page">
    <div class="auth-brand">
      <span class="auth-brand__logo">ai</span>
      <span class="auth-brand__name">CiroLancers</span>
    </div>

    <h1 class="auth-title">Editar Perfil</h1>
    <p class="auth-subtitle">Atualize suas informações</p>

    <div class="auth-card">
      <form @submit.prevent="handleSubmit">

        <div class="form-section">
          <h2 class="form-section__title">Dados Pessoais</h2>

          <div class="avatar-row">
            <img :src="previewFoto || form.fotoPerfil || AVATAR_PADRAO" alt="Foto de perfil" class="avatar-img" />
            <FileUpload
              v-model:file="novaFoto"
              label="Trocar foto"
              @update:file="onFotoSelecionada"
            />
          </div>

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
              v-model="form.telefone"
              label="Telefone"
              placeholder="(11) 99999-9999"
              type="tel"
            />
            <InputForm
              v-model="form.cidade"
              label="Cidade"
              placeholder="São Paulo, SP"
              icon="location"
            />
          </div>
        </div>

        <div class="form-section">
          <h2 class="form-section__title">Alterar Senha (opcional)</h2>
          <div class="form-grid">
            <InputForm
              v-model="novaSenha"
              label="Nova Senha"
              placeholder="Deixe em branco para manter a atual"
              type="password"
            />
            <InputForm
              v-model="confirmarSenha"
              label="Confirmar Nova Senha"
              placeholder="Repita a nova senha"
              type="password"
            />
          </div>
        </div>

        <div v-if="tipoUsuario === 'freelancer'" class="form-section">
          <h2 class="form-section__title">Informações Profissionais</h2>

          <InputForm
            v-model="form.profissao"
            label="Profissão/Especialidade"
            placeholder="Ex: Desenvolvedor Full Stack"
            icon="briefcase"
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
        </div>

        <p v-if="erro" class="form-error">{{ erro }}</p>
        <p v-if="sucesso" class="form-sucesso">{{ sucesso }}</p>

        <div class="auth-actions">
          <button type="button" class="auth-cancel" @click="cancelar">
            Cancelar
          </button>
          <button type="submit" class="auth-submit" :disabled="loading">
            {{ loading ? 'Salvando...' : 'Salvar Alterações' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUsuarioStore } from '@/stores/usuario'
import InputForm from './InputForm.vue'
import SelectForm from './SelectForm.vue'
import TextareaForm from './TextareaForm.vue'
import CheckboxGroup from './CheckboxGroup.vue'
import FileUpload from './FileUpload.vue'

const router = useRouter()
const usuarioStore = useUsuarioStore()

const AVATAR_PADRAO = '/img/avatar-padrao.png'

const usuarioAtual = usuarioStore.state.usuario
const tipoUsuario = usuarioStore.state.tipoUsuario

if (!usuarioAtual) {
  router.push('/login')
}

const loading = ref(false)
const erro = ref('')
const sucesso = ref('')

const novaSenha = ref('')
const confirmarSenha = ref('')

const form = reactive({
  nome: usuarioAtual?.nome || '',
  email: usuarioAtual?.email || '',
  telefone: usuarioAtual?.telefone || '',
  cidade: usuarioAtual?.cidade || '',
  profissao: usuarioAtual?.profissao || '',
  anosExperiencia: usuarioAtual?.anosExperiencia || '',
  descricao: usuarioAtual?.descricao || '',
  categorias: usuarioAtual?.categorias || [],
  fotoPerfil: usuarioAtual?.fotoPerfil || AVATAR_PADRAO
})

const opcoesExperiencia = [
  { value: 'menos-1', label: 'Menos de 1 ano' },
  { value: '1-3', label: '1 a 3 anos' },
  { value: '3-5', label: '3 a 5 anos' },
  { value: '5-10', label: '5 a 10 anos' },
  { value: 'mais-10', label: 'Mais de 10 anos' }
]

const categoriasDisponiveis = [
  'Desenvolvimento',
  'Design',
  'Marketing',
  'Consultoria',
  'Edição',
  'Tradução'
]

const novaFoto = ref(null)
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
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
    reader.readAsDataURL(file)
  })
}

function validate() {
  if (!form.nome.trim() || !form.email.trim() || !form.telefone.trim() || !form.cidade.trim()) {
    return 'Preencha todos os campos obrigatórios'
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
  if (!emailValido) {
    return 'Informe um e-mail válido'
  }

  if (tipoUsuario === 'freelancer' && !form.profissao.trim()) {
    return 'Informe sua profissão'
  }

  if (novaSenha.value || confirmarSenha.value) {
    if (novaSenha.value.length < 6) {
      return 'A nova senha deve ter pelo menos 6 caracteres'
    }
    if (novaSenha.value !== confirmarSenha.value) {
      return 'As senhas não conferem'
    }
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
    let foto = previewFoto.value || form.fotoPerfil

    const dadosAtualizados = {
      ...form,
      nome: form.nome.trim(),
      email: form.email.trim(),
      telefone: form.telefone.trim(),
      cidade: form.cidade.trim(),
      profissao: form.profissao.trim(),
      fotoPerfil: foto
    }

    if (novaSenha.value) {
      dadosAtualizados.senha = novaSenha.value
    }

    usuarioStore.atualizarPerfil(dadosAtualizados)

    sucesso.value = 'Perfil atualizado com sucesso!'
    novaSenha.value = ''
    confirmarSenha.value = ''

    setTimeout(() => {
      if (tipoUsuario === 'freelancer') {
        router.push('/perfil-freelancer')
      } else {
        router.push('/dashboard-cliente')
      }
    }, 1000)
  } catch (e) {
    erro.value = e.message
  } finally {
    loading.value = false
  }
}

function cancelar() {
  router.back()
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
.campo {
  margin-top: 16px;
}
.avatar-row {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}
.avatar-img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #e5e7eb;
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
.form-sucesso {
  color: #15803d;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 14px;
  margin-top: 16px;
}
.auth-actions {
  display: flex;
  gap: 12px;
  margin-top: 18px;
}
.auth-cancel {
  flex: 1;
  border: 1px solid #e5e7eb;
  background: white;
  color: #374151;
  font-size: 16px;
  font-weight: 700;
  padding: 14px;
  border-radius: 10px;
  cursor: pointer;
}
.auth-cancel:hover {
  background: #f9fafb;
}
.auth-submit {
  flex: 2;
  border: none;
  background: #3b5bfd;
  color: white;
  font-size: 16px;
  font-weight: 700;
  padding: 14px;
  border-radius: 10px;
  cursor: pointer;
}
.auth-submit:hover {
  background: #2f4bea;
}
.auth-submit:disabled {
  background: #a5b4fc;
  cursor: not-allowed;
}
@media (max-width: 600px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
  .auth-card {
    padding: 22px;
  }
  .auth-actions {
    flex-direction: column;
  }
}
</style>