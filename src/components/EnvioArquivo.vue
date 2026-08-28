<template>
  <div class="file-upload">
    <label v-if="label" class="file-upload__label">
      {{ label }}
    </label>

    <label
      class="file-upload__dropzone"
      :class="{
        'file-upload__dropzone--dragging': isDragging
      }"
      @dragover.prevent="isDragging = true"
      @dragleave.prevent="isDragging = false"
      @drop.prevent="onDrop"
    >
      <input
        type="file"
        class="file-upload__input"
        :accept="accept"
        @change="onChange"
      />

      <svg
        class="file-upload__icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>

      <p class="file-upload__text">
        <template v-if="fileName">
          {{ fileName }}
        </template>

        <template v-else>
          Clique para fazer upload ou arraste a imagem
        </template>
      </p>

      <p class="file-upload__hint">
        {{ hint }}
      </p>
    </label>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: ''
  },

  hint: {
    type: String,
    default: 'PNG, JPG até 5MB'
  },

  accept: {
    type: String,
    default: 'image/*'
  },

  file: {
    type: File,
    default: null
  }
})

const emit = defineEmits(['update:file'])

const isDragging = ref(false)
const fileName = ref('')

function setFile(file) {
  if (!file) {
    return
  }

  const aceitaPdf = props.accept.includes('application/pdf')
  const arquivoValido = aceitaPdf ? file.type === 'application/pdf' : file.type.startsWith('image/')

  if (!arquivoValido) {
    alert(aceitaPdf ? 'Por favor, selecione um PDF válido.' : 'Por favor, selecione uma imagem válida.')
    return
  }

  // Limita o arquivo a 5 MB.
  const tamanhoMaximo = 5 * 1024 * 1024

  if (file.size > tamanhoMaximo) {
    alert('A imagem deve ter no máximo 5MB.')
    return
  }

  fileName.value = file.name

  emit('update:file', file)
}

function onChange(event) {
  const file = event.target.files?.[0]

  setFile(file)
}

function onDrop(event) {
  isDragging.value = false

  const file = event.dataTransfer.files?.[0]

  setFile(file)
}
</script>

<style scoped>
.file-upload {
  width: 100%;
}

.file-upload__label {
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 8px;
}

.file-upload__dropzone {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 6px;
  padding: 28px 16px;
  border: 1.5px dashed #d1d5db;
  border-radius: 10px;
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    background 0.15s ease;
}

.file-upload__dropzone:hover,
.file-upload__dropzone--dragging {
  border-color: #3b5bfd;
  background: #f5f7ff;
}

.file-upload__input {
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
}

.file-upload__icon {
  width: 22px;
  height: 22px;
  color: #9ca3af;
}

.file-upload__text {
  margin: 0;
  font-size: 14px;
  color: #3b5bfd;
  font-weight: 600;
}

.file-upload__hint {
  margin: 0;
  font-size: 12px;
  color: #9ca3af;
}
</style>
