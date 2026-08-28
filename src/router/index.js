import { ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { useUsuarioStore } from '@/stores/usuario'

import Home from '../views/Inicio.vue'
import Login from '../views/Login.vue'
import CadastroCliente from '../views/CadastroCliente.vue'
import CadastroFreelancer from '../views/CadastroFreelancer.vue'
import Categorias from '../views/Categorias.vue'
import Busca from '../views/Busca.vue'
import PerfilFreelancer from '../views/PerfilFreelancer.vue'
import EditarPerfil from '../views/EditarPerfilView.vue'
import SolicitarServico from '../views/SolicitarServico.vue'
import Pagamento from '../views/Pagamento.vue'
import DashboardCliente from '../views/PainelCliente.vue'
import DashboardFreelancer from '../views/PainelFreelancer.vue'
import PerfilPublico from '../views/PerfilPublicoView.vue'
import Sobre from '../views/Sobre.vue'
import Suporte from '../views/Suporte.vue'
import ComoFunciona from '../views/ComoFunciona.vue'
import EsqueciSenha from '../views/EsqueciSenha.vue'

export const carregandoRota = ref(false)
const duracaoMinimaLoading = 300
let temporizadorOcultar = null
let inicioCarregamento = 0

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login },
  { path: '/cadastro-cliente', name: 'cadastro-cliente', component: CadastroCliente },
  { path: '/cadastro-freelancer', name: 'cadastro-freelancer', component: CadastroFreelancer },
  { path: '/categorias', name: 'categorias', component: Categorias },
  { path: '/buscar', name: 'buscar', component: Busca },
  { path: '/perfil/:id', name: 'perfil-publico', component: PerfilPublico },
  { path: '/perfil-freelancer/:id?', name: 'perfil-freelancer', component: PerfilFreelancer },
  { path: '/solicitar', name: 'solicitar', component: SolicitarServico },
  { path: '/pagamento', name: 'pagamento', component: Pagamento },
  { path: '/dashboard-cliente', name: 'dashboard-cliente', component: DashboardCliente },
  { path: '/dashboard-freelancer', name: 'dashboard-freelancer', component: DashboardFreelancer },
  { path: '/sobre', name: 'sobre', component: Sobre },
  { path: '/suporte', name: 'suporte', component: Suporte },
  { path: '/como-funciona', name: 'como-funciona', component: ComoFunciona },
  { path: '/esqueci-senha', name: 'esqueci-senha', component: EsqueciSenha },
  { path: '/editar-perfil', name: 'editar-perfil', component: EditarPerfil },
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
