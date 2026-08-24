<template>
  <div>
    <!-- Resumo geral com a nota média -->
    <div class="resumo">
      <h2 class="nota-media">{{ profissional.rating }}</h2>
      <p class="estrelas">{{ estrelasTexto(profissional.rating) }}</p>
      <p class="total">Baseado em {{ profissional.reviewsCount }} avaliações</p>
    </div>

    <!-- Lista com cada avaliação -->
    <div class="lista">
      <div
        v-for="avaliacao in profissional.reviews"
        :key="avaliacao.id"
        class="avaliacao"
      >
        <div class="topo">
          <strong class="autor">{{ avaliacao.author }}</strong>
          <span class="data">{{ avaliacao.date }}</span>
        </div>
        <p class="estrelas">{{ estrelasTexto(avaliacao.rating) }}</p>
        <p class="comentario">{{ avaliacao.comment }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AbaAvaliacoes',
  props: {
    profissional: {
      type: Object,
      required: true,
    },
  },
  methods: {
    estrelasTexto(nota) {
      const cheias = Math.round(nota);
      return '★'.repeat(cheias) + '☆'.repeat(5 - cheias);
    },
  },
};
</script>

<style scoped>
.resumo {
  background: #f5f5f5;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
}

.nota-media {
  font-size: 36px;
  margin: 0;
  color: #111827;
}

.estrelas {
  color: #f5b301;
  font-size: 20px;
  margin: 4px 0;
}

.total {
  color: #585d64;
}

.lista {
  margin-top: 20px;
}

.avaliacao {
  border-bottom: 1px solid #eee;
  padding: 16px 0;
}

.topo {
  display: flex;
  justify-content: space-between;
}

.autor {
  color: #111827;
}

.data {
  color: #82858c;
}

.comentario {
  color: #374151;
}
</style>