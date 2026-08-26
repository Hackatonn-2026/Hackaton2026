<template>
  <div class="dashboard-page">
    <div class="dashboard-container">
      <div class="perfil-card">
        <img
          :src="usuario.fotoPerfil || avatarPadrao"
          :alt="usuario.nomeEmpresa || usuario.nome"
          class="perfil-card__foto"
        />
        <div class="perfil-card__info">
          <h1 class="perfil-card__nome">
            {{ usuario.nomeEmpresa || usuario.nome }}
          </h1>
          <p class="perfil-card__segmento">
            {{ segmentoLabel }}
          </p>
          <p
            v-if="usuario.cidade"
            class="perfil-card__cidade"
          >
            {{ usuario.cidade }}
          </p>
          <p
            v-if="usuario.descricao"
            class="perfil-card__descricao"
          >
            {{ usuario.descricao }}
          </p>
        </div>
        <button
          type="button"
          class="perfil-card__sair"
          @click="sair"
        >
        </button>
      </div>
      <div class="contratados-section">
        <h2 class="contratados-section__title">
          Profissionais Contratados
        </h2>
        <div
          v-if="contratacoes.length === 0"
          class="estado-vazio"
        >
          <div class="estado-vazio__icone">🤝</div>
          <p class="estado-vazio__titulo">
            Você ainda não contratou ninguém
          </p>
          <p class="estado-vazio__texto">
            Quando você contratar um profissional, ele vai aparecer aqui.
          </p>
          <RouterLink
            to="/buscar"
            class="estado-vazio__botao"
          >
            Buscar profissionais
          </RouterLink>
        </div>
        <div
          v-else
          class="contratados-grid"
        >
          <div
            v-for="contratado in contratacoes"
            :key="contratado.id"
            class="contratado-card"
          >
            <img
              :src="contratado.fotoPerfil || avatarPadrao"
              :alt="contratado.nome"
              class="contratado-card__foto"
            />
            <div class="contratado-card__info">
              <p class="contratado-card__nome">
                {{ contratado.nome }}
              </p>
              <p
                v-if="contratado.profissao"
                class="contratado-card__profissao"
              >
                {{ contratado.profissao }}
              </p>
              <p
                v-if="contratado.dataContratacao"
                class="contratado-card__data"
              >
                Contratado em {{ formatarData(contratado.dataContratacao) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUsuarioStore } from '@/stores/usuario'
const router = useRouter()
const usuarioStore = useUsuarioStore()
const avatarPadrao = '/img/avatar-padrao.png'
if (!usuarioStore.state.usuario) {
  router.replace('/login')
}
const usuario = computed(() => usuarioStore.state.usuario || {})
const contratacoes = computed(() => usuario.value.contratacoes || [])
const opcoesSegmento = {
  tecnologia: 'Tecnologia',
  varejo: 'Varejo / E-commerce',
  saude: 'Saúde',
  educacao: 'Educação',
  financeiro: 'Financeiro',
  outro: 'Outro'
}
const segmentoLabel = computed(() => {
  return opcoesSegmento[usuario.value.segmento] || ''
})
function formatarData(data) {
  return new Date(data).toLocaleDateString('pt-BR')
}
function sair() {
  usuarioStore.logout()
  router.push('/')
}
</script>
<style scoped>
.dashboard-page {
  min-height: 100vh;
  width: 100%;
  background: #f3f4f6;
  padding: 40px 16px 64px;
  box-sizing: border-box;
}
.dashboard-container {
  max-width: 860px;
  margin: 0 auto;
}
.perfil-card {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background: white;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 1px 3px rgba(0,0,0,.06), 0 8px 24px rgba(0,0,0,.04);
  margin-bottom: 32px;
}
.perfil-card__foto {
  width: 88px;
  height: 88px;
  border-radius: 16px;
  object-fit: cover;
  border: 1px solid #e5e7eb;
  flex-shrink: 0;
}
.perfil-card__info {
  flex: 1;
}
.perfil-card__nome {
  font-size: 22px;
  font-weight: 800;
  color: #1a1a2e;
  margin: 0 0 4px;
}
.perfil-card__segmento {
  font-size: 14px;
  font-weight: 600;
  color: #3b5bfd;
  margin: 0 0 4px;
}
.perfil-card__cidade {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 10px;
}
.perfil-card__descricao {
  font-size: 14px;
  color: #374151;
  line-height: 1.5;
  margin: 0;
}
.perfil-card__sair {
  border: 1px solid #d1d5db;
  background: transparent;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  color: #4b5563;
  cursor: pointer;
  flex-shrink: 0;
}
.perfil-card__sair:hover {
  border-color: #dc2626;
  color: #dc2626;
}
.contratados-section__title {
  font-size: 18px;
  font-weight: 800;
  color: #1a1a2e;
  margin: 0 0 18px;
}
.estado-vazio {
  background: white;
  border: 1px dashed #d1d5db;
  border-radius: 16px;
  padding: 48px 24px;
  text-align: center;
}
.estado-vazio__icone {
  font-size: 36px;
  margin-bottom: 10px;
}
.estado-vazio__titulo {
  font-size: 16px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 6px;
}
.estado-vazio__texto {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 18px;
}
.estado-vazio__botao {
  display: inline-block;
  background: #3b5bfd;
  color: white;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 14px;
}
.estado-vazio__botao:hover {
  background: #2f4bea;
}
.contratados-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.contratado-card {
  display: flex;
  align-items: center;
  gap: 14px;
  background: white;
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,.06);
}
.contratado-card__foto {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}
.contratado-card__nome {
  font-size: 15px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 2px;
}
.contratado-card__profissao {
  font-size: 13px;
  color: #3b5bfd;
  margin: 0 0 2px;
}
.contratado-card__data {
  font-size: 12px;
  color: #9ca3af;
  margin: 0;
}
@media (max-width: 600px) {
  .perfil-card {
    flex-direction: column;
    align-items: flex-start;
  }
  .perfil-card__sair {
    align-self: flex-end;
  }
  .contratados-grid {
    grid-template-columns: 1fr;
  }
}

</style>