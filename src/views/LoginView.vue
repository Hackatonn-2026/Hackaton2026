<template>
  <div class="page">
    <section class="hero">
      <h1 class="hero-title">Entrar na sua conta</h1>
      <AccountTypeToggle v-model="accountType" />
    </section>

    <section class="form-section">
      <form class="login-card" @submit.prevent="handleLogin">
        <label class="field-label" for="email">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="seu@email.com"
          class="field-input"
          autocomplete="email"
          required
        />

        <label class="field-label" for="password">Senha</label>
        <PasswordField id="password" v-model="password" />

        <p v-if="error" class="error-msg">{{ error }}</p>

        <button type="submit" class="submit-btn" :disabled="loading">
          {{ loading ? 'Entrando...' : 'Entrar' }}
        </button>

        <p class="switch-auth">
          Não tem conta?
          <router-link :to="cadastroLink">Cadastre-se</router-link>
        </p>
      </form>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import AccountTypeToggle from '../components/AccountTypeToggle.vue'
import PasswordField from '../components/PasswordField.vue'

const router = useRouter()

const accountType = ref('cliente') // 'cliente' | 'freelancer'
const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

const cadastroLink = computed(() =>
  accountType.value === 'cliente' ? '/cadastro-cliente' : '/cadastro-freelancer'
)

async function handleLogin() {
  error.value = ''
  loading.value = true

  try {
    // TODO: substituir pela chamada real de autenticação da API
    // const { data } = await api.post('/auth/login', {
    //   email: email.value,
    //   senha: password.value,
    //   tipo: accountType.value,
    // })

    const destino =
      accountType.value === 'cliente' ? '/dashboard-cliente' : '/dashboard-freelancer'
    router.push(destino)
  } catch (e) {
    error.value = 'Email ou senha inválidos.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.hero {
  background: linear-gradient(180deg, #16225e 0%, #2c4bc2 55%, #4d72e8 100%);
  padding: 56px 24px 72px;
  text-align: center;
  color: #ffffff;
}

.hero-title {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 24px;
}

.form-section {
  flex: 1;
  display: flex;
  justify-content: center;
  margin-top: -48px;
  padding: 0 24px 64px;
}

.login-card {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.12);
  padding: 40px;
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
}

.field-label {
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
  margin: 16px 0 6px;
}

.field-label:first-of-type {
  margin-top: 0;
}

.field-input {
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  background: #eceff3;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
}

.field-input:focus {
  border-color: #2c4bc2;
  background: #ffffff;
}

.error-msg {
  color: #dc2626;
  font-size: 13px;
  margin: 12px 0 0;
}

.submit-btn {
  margin-top: 28px;
  background: #16225e;
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
  background: #223583;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.switch-auth {
  text-align: center;
  font-size: 14px;
  color: #4b5563;
  margin-top: 18px;
}

.switch-auth a {
  color: #2c4bc2;
  font-weight: 600;
  text-decoration: none;
}

.switch-auth a:hover {
  text-decoration: underline;
}
</style>
