<script setup>
defineProps({
  professional: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['verPerfil'])
</script>

<template>
  <div class="card">
    <img :src="professional.avatar" :alt="professional.name" class="card-avatar" />

    <div class="card-body">
      <h3 class="card-name">{{ professional.name }}</h3>
      <p class="card-role">{{ professional.role }}</p>

      <div class="card-meta">
        <span class="card-rating">
          ⭐ <strong>{{ professional.rating }}</strong> ({{ professional.reviews }})
        </span>
        <span class="card-price">R$ {{ professional.price }}/h</span>
      </div>

      <button class="card-button" @click="emit('verPerfil', professional)">
        Ver Perfil
      </button>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  max-width: 280px;
}

.card-avatar {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.card-body {
  padding: 16px;
}

.card-name {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 4px;
  color: #111;
}

.card-role {
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 12px;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 0.9rem;
}

.card-rating {
  color: #444;
}

.card-price {
  color: #2563eb;
  font-weight: 700;
}

.card-button {
  width: 100%;
  background: #2563eb;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.card-button:hover {
  background: #1d4ed8;
}
</style>