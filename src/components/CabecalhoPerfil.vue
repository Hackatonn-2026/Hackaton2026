<script setup>
defineProps({
  name: String,
  title: String,
  avatar: String,
  verified: Boolean,
  rating: Number,
  reviewsCount: Number,
  location: String,
  completedProjects: Number,
  showEdit: Boolean,
  allowRequest: {
    type: Boolean,
    default: true,
  },
})

defineEmits(['request-quote', 'schedule-call', 'toggle-favorite', 'share'])
</script>

<template>
  <section class="profile-header">
    <div class="header-container">
      <img :src="avatar" :alt="name" class="avatar" />

      <div class="info-container">
        <div class="name-row">
          <h1 class="name">{{ name }}</h1>
          <RouterLink v-if="showEdit" to="/editar-perfil" class="edit-profile-link">
            Editar Perfil
          </RouterLink>
          <svg v-if="verified" class="verified-icon" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <p class="headline">{{ title }}</p>

        <div class="meta-row">
          <div class="meta-item">
            <span class="star">★</span>
            <strong>{{ rating }}</strong>
            <span>({{ reviewsCount }} avaliações)</span>
          </div>

          <div class="meta-item">
            <svg class="meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            {{ location }}
          </div>

          <div class="meta-item">
            <svg class="meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
            </svg>
            {{ completedProjects }} projetos concluídos
          </div>
        </div>

        <div class="actions-row">
          <button
            class="btn-primary"
            :disabled="!allowRequest"
            @click="$emit('request-quote')"
          >
            <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.8L3 20l1.3-3.9A7.96 7.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            Solicitar Orçamento
          </button>

          <button class="btn-secondary" @click="$emit('schedule-call')">
            <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            Agendar Conversa
          </button>

          <button class="btn-icon-only" @click="$emit('toggle-favorite')">
            <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </button>

          <button class="btn-icon-only" @click="$emit('share')">
            <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342a3 3 0 100-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.368-2.684 3 3 0 00-5.368 2.684zm0 6a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile-header {
  background-color: #2563eb;
  color: #ffffff;
  padding: 40px 24px;
}

.header-container {
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  gap: 28px;
}

.avatar {
  width: 140px;
  height: 140px;
  border-radius: 16px;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
}

.info-container {
  flex: 1;
}

.name-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.name {
  font-size: 30px;
  font-weight: bold;
  margin: 0;
  color: #ffffff;
}

.edit-profile-link {
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.75);
  padding: 7px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
}

.verified-icon {
  width: 24px;
  height: 24px;
  color: #93c5fd;
}

.headline {
  font-size: 17px;
  color: #dbeafe;
  margin: 4px 0 0 0;
}

.meta-row {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 14px;
  font-size: 14px;
  color: #e0e7ff;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.star {
  color: #facc15;
}

.meta-icon {
  width: 16px;
  height: 16px;
  opacity: 0.85;
}

.actions-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
}

.btn-primary {
  background-color: #ffffff;
  color: #2563eb;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.2s ease;
}

.btn-primary:hover {
  background-color: #f3f4f6;
}

.btn-primary:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.btn-secondary {
  background-color: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.2s ease;
}

.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.btn-icon-only {
  background-color: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
}

.btn-icon-only:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.btn-icon {
  width: 18px;
  height: 18px;
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .meta-row, .actions-row {
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>