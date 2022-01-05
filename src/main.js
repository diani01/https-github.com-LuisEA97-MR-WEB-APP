import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
/* import axios from 'axios' */
import firebase from 'firebase/app'
import 'firebase/analytics'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { init } from 'emailjs-com'
import '../node_modules/vuecidity/dist/lib/vuecidity.min.css'
import VCalendar from 'v-calendar'
import installElementPlus from './plugins/element'

const app = createApp(App).use(store).use(router)

// Use the plugin with optional defaults as 2nd paramter
app.use(VCalendar)
AOS.init()
installElementPlus(app)
init('user_xGDhAZKm9OmBo0DgHfBrX')
app.use(store).use(router).mount('#app')
if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(store.getters.apiKey)
  firebase.analytics()
}
