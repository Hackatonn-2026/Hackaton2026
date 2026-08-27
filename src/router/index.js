import { createRouter, createWebHistory } from 'vue-router'
import { useUsuarioStore } from '@/stores/usuario'

import Home from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import CadastroCliente from '../views/CadastroClienteView.vue'
import CadastroFreelancer from '../views/CadastroFreelancerView.vue'
import Categorias from '../views/CategoriasView.vue'
import Busca from '../views/BuscaView.vue'
import PerfilFreelancer from '../views/PerfilFreelancer.vue'
import SolicitarServico from '../views/SolicitarServicoView.vue'
import Pagamento from '../views/PagamentoView.vue'
import DashboardCliente from '../views/DashboardClienteView.vue'
import DashboardFreelancer from '../views/DashboardFreelancerView.vue'
import Sobre from '../views/SobreView.vue'
import Suporte from '../views/SuporteView.vue'
import EsqueciSenha from '../views/EsqueciSenhaView.vue'
import EditarPerfil from '../views/EditarPerfilView.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login },
  { path: '/cadastro-cliente', name: 'cadastro-cliente', component: CadastroCliente },
  { path: '/cadastro-freelancer', name: 'cadastro-freelancer', component: CadastroFreelancer },
  { path: '/categorias', name: 'categorias', component: Categorias },
  { path: '/buscar', name: 'buscar', component: Busca },
  { path: '/perfil/:id', name: 'perfil-publico', component: PerfilFreelancer },
  { path: '/perfil-freelancer', name: 'perfil-freelancer', component: PerfilFreelancer },
  { path: '/solicitar', name: 'solicitar', component: SolicitarServico },
  { path: '/pagamento', name: 'pagamento', component: Pagamento },
  { path: '/dashboard-cliente', name: 'dashboard-cliente', component: DashboardCliente },
  { path: '/dashboard-freelancer', name: 'dashboard-freelancer', component: DashboardFreelancer },
  { path: '/sobre', name: 'sobre', component: Sobre },
  { path: '/suporte', name: 'suporte', component: Suporte },
  { path: '/esqueci-senha', name: 'esqueci-senha', component: EsqueciSenha },
  { path: '/editar-perfil', name: 'editar-perfil', component: EditarPerfil }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const { state } = useUsuarioStore()

  const rotasSemLogin = ['login', 'cadastro-cliente', 'cadastro-freelancer']
  const rotasSoLogado = ['editar-perfil', 'dashboard-cliente', 'dashboard-freelancer']

  if (rotasSemLogin.includes(to.name) && state.usuario) {
    next({ name: state.tipoUsuario === 'freelancer' ? 'dashboard-freelancer' : 'dashboard-cliente' })
  } else if (rotasSoLogado.includes(to.name) && !state.usuario) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router