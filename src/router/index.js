import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import FoodAndDrink from '../components/FoodAndDrink.vue'
import Calendar from '../components/Calendar.vue'
import Reservations from '../components/Reservations.vue'
import Pictures from '../components/Pictures.vue'
import Paintings from '../components/Paintings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/foodanddrink',
    name: 'FoodAndDrink',
    component: FoodAndDrink
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '/reservations',
    name: 'Reservations',
    component: Reservations
  },
  {
    path: '/picture',
    name: 'Pictures',
    component: Pictures
  },
  {
    path: '/painting',
    name: 'Paintings',
    component: Paintings
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
