<template>
  <section class="cta-final">
    <h2>Pronto para começar?</h2>
    <p>Junte-se a milhares de profissionais e clientes satisfeitos</p>

    <div class="botoes">
      <button class="btn-branco" @click="irParaContratar">Contratar Profissional</button>
      <button class="btn-outline" @click="irParaFreelancer">Tornar-se Freelancer</button>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function irParaContratar() {
  router.push({ name: 'cadastro-cliente' })
}

function irParaFreelancer() {
  router.push({ name: 'cadastro-freelancer' })
}
</script>

<style scoped>
.cta-final {
  padding: 80px 8%;
  text-align: center;
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
}

.cta-final h2 {
  font-size: 32px;
  color: #fff;
  margin-bottom: 12px;
}

.cta-final p {
  color: #dbe4ff;
  font-size: 17px;
  margin-bottom: 36px;
}

.botoes {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-branco,
.btn-outline {
  padding: 14px 28px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  border: none;
}

.btn-branco {
  background: #fff;
  color: #2563eb;
}

.btn-outline {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.25);
}

@media (max-width: 600px) {
  .botoes {
    flex-direction: column;
    align-items: center;
  }

  .btn-branco,
  .btn-outline {
    width: 100%;
    max-width: 320px;
  }
}
</style>
