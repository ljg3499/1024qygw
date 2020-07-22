import Vue from 'vue'
import VueRouter from 'vue-router'
import New from '../views/new.vue'
import Home from '../views/home.vue'
import Business from '../views/business.vue'
import Join from '../views/join.vue'
import About from '../views/about.vue'
import NewDetail from '../views/newDetail.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/new',
    name: 'new',

    // which is lazy-loaded when the route is visited.
    component: New
  },
  {
    path: '/',
    name: 'home',

    // which is lazy-loaded when the route is visited.
    component: Home
  },
  {
    path: '/business',
    name: 'business',

    // which is lazy-loaded when the route is visited.
    component:Business
  },
  {
    path: '/join',
    name: 'join',

    // which is lazy-loaded when the route is visited.
    component: Join
  },
  {
    path: '/about',
    name: 'about',

    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/newDetail/:id',
    name: 'newDetail',

    // which is lazy-loaded when the route is visited.
    component:NewDetail
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
