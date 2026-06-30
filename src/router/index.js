import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'
import CadastroFreelancer from '../views/CadastroFreelancer.vue'
import Categorias from '../views/Categorias.vue'
import Busca from '../views/Busca.vue'
import PerfilFreelancer from '../views/PerfilFreelancer.vue'
import SolicitarServico from '../views/SolicitarServico.vue'
import Chat from '../views/Chat.vue'
import Pagamento from '../views/Pagamento.vue'
import Avaliar from '../views/Avaliar.vue'
import DashboardCliente from '../views/DashboardCliente.vue'
import DashboardFreelancer from '../views/DashboardFreelancer.vue'
import Suporte from '../views/Suporte.vue'
import Sobre from '../views/Sobre.vue'
import Privacidade from '../views/Privacidade.vue'
import Favoritos from '../views/Favoritos.vue'
import Premium from '../views/Premium.vue'
import Notificacoes from '../views/Notificacoes.vue'
import Admin from '../views/Admin.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/cadastro', component: Cadastro },
  { path: '/cadastro-freelancer', component: CadastroFreelancer },
  { path: '/categorias', component: Categorias },
  { path: '/busca', component: Busca },
  { path: '/freelancer/:id', component: PerfilFreelancer },
  { path: '/solicitar/:id', component: SolicitarServico },
  { path: '/chat', component: Chat },
  { path: '/pagamento', component: Pagamento },
  { path: '/avaliar', component: Avaliar },
  { path: '/dashboard-cliente', component: DashboardCliente },
  { path: '/dashboard-freelancer', component: DashboardFreelancer },
  { path: '/suporte', component: Suporte },
  { path: '/sobre', component: Sobre },
  { path: '/privacidade', component: Privacidade },
  { path: '/favoritos', component: Favoritos },
  { path: '/premium', component: Premium },
  { path: '/notificacoes', component: Notificacoes },
  { path: '/admin', component: Admin },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router