<template>
  <div class="page">
    <div class="auth-wrap">
      <AuthHeader title="Entrar na sua conta" subtitle="Bem-vindo de volta!" />

      <form class="login-card" @submit.prevent="handleLogin">
        <IconInput
          id="email"
          v-model="email"
          label="E-mail"
          type="email"
          placeholder="seu@email.com"
          autocomplete="email"
        >
          <template #icon>
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                fill="currentColor"
                d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.01L12 12l8-5.99V6H4Zm16 12V8.24l-7.4 5.55a1 1 0 0 1-1.2 0L4 8.24V18h16Z"
              />
            </svg>
          </template>
        </IconInput>

        <PasswordField id="password" v-model="password" label="Senha" />

        <div class="row">
          <label class="remember">
            <input v-model="rememberMe" type="checkbox" />
            Lembrar-me
          </label>
          <router-link to="/esqueci-senha" class="forgot-link">Esqueceu a senha?</router-link>
        </div>

        <p v-if="error" class="error-msg">{{ error }}</p>

        <button type="submit" class="submit-btn" :disabled="loading">
          {{ loading ? 'Entrando...' : 'Entrar' }}
        </button>

        <SocialButtons @google="handleSocialLogin('google')" @facebook="handleSocialLogin('facebook')" />

        <p class="switch-auth">
          Não tem uma conta?
          <router-link to="/cadastro-cliente">Cadastre-se grátis</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthHeader from '../components/AuthHeader.vue'
import IconInput from '../components/IconInput.vue'
import PasswordField from '../components/PasswordField.vue'
import SocialButtons from '../components/SocialButtons.vue'
import InputForm from '@/components/InputForm.vue'


const router = useRouter()

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const loading = ref(false)
const error = ref('')

async function handleLogin() {
  error.value = ''
  loading.value = true

  try {
    router.push('/')
  } catch (e) {
    error.value = 'Email ou senha inválidos.'
  } finally {
    loading.value = false
  }
}

function handleSocialLogin(provider) {
  console.log('login social:', provider)
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: #f3f4f8;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
}

.auth-wrap {
  width: 100%;
  max-width: 460px;
}

.login-card {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -8px;
}

.remember {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #374151;
  cursor: pointer;
}

.remember input {
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.forgot-link {
  font-size: 14px;
  color: #2f5df5;
  font-weight: 500;
  text-decoration: none;
}

.forgot-link:hover {
  text-decoration: underline;
}

.error-msg {
  color: #dc2626;
  font-size: 13px;
  margin: -8px 0 0;
}

.submit-btn {
  background: #2f5df5;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 13px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.submit-btn:hover:not(:disabled) {
  background: #2049d6;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.switch-auth {
  text-align: center;
  font-size: 14px;
  color: #4b5563;
  margin: 0;
}

.switch-auth a {
  color: #2f5df5;
  font-weight: 600;
  text-decoration: none;
}

.switch-auth a:hover {
  text-decoration: underline;
}
</style>