<script setup>
import { reactive } from 'vue'
const opcoesPreco = ['Até R$ 50', 'R$ 50 - R$ 100', 'R$ 100 - R$ 200', 'Acima de R$ 200']
const opcoesAvaliacao = [5, 4, 3]
const filtros = reactive({
  localizacao: '',
  precos: [],
  avaliacoes: [],
  disponivelAgora: false,
  apenasVerificados: false
})

function limparFiltros() {
  filtros.localizacao = ''
  filtros.precos = []
  filtros.avaliacoes = []
  filtros.disponivelAgora = false
  filtros.apenasVerificados = false
}
</script>

<template>
  <section class="filter-sidebar">
    <h2>Filtros</h2>

    <form @submit.prevent>
      <label class="field-label" for="localizacao">Localização</label>
      <input id="localizacao" v-model="filtros.localizacao" class="location-input" type="text" placeholder="Cidade ou estado">

      <fieldset>
        <legend>Preço por hora</legend>
        <label v-for="opcao in opcoesPreco" :key="opcao" class="check-label">
          <input v-model="filtros.precos" type="checkbox" :value="opcao">
          <span>{{ opcao }}</span>
        </label>
      </fieldset>

      <fieldset>
        <legend>Avaliação</legend>
        <label v-for="nota in opcoesAvaliacao" :key="nota" class="check-label rating-label">
          <input v-model="filtros.avaliacoes" type="checkbox" :value="nota">
          <span class="stars">{{ '★'.repeat(nota) }}</span>
          <span>ou mais</span>
        </label>
      </fieldset>

      <label class="check-label extra-filter">
        <input v-model="filtros.disponivelAgora" type="checkbox">
        <span>Disponível agora</span>
      </label>
      <label class="check-label extra-filter">
        <input v-model="filtros.apenasVerificados" type="checkbox">
        <span>Apenas verificados</span>
      </label>

      <button type="button" @click="limparFiltros">Limpar Filtros</button>
    </form>
  </section>
</template>

<style scoped>
.filter-sidebar {
  width: 256px;
  padding: 26px 24px 24px;
  border: 1px solid #e1e4e8;
  border-radius: 14px;
  background: #fff;
  color: #344054;
  box-shadow: 0 2px 4px rgba(16, 24, 40, .08);
  box-sizing: border-box;
}

h2 {
  margin: 0 0 20px;
  color: #1d2939;
  font-size: 18px;
}

.field-label,
legend {
  display: block;
  margin-bottom: 9px;
  color: #475467;
  font-size: 14px;
  font-weight: 600;
}

.location-input {
  width: 100%;
  height: 42px;
  padding: 0 12px;
  border: 1px solid #cfd5df;
  border-radius: 9px;
  box-sizing: border-box;
  font-size: 14px;
}

fieldset {
  margin: 26px 0 0;
  padding: 0;
  border: 0;
}

.check-label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 12px 0;
  font-size: 14px;
}

.check-label input {
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: #344054;
}

.rating-label {
  gap: 5px;
}

.stars {
  color: #fdbb05;
  font-size: 18px;
  letter-spacing: -2px;
}

.extra-filter {
  margin-top: 25px;
}

button {
  width: 100%;
  height: 40px;
  margin-top: 26px;
  border: 0;
  border-radius: 9px;
  background: #f1f2f4;
  color: #1d2939;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}
</style>
