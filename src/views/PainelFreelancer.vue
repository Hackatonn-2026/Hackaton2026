<template>
  <div class="perfil-page">
    <div class="perfil-brand">
      <span class="perfil-brand__logo">ai</span>
      <span class="perfil-brand__name">CiroLancers</span>
    </div>

    <div class="perfil-card">
      <div class="perfil-header">
        <div class="perfil-avatar">
          <img v-if="fotoUrl" :src="fotoUrl" alt="Foto de perfil" />
          <span v-else>{{ iniciais }}</span>
        </div>

        <div class="perfil-header__info">
          <h1 class="perfil-nome">{{ usuario.nome || 'Nome não informado' }}</h1>
          <p v-if="tipoUsuario === 'freelancer'" class="perfil-profissao">
            {{ usuario.profissao || 'Profissão não informada' }}
          </p>
          <p v-else class="perfil-profissao perfil-profissao--contratante">
            Contratante
          </p>

          <div class="perfil-badges">
            <span v-if="usuario.cidade" class="perfil-badge">📍 {{ usuario.cidade }}</span>
            <span v-if="tipoUsuario === 'freelancer' && experienciaLabel" class="perfil-badge perfil-badge--accent">
              ⏱ {{ experienciaLabel }}
            </span>
          </div>
        </div>

        <RouterLink
          v-if="ehMeuPerfil"
          to="/editar-perfil"
          class="perfil-editar-btn"
        >
          Editar Perfil
        </RouterLink>
      </div>

      <div v-if="tipoUsuario === 'freelancer' && usuario.descricao" class="form-section">
        <h2 class="form-section__title">Descrição Profissional</h2>
        <p class="perfil-descricao">{{ usuario.descricao }}</p>
      </div>

      <div v-if="tipoUsuario === 'freelancer' && usuario.categorias && usuario.categorias.length" class="form-section">
        <h2 class="form-section__title">Categorias de Atuação</h2>
        <div class="perfil-tags">
          <span v-for="categoria in usuario.categorias" :key="categoria" class="perfil-tag">
            {{ categoria }}
          </span>
        </div>
      </div>

      <div class="form-section">
        <h2 class="form-section__title">Dados de Contato</h2>
        <div class="perfil-contact-row">
          <span class="perfil-contact-icon">✉</span>
          {{ usuario.email || 'E-mail não informado' }}
        </div>
        <div class="perfil-contact-row">
          <span class="perfil-contact-icon">☎</span>
          {{ usuario.telefone || 'Telefone não informado' }}
        </div>
      </div>

      <div v-if="tipoUsuario === 'freelancer' && usuario.certificados" class="form-section">
        <h2 class="form-section__title">Certificados</h2>
        <div class="perfil-cert-chip">
          <span class="perfil-contact-icon">📄</span>
          {{ nomeCertificado }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({

  usuario: {
    type: Object,
    required: true,
    default: () => ({
      nome: '', email: '', telefone: '', cidade: '',
      profissao: '', anosExperiencia: '', descricao: '', categorias: [],
      fotoPerfil: null, certificados: null
    })
  },
  tipoUsuario: {
    type: String,
    default: 'freelancer'
  }
})

const route = useRoute()

// só mostra o botão de editar quando é a rota do "meu perfil"
// (a rota /perfil/:id, usada pra ver o perfil público de outros freelancers, não mostra o botão)
const ehMeuPerfil = computed(() => route.name === 'perfil-freelancer')

const opcoesExperiencia = [
  { value: 'menos-1', label: 'Menos de 1 ano' },
  { value: '1-3', label: '1 a 3 anos' },
  { value: '3-5', label: '3 a 5 anos' },
  { value: '5-10', label: '5 a 10 anos' },
  { value: 'mais-10', label: 'Mais de 10 anos' }
]

const experienciaLabel = computed(() => {
  const opcao = opcoesExperiencia.find(o => o.value === props.usuario.anosExperiencia)
  return opcao ? opcao.label : ''
})

const iniciais = computed(() => {
  if (!props.usuario.nome) return '?'
  return props.usuario.nome
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(parte => parte[0]?.toUpperCase())
    .join('')
})
const fotoUrl = computed(() => {
  const foto = props.usuario.fotoPerfil
  if (!foto) return null
  if (typeof foto === 'string') return foto
  if (foto instanceof File) return URL.createObjectURL(foto)
  return null
})

const nomeCertificado = computed(() => {
  const cert = props.usuario.certificados
  if (!cert) return ''
  if (typeof cert === 'string') return cert
  if (cert instanceof File) return cert.name
  return 'certificado.pdf'
})
</script>

<style scoped>
.perfil-page { min-height: 100vh; width: 100%; background: #f3f4f6; display: flex; flex-direction: column; align-items: center; padding: 48px 16px 64px; box-sizing: border-box; }
.perfil-brand { display: flex; align-items: center; gap: 10px; margin-bottom: 28px; }
.perfil-brand__logo { width: 40px; height: 40px; border-radius: 10px; background: #3b5bfd; color: #fff; font-weight: 700; font-size: 20px; display: flex; align-items: center; justify-content: center; }
.perfil-brand__name { font-size: 24px; font-weight: 800; color: #1a1a2e; }
.perfil-card { width: 100%; max-width: 620px; background: #fff; border-radius: 16px; padding: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04); box-sizing: border-box; }
.perfil-header { display: flex; align-items: center; gap: 20px; }
.perfil-avatar { width: 84px; height: 84px; border-radius: 50%; background: #3b5bfd; color: #fff; font-weight: 700; font-size: 28px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; overflow: hidden; }
.perfil-avatar img { width: 100%; height: 100%; object-fit: cover; }
.perfil-header__info { flex: 1; min-width: 0; }
.perfil-nome { font-size: 24px; font-weight: 800; color: #1a1a2e; margin: 0; }
.perfil-profissao { font-size: 15px; color: #6b7280; margin: 4px 0 0; }
.perfil-profissao--contratante { color: #3b5bfd; font-weight: 600; }
.perfil-badges { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
.perfil-badge { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 500; padding: 6px 12px; border-radius: 999px; background: #f3f4f6; color: #1a1a2e; }
.perfil-badge--accent { background: #e8ecff; color: #3b5bfd; font-weight: 700; }
.perfil-editar-btn { flex-shrink: 0; align-self: flex-start; border: 1px solid #3b5bfd; background: transparent; padding: 8px 16px; border-radius: 8px; font-size: 14px; font-weight: 600; color: #3b5bfd; text-decoration: none; }
.perfil-editar-btn:hover { background: #e8ecff; }
.form-section { margin-bottom: 8px; }
.form-section + .form-section { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; }
.form-section__title { font-size: 16px; font-weight: 700; color: #1a1a2e; margin: 0 0 12px; }
.perfil-descricao { font-size: 14.5px; line-height: 1.65; color: #374151; margin: 0; }
.perfil-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.perfil-tag { font-size: 13px; font-weight: 600; padding: 6px 12px; border-radius: 8px; background: #f3f4f6; border: 1px solid #e5e7eb; color: #1a1a2e; }
.perfil-contact-row { display: flex; align-items: center; gap: 10px; font-size: 14px; color: #1a1a2e; padding: 8px 0; }
.perfil-contact-icon { width: 30px; height: 30px; border-radius: 9px; background: #e8ecff; color: #3b5bfd; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 14px; }
.perfil-cert-chip { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border: 1px solid #e5e7eb; border-radius: 10px; background: #f3f4f6; font-size: 13.5px; font-weight: 500; color: #1a1a2e; }
@media (max-width: 600px) {
  .perfil-header { flex-wrap: wrap; }
  .perfil-editar-btn { margin-left: auto; }
}
</style>