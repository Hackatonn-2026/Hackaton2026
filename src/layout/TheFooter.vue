<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-brand">
        <div class="brand-header">
          <img src="@/assets/aidentro.jpg" alt="Ciro Lancers" class="logo-img" />
          <span class="brand-name">Ciro Lancers</span>
        </div>
        <p class="brand-desc">
          Conectando profissionais talentosos com clientes que precisam de
          serviços de qualidade.
        </p>
      </div>

      <div class="footer-column">
        <h3>Empresa</h3>
        <ul>
          <li><a href="#">Sobre Nós</a></li>
          <li><a href="#">Como Funciona</a></li>
          <li><a href="#">Categorias</a></li>
          <li><a href="#">Planos Premium</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>Suporte</h3>
        <ul>
          <li><a href="#">Central de Ajuda</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Termos de uso</a></li>
          <li><a href="#">Política de Privacidade</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>Redes Sociais</h3>
        <div class="social-icons">
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>

    <hr class="footer-divider" />

    <p class="footer-copy">© 2026 CiroLancers Todos os direitos reservados.</p>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1e3a8a, #1e40af);
  border: 1px solid #3b82f6;
  border-radius: 12px;
  padding: 40px 60px 20px;
  color: #ffffff;
  font-family: Arial, sans-serif;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
}

.footer-brand {
  max-width: 280px;
}

.brand-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.logo-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.brand-name {
  font-size: 18px;
  font-weight: bold;
}

.brand-desc {
  font-size: 13px;
  color: #d1d9f0;
  line-height: 1.5;
}

.footer-column h3 {
  font-size: 16px;
  margin-bottom: 15px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column li {
  margin-bottom: 10px;
}

.footer-column a {
  color: #d1d9f0;
  text-decoration: none;
  font-size: 13px;
}

.footer-column a:hover {
  color: #ffffff;
}

.social-icons {
  display: flex;
  gap: 12px;
}

.social-icons a {
  color: #ffffff;
  font-size: 16px;
}

.footer-divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin: 30px 0 15px;
}

.footer-copy {
  text-align: center;
  font-size: 12px;
  color: #d1d9f0;
}
</style>