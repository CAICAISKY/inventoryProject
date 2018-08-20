import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import MainOne from '@/pages/main/components/One'
import MainTwo from '@/pages/main/components/Two'
import MainThree from '@/pages/main/components/Three'

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
        }, {
          path: 'two',
          name: 'Two',
          component: MainTwo
        }, {
          path: 'three',
          name: 'Three',
          component: MainThree
        }
      ]
    }
  ]
})
