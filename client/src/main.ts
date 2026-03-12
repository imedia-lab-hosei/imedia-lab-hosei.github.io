import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ui from '@nuxt/ui/vue-plugin'
import i18n from '@/locales'

import './assets/base.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ui)
app.use(i18n)

app.mount('#app')
