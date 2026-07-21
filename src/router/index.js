import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import CadastroCliente from '../views/CadastroClienteView.vue'
import CadastroFreelancer from '../views/CadastroFreelancerView.vue'
import Categorias from '../views/CategoriasView.vue'
import Busca from '../views/BuscaView.vue'
import PerfilFreelancer from '../views/PerfilFreelancerView.vue'
import SolicitarServico from '../views/SolicitarServicoView.vue'
import Pagamento from '../views/PagamentoView.vue'
import DashboardCliente from '../views/DashboardClienteView.vue'
import DashboardFreelancer from '../views/DashboardFreelancerView.vue'
import Sobre from '../views/SobreView.vue'
import Suporte from '../views/SuporteView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/cadastro-cliente', component: CadastroCliente },
  { path: '/cadastro-freelancer', component: CadastroFreelancer },
  { path: '/categorias', component: Categorias },
  { path: '/buscar', component: Busca },
  { path: '/perfil/:id', component: PerfilFreelancer },
  { path: '/solicitar', component: SolicitarServico },
  { path: '/pagamento', component: Pagamento },
  { path: '/dashboard-cliente', component: DashboardCliente },
  { path: '/dashboard-freelancer', component: DashboardFreelancer },
  { path: '/sobre', component: Sobre },
  { path: '/suporte', component: Suporte }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
