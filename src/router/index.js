import Vue from 'vue'
import VueRouter from 'vue-router'
import RelaxClub from '@/views/RelaxClub.vue'


import FoodAndDrink from '../views/FoodAndDrink.vue'
import Calendar from '../views/Calendar.vue'
import Reservations from '../views/Reservations.vue'
import Pictures from '../views/Pictures.vue'
import Paintings from '../views/Paintings.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'RelaxClub',
    component: RelaxClub
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
  
]

const router = new VueRouter({
  routes
})

export default router
