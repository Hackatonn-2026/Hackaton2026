<script setup>
import { ref } from 'vue'
import avatarPadrao from '@/assets/icons/avatar.png'

const props = defineProps({
  professional: {
    type: Object,
    required: true
  },
  showCancel: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['verPerfil', 'cancelar'])

const imagemComErro = ref(false)

// Mostra o preço do primeiro serviço.
const precoInicial = props.professional.services?.[0]?.priceRange ?? 'Sob consulta'

const skillsVisiveis = (props.professional.skills || []).slice(0, 3)
</script>

<template>
  <div class="card">
    <div
      class="card-avatar"
    >
      <img
        :src="professional.avatar && !imagemComErro ? professional.avatar : avatarPadrao"
        :alt="professional.name"
        class="avatar-img"
        @error="imagemComErro = true"
      >
    </div>

    <div class="card-body">
      <h3 class="card-name">{{ professional.name }}</h3>
      <p class="card-role">{{ professional.title }}</p>
      <p v-if="professional.location" class="card-location">📍 {{ professional.location }}</p>

      <div v-if="skillsVisiveis.length" class="card-skills">
        <span v-for="skill in skillsVisiveis" :key="skill" class="skill-chip">{{ skill }}</span>
      </div>

      <div class="card-meta">
        <span class="card-rating">
          <span class="star">★</span>
          <strong>{{ professional.rating }}</strong>
          <span class="reviews">({{ professional.reviewsCount }})</span>
        </span>
        <span class="card-price">{{ precoInicial }}</span>
      </div>

      <button class="card-button" @click="emit('verPerfil', professional)">
        Ver Perfil
      </button>
      <button
        v-if="showCancel"
        class="card-cancel-button"
        type="button"
        @click="emit('cancelar', professional)"
      >
        Cancelar pedido
      </button>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  max-width: 280px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  margin: 12px;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.card-avatar {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: 1px;
  overflow: hidden;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  padding: 18px 18px 20px;
}

.card-name {
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0 0 4px;
  color: #111;
}

.card-role {
  font-size: 0.9rem;
  color: #6b7280;
  margin: 0 0 6px;
}

.card-location {
  font-size: 0.8rem;
  color: #9ca3af;
  margin: 0 0 12px;
}

.card-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
}

.skill-chip {
  background: #eff6ff;
  color: #2563eb;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 4px 9px;
  border-radius: 999px;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 0.85rem;
  gap: 8px;
}

.card-rating {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #444;
  flex-shrink: 0;
}

.star {
  color: #facc15;
  font-size: 1rem;
}

.reviews {
  color: #9ca3af;
}

.card-price {
  color: #2563eb;
  font-weight: 700;
  font-size: 0.85rem;
  text-align: right;
}

.card-button {
  width: 100%;
  background: #2563eb;
  color: #fff;
  border: none;
  padding: 11px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.card-button:hover {
  background: #1d4ed8;
}

.card-cancel-button {
  width: 100%;
  margin-top: 8px;
  padding: 9px;
  border: 1px solid #fecaca;
  border-radius: 10px;
  background: #fff;
  color: #dc2626;
  font-weight: 600;
  cursor: pointer;
}

.card-cancel-button:hover {
  background: #fef2f2;
}
</style>
