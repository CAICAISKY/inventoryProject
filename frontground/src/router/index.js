import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import MainOne from '@/pages/main/components/One'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'one',
          name: 'One',
          component: MainOne
        }
      ]
    }
  ]
})
