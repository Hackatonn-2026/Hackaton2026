import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BaseButton from './components/Botao.vue'

const app = createApp(App)

console.log('VUE APP: mounting...')

app.component('BaseButton', BaseButton)
app.use(router)

app.mount('#app')
