<template>
  <div class="social">
    <div class="divider">
      <span>Ou continue com</span>
    </div>

    <div class="social-buttons">
      <button type="button" class="social-btn" @click="$emit('google')">
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path
            fill="#4285F4"
            d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47a5.54 5.54 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.57-5.17 3.57-8.82Z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.88-3c-1.08.73-2.46 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.95H1.26v3.1A12 12 0 0 0 12 24Z"
          />
          <path
            fill="#FBBC05"
            d="M5.27 14.29a7.2 7.2 0 0 1 0-4.58v-3.1H1.26a12 12 0 0 0 0 10.78l4.01-3.1Z"
          />
          <path
            fill="#EA4335"
            d="M12 4.75c1.76 0 3.34.6 4.58 1.79l3.44-3.44C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.26 6.61l4.01 3.1C6.22 6.86 8.87 4.75 12 4.75Z"
          />
        </svg>
        Google
      </button>

      <button type="button" class="social-btn" @click="$emit('facebook')">
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path
            fill="#1877F2"
            d="M24 12a12 12 0 1 0-13.88 11.85v-8.38H7.08V12h3.04V9.36c0-3 1.79-4.66 4.53-4.66 1.31 0 2.68.24 2.68.24v2.95h-1.51c-1.49 0-1.95.92-1.95 1.87V12h3.32l-.53 3.47h-2.79v8.38A12 12 0 0 0 24 12Z"
          />
        </svg>
        Facebook
      </button>
    </div>
  </div>
</template>

<script setup>
defineEmits(['google', 'facebook'])
</script>

<style scoped>
.divider {
  position: relative;
  text-align: center;
  margin: 24px 0 20px;
}

.divider::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  border-top: 1px solid #e2e5ea;
}

.divider span {
  position: relative;
  background: #ffffff;
  padding: 0 12px;
  font-size: 13px;
  color: #9aa1ac;
}

.social-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 11px;
  border-radius: 10px;
  border: 1px solid #e2e5ea;
  background: #ffffff;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.social-btn:hover {
  background: #f9fafb;
}
</style>