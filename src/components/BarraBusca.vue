<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { profissionais } from '@/dataJs/profissionais.js'
import { useUsuarioStore } from '@/stores/usuario'

const router = useRouter()
const usuarioStore = useUsuarioStore()
const query = ref('')

const todosProfissionais = computed(() => [
  ...profissionais,
  ...usuarioStore.listarFreelancers().map(usuario => ({
    id: usuario.id,
    name: usuario.nome,
    title: usuario.profissao || 'Profissional freelancer',
    category: (usuario.categorias || []).join(' ')
  }))
])

// Filtra sugestões tanto por nome de profissional quanto por categoria
const resultados = computed(() => {
  const texto = query.value.trim().toLowerCase()
  if (!texto) return []

  const sugestoes = []

  todosProfissionais.value.forEach(p => {
    const nome = p.name || p.nome || ''
    const cat = p.category || p.categoria || (p.categorias || []).join(' ')
    const titulo = p.title || p.titulo || ''

    if (nome.toLowerCase().includes(texto)) {
      sugestoes.push({ id: p.id, label: nome, sub: 'Profissional', tipo: 'perfil' })
    } else if (cat.toLowerCase().includes(texto)) {
      if (!sugestoes.some(s => s.label.toLowerCase() === cat.toLowerCase())) {
        sugestoes.push({ label: cat, sub: 'Categoria', tipo: 'busca' })
      }
    } else if (titulo.toLowerCase().includes(texto)) {
      sugestoes.push({ id: p.id, label: `${nome} (${titulo})`, sub: 'Serviço', tipo: 'perfil' })
    }
  })

  return sugestoes.slice(0, 6)
})

// Ir para a página de busca ao apertar ENTER
function irParaBusca() {
  const texto = query.value.trim()
  if (!texto) return

  router.push({
    path: '/buscar',
    query: { busca: texto }
  })

  query.value = ''
}

// Ao clicar numa sugestão da lista
function selecionarSugestao(item) {
  if (item.tipo === 'perfil') {
    router.push(`/perfil/${item.id}`)
  } else {
    router.push({
      path: '/buscar',
      query: { busca: item.label }
    })
  }

  query.value = ''
}
</script>

<template>
  <div class="search-wrap">
    <input
      v-model="query"
      type="text"
      placeholder="Buscar profissionais ou serviços..."
      @keyup.enter="irParaBusca"
    />

    <ul v-if="query.length > 0 && resultados.length > 0" class="search-suggestions">
      <li
        v-for="(item, index) in resultados"
        :key="index"
        class="suggestion-item"
        @click="selecionarSugestao(item)"
      >
        <span>{{ item.label }}</span>
        <small class="tag">{{ item.sub }}</small>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.search-wrap {
  position: relative;
  flex: 1;
  max-width: 560px;
}

.search-wrap input {
  width: 100%;
  padding: 10px 14px;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 14px;
  outline: none;
}

.search-wrap input:focus {
  border-color: #2563eb;
  background: #fff;
}

.search-suggestions {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 999;
}

.suggestion-item {
  padding: 10px 14px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #1f2937;
}

.suggestion-item:hover {
  background: #f3f4f6;
  color: #2563eb;
}

.tag {
  font-size: 11px;
  background: #e5e7eb;
  color: #4b5563;
  padding: 2px 6px;
  border-radius: 4px;
}
</style>
