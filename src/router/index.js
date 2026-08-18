import { ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

export const carregandoRota = ref(false)

const duracaoMinimaLoading = 350
let inicioCarregamento = 0
let temporizadorOcultar

const routes = [
  { path: '/', component: () => import('../views/HomeView.vue') },
  { path: '/login', component: () => import('../views/LoginView.vue') },
  { path: '/cadastro-cliente', component: () => import('../views/CadastroClienteView.vue') },
  { path: '/cadastro-freelancer', component: () => import('../views/CadastroFreelancerView.vue') },
  { path: '/categorias', component: () => import('../views/CategoriasView.vue') },
  { path: '/buscar', component: () => import('../views/BuscaView.vue') },
  { path: '/perfil/:id', component: () => import('../views/PerfilFreelancerView.vue') },
  { path: '/solicitar', component: () => import('../views/SolicitarServicoView.vue') },
  { path: '/pagamento', component: () => import('../views/PagamentoView.vue') },
  { path: '/dashboard-cliente', component: () => import('../views/DashboardClienteView.vue') },
  { path: '/dashboard-freelancer', component: () => import('../views/DashboardFreelancerView.vue') },
  { path: '/sobre', component: () => import('../views/SobreView.vue') },
  { path: '/suporte', component: () => import('../views/SuporteView.vue') }
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
