<script setup>
import SkillTag from './EtiquetaHabilidade.vue'
import ExperienceItem from './ItemExperiencia.vue'

defineProps({
  bio: String,
  skills: Array,
  experiences: Array,
})
</script>

<template>
  <div class="about-container">
    <section class="section">
      <h3 class="section-title">Sobre Mim</h3>
      <p class="bio-text">{{ bio }}</p>
    </section>

    <section class="section">
      <h3 class="section-title">Especialidades</h3>
      <div class="skills-grid">
        <SkillTag v-for="skill in skills" :key="skill" :label="skill" />
      </div>
    </section>

    <section class="section">
      <h3 class="section-title">Experiência</h3>
      <div class="experiences-list">
        <ExperienceItem
          v-for="(exp, i) in experiences"
          :key="i"
          :role="exp.role"
          :company="exp.company"
          :period="exp.period"
          :description="exp.description"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.section-title {
  font-size: 17px;
  font-weight: bold;
  color: #111827;
  margin: 0 0 12px 0;
}

.bio-text {
  font-size: 14px;
  color: #4b5563;
  line-height: 1.6;
  margin: 0;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.experiences-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
