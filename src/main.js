import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BaseButton from './components/Botao.vue'

const app = createApp(App)

app.component('BaseButton', BaseButton)

app.use(router)
app.mount('#app')
app.use(router)

app.mount('#app')
