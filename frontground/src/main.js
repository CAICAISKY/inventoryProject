import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/reset.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
