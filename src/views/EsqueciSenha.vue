<template>
  <div class="auth-page">
    <div class="auth-brand">
      <span class="auth-brand__logo">G</span>
      <span class="auth-brand__name">Guey</span>
    </div>

    <template v-if="!enviado">
      <h1 class="auth-title">Recuperar senha</h1>
      <p class="auth-subtitle">Informe seu e-mail e enviaremos um link para redefinir sua senha</p>

      <div class="auth-card">
        <form @submit.prevent="handleSubmit">
          <div style="margin-bottom: 20px">
            <InputForm
              label="E-mail"
              placeholder="seu@email.com"
              type="email"
              icon="email"
              v-model="email"
            />
          </div>

          <p v-if="erro" class="form-error">{{ erro }}</p>

          <button type="submit" class="auth-submit" :disabled="loading">
            {{ loading ? 'Enviando...' : 'Enviar link de recuperação' }}
          </button>
        </form>

        <p class="auth-footer-text">
          Lembrou a senha?
          <RouterLink to="/login" class="auth-link">Voltar para o login</RouterLink>
        </p>
      </div>
    </template>

    <template v-else>
      <h1 class="auth-title">Verifique seu e-mail</h1>
      <p class="auth-subtitle">
        Enviamos um link de recuperação para <strong>{{ email }}</strong>
      </p>

      <div class="auth-card">
        <p class="auth-info-text">
          Não recebeu o e-mail? Verifique sua caixa de spam ou tente novamente.
        </p>

        <button type="button" class="auth-submit" @click="enviado = false">
          Tentar outro e-mail
        </button>

        <p class="auth-footer-text">
          <RouterLink to="/login" class="auth-link">Voltar para o login</RouterLink>
        </p>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputForm from '../components/FormularioEntrada.vue'

const email = ref('')
const erro = ref('')
const loading = ref(false)
const enviado = ref(false)

async function handleSubmit() {
  erro.value = email.value ? '' : 'Informe seu e-mail'
  if (erro.value) return

  loading.value = true
  try {
    // TODO: integrar com a API de recuperação de senha
    // await api.post('/recuperar-senha', { email: email.value })
    enviado.value = true
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
.auth-subtitle { font-size: 15px; color: #6b7280; text-align: center; margin: 0 0 28px; max-width: 420px; }
.auth-card { width: 100%; max-width: 460px; background: #fff; border-radius: 16px; padding: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04); box-sizing: border-box; }
.auth-info-text { font-size: 14px; color: #374151; text-align: center; margin: 0 0 20px; }
.auth-link { color: #3b5bfd; font-size: 14px; font-weight: 600; text-decoration: none; }
.auth-link:hover { text-decoration: underline; }
.form-error { font-size: 13px; color: #ef4444; margin: -12px 0 16px; }
.auth-submit { width: 100%; border: none; background: #3b5bfd; color: #fff; font-size: 16px; font-weight: 700; padding: 14px; border-radius: 10px; cursor: pointer; transition: background 0.15s; margin-top: 4px; }
.auth-submit:hover { background: #2f4bea; }
.auth-submit:disabled { background: #a5b4fc; cursor: not-allowed; }
.auth-footer-text { text-align: center; font-size: 14px; color: #374151; margin-top: 20px; }
</style>
