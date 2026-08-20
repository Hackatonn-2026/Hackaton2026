<script setup>
defineProps({
  professional: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['verPerfil'])

function getInitials(name) {
  return name
    .split(' ')
    .map(n => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

// profisório antes de termos as fotos
function getColor(name) {
  const colors = [
    'linear-gradient(135deg, #667eea, #764ba2)',
    'linear-gradient(135deg, #f093fb, #f5576c)',
    'linear-gradient(135deg, #4facfe, #00f2fe)',
    'linear-gradient(135deg, #43e97b, #38f9d7)',
    'linear-gradient(135deg, #fa709a, #fee140)',
    'linear-gradient(135deg, #30cfd0, #330867)',
  ]
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash)
  return colors[Math.abs(hash) % colors.length]
}
</script>

<template>
  <div class="card">
    <div class="card-avatar" :style="{ background: getColor(professional.name) }">
      {{ getInitials(professional.name) }}
    </div>

    <div class="card-body">
      <h3 class="card-name">{{ professional.name }}</h3>
      <p class="card-role">{{ professional.role }}</p>

      <div class="card-meta">
        <span class="card-rating">
          <span class="star">★</span>
          <strong>{{ professional.rating }}</strong>
          <span class="reviews">({{ professional.reviews }})</span>
        </span>
        <span class="card-price">R$ {{ professional.price }}<small>/h</small></span>
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
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  max-width: 280px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
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
  margin: 0 0 14px;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 0.9rem;
}

.card-rating {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #444;
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
  font-size: 1rem;
}

.card-price small {
  font-weight: 500;
  color: #6b7280;
  font-size: 0.75rem;
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
</style>