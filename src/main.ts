import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import ui from '@nuxt/ui/vue-plugin'

import 'ant-design-vue/dist/reset.css'
import './assets/base.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ui)

app.use(Antd).mount('#app')
