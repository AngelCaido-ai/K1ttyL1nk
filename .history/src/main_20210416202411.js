import Vue from 'vue'
import App from './App.vue'
import './assets/styles/styles.scss'
import store from './vuex/store'
import router from "./router/router"
import { BootstrapVue } from 'bootstrap-vue'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(axios)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
