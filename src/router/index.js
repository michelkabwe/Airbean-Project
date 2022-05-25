import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/OurCoffee',
    name: 'OurCoffee',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/OurCoffee.vue')
  },
  {
    path: '/KaffeMeny',
    name: 'KaffeMeny',

    component: () => import(/* webpackChunkName: "about" */ '../views/KaffeMeny.vue')
  },
  {
    path: '/Order',
    name: 'Order',

    component: () => import(/* webpackChunkName: "about" */ '../views/Order.vue')
  },
  {
    path: '/OrderDelivery',
    name: 'OrderDelivery',

    component: () => import(/* webpackChunkName: "about" */ '../views/OrderDelivery.vue')
  },
    {
    path: '/NavDropDown',
    name: 'NavDropDown',

    component: () => import(/* webpackChunkName: "about" */ '../views/NavDropDown.vue')
  },
  {
    path: '/Profil',
    name: 'Profil',

    component: () => import(/* webpackChunkName: "about" */ '../views/Profil.vue')
  },
  {
    path: '/OrderHist',
    name: 'OrderHist',

    component: () => import(/* webpackChunkName: "about" */ '../views/OrderHist.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
