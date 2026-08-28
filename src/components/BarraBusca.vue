<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const profissionais = [
  'Eletricista residencial',
  'Encanador de emergência',
  'Pintor de paredes',
  'Diarista',
  'Personal trainer',
  'Designer gráfico',
  'Desenvolvedor web',
  'Fotógrafo de eventos'
]

const query = ref('')
const mostrarSugestoes = ref(false)

const resultados = computed(() => {
  return profissionais.filter(item =>
    item.toLowerCase().includes(query.value.toLowerCase())
  )
})

function buscar() {
  const termo = query.value.trim()

  if (!termo) return

  mostrarSugestoes.value = false
  router.push({ path: '/buscar', query: { busca: termo } })
}

function fecharSugestoes(event) {
  const elemento = event.target

  if (elemento instanceof Node && !elemento.closest('.search-wrap')) {
    mostrarSugestoes.value = false
  }
}

onMounted(() => document.addEventListener('click', fecharSugestoes))
onBeforeUnmount(() => document.removeEventListener('click', fecharSugestoes))
</script>

<template>
  <div class="search-wrap">

    <input
      v-model="query"
      type="text"
      placeholder="Buscar profissionais ou serviços..."
      @focus="mostrarSugestoes = query.length > 0"
      @keydown.enter.prevent="buscar"
    >

    <ul
      v-if="mostrarSugestoes && query.length > 0"
      class="search-suggestions"
    >
      <li
        v-if="resultados.length === 0"
        class="suggestion-empty"
      >
        Nenhum resultado encontrado
      </li>

      <li
        v-for="item in resultados"
        :key="item"
        class="suggestion-item"
        @click="query = item; mostrarSugestoes = false"
      >
        {{ item }}
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
}

.search-suggestions {
  position: absolute;

  top: calc(100% + 6px);
  left: 0;
  right: 0;

  list-style: none;

  background: white;

  border: 1px solid #e5e7eb;
  border-radius: 10px;

  overflow: hidden;
}

.suggestion-item {
  padding: 10px 14px;
  cursor: pointer;
}

.suggestion-item:hover {
  background: #f3f4f6;
}

.suggestion-empty {
  padding: 14px;
  text-align: center;
  color: #9ca3af;
}
</style>

