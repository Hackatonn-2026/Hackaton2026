import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import CadastroCliente from '../views/CadastroCliente.vue'
import CadastroFreelancer from '../views/CadastroFreelancer.vue'
import Categorias from '../views/Categorias.vue'
import Busca from '../views/Busca.vue'
import PerfilFreelancer from '../views/PerfilFreelancer.vue'
import SolicitarServico from '../views/SolicitarServico.vue'
import Pagamento from '../views/Pagamento.vue'
import DashboardCliente from '../views/DashboardCliente.vue'
import DashboardFreelancer from '../views/DashboardFreelancer.vue'
import Sobre from '../views/Sobre.vue'
import Suporte from '../views/Suporte.vue'

const routes = [

{ path:'/', component:Home },

{ path:'/login', component:Login },

{ path:'/cadastro-cliente', component:CadastroCliente },

{ path:'/cadastro-freelancer', component:CadastroFreelancer },

{ path:'/categorias', component:Categorias },

{ path:'/buscar', component:Busca },

{ path:'/perfil/:id', component:PerfilFreelancer },

{ path:'/solicitar', component:SolicitarServico },

{ path:'/pagamento', component:Pagamento },

{ path:'/dashboard-cliente', component:DashboardCliente },

{ path:'/dashboard-freelancer', component:DashboardFreelancer },

{ path:'/sobre', component:Sobre },

{ path:'/suporte', component:Suporte }

]

export default createRouter({

history:createWebHistory(),

routes

})