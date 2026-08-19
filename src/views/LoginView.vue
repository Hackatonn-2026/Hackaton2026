<template>
  <div class="auth-page">
    <div class="auth-brand">
      <span class="auth-brand__logo">ai</span>
      <span class="auth-brand__name">CiroLancers</span>
    </div>

    <h1 class="auth-title">Entrar na sua conta</h1>
    <p class="auth-subtitle">Bem-vindo de volta!</p>

    <div class="auth-card">
      <form @submit.prevent="handleSubmit">
        <div class="form-grid" style="margin-bottom: 16px">
          <InputForm
            label="E-mail"
            placeholder="seu@email.com"
            type="email"
            v-model="email"
            :error="errors.email"
          />
        </div>

        <div class="form-grid" style="margin-bottom: 8px">
          <InputForm
            label="Senha"
            placeholder="••••••••"
            type="password"
            v-model="senha"
            :error="errors.senha"
          />
        </div>

        <div class="auth-row-between">
          <label class="auth-checkbox-row">
            <input type="checkbox" v-model="lembrarMe" />
            Lembrar-me
          </label>
          <RouterLink to="/esqueci-senha" class="auth-link">Esqueceu a senha?</RouterLink>
        </div>

        <button type="submit" class="auth-submit" :disabled="loading">
          {{ loading ? 'Entrando...' : 'Entrar' }}
        </button>
      </form>

      <div class="auth-divider">Ou continue com</div>

      <div class="auth-social-row">
        <button type="button" class="auth-social-btn" @click="loginComGoogle">
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.87 2.7-6.62Z"/>
            <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.84.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.95v2.33A9 9 0 0 0 9 18Z"/>
            <path fill="#FBBC05" d="M3.95 10.7A5.4 5.4 0 0 1 3.66 9c0-.59.1-1.16.29-1.7V4.97H.95A9 9 0 0 0 0 9c0 1.45.35 2.83.95 4.03l3-2.33Z"/>
            <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.9 11.43 0 9 0A9 9 0 0 0 .95 4.97l3 2.33C4.66 5.17 6.65 3.58 9 3.58Z"/>
          </svg>
          Google
        </button>

        <button type="button" class="auth-social-btn" @click="loginComFacebook">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99h-2.54V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12Z"/>
          </svg>
          Facebook
        </button>
      </div>

      <p class="auth-footer-text">
        Não tem uma conta?
        <RouterLink to="/cadastro-cliente" class="auth-link">Cadastre-se grátis</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import InputForm from '../components/InputForm.vue'

const router = useRouter()

const email = ref('')
const senha = ref('')
const lembrarMe = ref(false)
const loading = ref(false)
const errors = reactive({ email: '', senha: '' })

function validate() {
  errors.email = email.value ? '' : 'Informe seu e-mail'
  errors.senha = senha.value ? '' : 'Informe sua senha'
  return !errors.email && !errors.senha
}

async function handleSubmit() {
  if (!validate()) return
  loading.value = true
  try {
    // TODO: integrar com a API de autenticação
    // await api.post('/login', { email: email.value, senha: senha.value })
    router.push('/dashboard-cliente')
  } finally {
    loading.value = false
  }
}

function loginComGoogle() {
  // TODO: integrar OAuth Google
}

function loginComFacebook() {
  // TODO: integrar OAuth Facebook
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
  color: #fff;
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
  max-width: 460px;
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 8px 24px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.auth-checkbox-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #374151;
}

.auth-checkbox-row input[type='checkbox'] {
  width: 18px;
  height: 18px;
  accent-color: #1a1a2e;
  cursor: pointer;
}

.auth-row-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0 20px;
  flex-wrap: wrap;
  gap: 8px;
}

.auth-link {
  color: #3b5bfd;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}

.auth-link:hover {
  text-decoration: underline;
}

.auth-submit {
  width: 100%;
  border: none;
  background: #3b5bfd;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  padding: 14px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.15s ease;
  margin-top: 4px;
}

.auth-submit:hover {
  background: #2f4bea;
}

.auth-submit:disabled {
  background: #a5b4fc;
  cursor: not-allowed;
}

.auth-divider {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 20px 0;
  color: #9ca3af;
  font-size: 13px;
}

.auth-divider::before,
.auth-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #e5e7eb;
}

.auth-social-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 20px;
}

.auth-social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid #e5e7eb;
  background: #fff;
  border-radius: 10px;
  padding: 11px;
  font-size: 14px;
  font-weight: 600;
  color: #1a1a2e;
  cursor: pointer;
}

.auth-social-btn:hover {
  background: #f9fafb;
}

.auth-footer-text {
  text-align: center;
  font-size: 14px;
  color: #374151;
  margin-top: 4px;
}
</style>
