<template>
  <nav class="nav-links">
    <RouterLink to="/" class="nav-link">Home</RouterLink>
    <RouterLink to="/buscar" class="nav-link">Buscar</RouterLink>
    <RouterLink to="/categorias" class="nav-link">Categorias</RouterLink>
    <RouterLink to="/login" class="nav-link login-link">Login</RouterLink>
  </nav>
</template>

<style scoped>
.nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-link {
  color: #4b5563;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #2563eb;
}

.login-link {
  background: #2563eb;
  color: #fff;
  padding: 9px 18px;
  border-radius: 8px;
  font-weight: bold;
}

.login-link:hover {
  background: #1d4ed8;
  color: #fff;
}
</style>
