import './assets/base.css'
import './assets/css/typography.css'
import './components/CustomScrollbar.vue'
import './components/Navbar.vue'
import './components/LanguageSelector.vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
