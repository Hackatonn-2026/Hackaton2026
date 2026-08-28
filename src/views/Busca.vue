<template>
  <div class="busca-page">
    <div class="container">

      <header class="busca-header">
        <h1>Profissionais</h1>
        <p>{{ profissionaisFiltrados.length }} profissionais encontrados para <strong>{{ categoriaSelecionada }}</strong></p>
      </header>

      <div class="busca-content">
        <aside class="sidebar-wrapper">
          <FilterSidebar @filtrar="aplicarFiltros" />
        </aside>

        <main class="lista-profissionais">

          <div v-if="profissionaisFiltrados.length === 0" class="empty-state">
            Nenhum profissional encontrado para esta busca.
          </div>

          <div class="cards-grid" v-else>
            <ProfessionalCard
              v-for="prof in profissionaisFiltrados"
              :key="prof.id"
              :professional="prof"
              @verPerfil="irParaPerfil"
            />
          </div>

        </main>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import FilterSidebar from '@/components/BarraFiltros.vue'
import ProfessionalCard from '@/components/CartaoProfissional.vue'
import { profissionais } from '@/dataJs/profissionais.js'
import { useUsuarioStore } from '@/stores/usuario'

const route = useRoute()
const router = useRouter()
const usuarioStore = useUsuarioStore()

const profissionaisCadastrados = computed(() => (
  usuarioStore.listarFreelancers().map(usuario => ({
    id: usuario.id,
    category: (usuario.categorias || []).join(' '),
    name: usuario.nome,
    title: usuario.profissao || 'Profissional freelancer',
    avatar: usuario.fotoPerfil,
    rating: usuario.rating || 0,
    reviewsCount: usuario.reviewsCount || 0,
    location: usuario.cidade || '',
    skills: usuario.categorias || [],
    services: usuario.precoServico
      ? [{
          title: usuario.profissao || 'Serviço profissional',
          priceRange: formatarPreco(usuario.precoServico),
          duration: 'A combinar'
        }]
      : []
  }))
))

const todosProfissionais = computed(() => {
  const cadastrados = new Map(profissionaisCadastrados.value.map(prof => [String(prof.id), prof]))
  return [...profissionais, ...cadastrados.values()]
    .filter((prof, index, lista) => lista.findIndex(item => String(item.id) === String(prof.id)) === index)
})

function formatarPreco(valor) {
  const numero = Number(valor)
  if (!Number.isFinite(numero)) return 'Sob consulta'
  return numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

const categoriaQuery = computed(() => route.query.busca || '')
const categoriaSelecionada = computed(() => route.query.busca || 'Todas as categorias')

const filtros = ref({
  localizacao: '',
  precos: [],
  avaliacoes: [],
  disponivelAgora: false,
  apenasVerificados: false,
})

function aplicarFiltros(novosFiltros) {
  // Pega os filtros que foram marcados na lateral.
  filtros.value = novosFiltros
}

function normalizar(texto) {
  if (!texto) return ''
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

// A busca olha a categoria, o nome e a profissão.
function termoCombina(prof, termoBuscado) {
  if (!termoBuscado) return true

  const termo = normalizar(termoBuscado)
  const catProf = normalizar(prof.category)
  const nomeProf = normalizar(prof.name || prof.nome)
  const tituloProf = normalizar(prof.title || prof.titulo)

  const bateCategoria = catProf.includes(termo) || termo.includes(catProf)
  const bateNome = nomeProf.includes(termo)
  const bateTitulo = tituloProf.includes(termo)

  return bateCategoria || bateNome || bateTitulo
}

function parsePriceRange(rangeStr) {
  const numeros = (rangeStr.match(/\d{1,3}(?:\.\d{3})*(?:,\d+)?/g) || [])
    .map(n => Number(n.replace(/\./g, '').replace(',', '.')))

  if (numeros.length === 0) return { min: 0, max: Infinity }
  if (numeros.length === 1) return { min: numeros[0], max: numeros[0] }
  return { min: numeros[0], max: numeros[1] }
}

function passaFiltroLocalizacao(prof) {
  if (!filtros.value.localizacao) return true
  if (!prof.location) return false
  return normalizar(prof.location).includes(normalizar(filtros.value.localizacao))
}

function passaFiltroPreco(prof) {
  const faixasSelecionadas = filtros.value.precos
  if (!faixasSelecionadas.length) return true

  return (prof.services || []).some(servico => {
    const { min: sMin, max: sMax } = parsePriceRange(servico.priceRange)
    return faixasSelecionadas.some(faixa => sMin <= faixa.max && sMax >= faixa.min)
  })
}

function passaFiltroAvaliacao(prof) {
  const notas = filtros.value.avaliacoes
  if (!notas.length) return true
  const limiteMinimo = Math.min(...notas)
  return prof.rating >= limiteMinimo
}

const profissionaisFiltrados = computed(() => {
  // Aqui ficam só os profissionais que combinam com a pesquisa.
  return todosProfissionais.value.filter(prof =>
    termoCombina(prof, categoriaQuery.value)
    && passaFiltroLocalizacao(prof)
    && passaFiltroPreco(prof)
    && passaFiltroAvaliacao(prof)
  )
})

function irParaPerfil(profissional) {
  // Clicar no card abre o perfil desse profissional.
  const id = typeof profissional === 'object' ? profissional.id : profissional
  router.push(`/perfil/${id}`)
}
</script>

<style scoped>
.busca-page {
  background-color: #f9fafb;
  min-height: 100vh;
  padding: 40px 0;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.busca-header h1 {
  font-size: 32px;
  color: #111827;
  margin-bottom: 8px;
}

.busca-header p {
  color: #6b7280;
  margin-bottom: 30px;
  font-size: 15px;
}

.busca-content {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

.sidebar-wrapper {
  width: 280px;
  flex-shrink: 0;
}

.lista-profissionais {
  flex: 1;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
}

.empty-state {
  padding: 40px;
  text-align: center;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  color: #6b7280;
}
</style>
