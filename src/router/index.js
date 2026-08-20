import { ref } from 'vue'
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
import EsqueciSenha from '../views/EsqueciSenhaView.vue'

export const carregandoRota = ref(false)
const duracaoMinimaLoading = 300
let temporizadorOcultar = null
let inicioCarregamento = 0

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
  { path: '/suporte', component: Suporte },
  { path: '/esqueci-senha', component: EsqueciSenha },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }

    return { top: 0 }
  },
})

router.beforeEach(() => {
  window.clearTimeout(temporizadorOcultar)
  inicioCarregamento = Date.now()
  carregandoRota.value = true
})

router.afterEach(() => {
  const tempoRestante = Math.max(0, duracaoMinimaLoading - (Date.now() - inicioCarregamento))

  temporizadorOcultar = window.setTimeout(() => {
    carregandoRota.value = false
  }, tempoRestante)
})

router.onError(() => {
  window.clearTimeout(temporizadorOcultar)
  carregandoRota.value = false
})

export default router
