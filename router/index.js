import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/trends',
    name: 'trends',
    component: () => import( '../views/TrendsView.vue')
  },
  
  {
    path: '/brands',
    name: 'brands',
    component: () => import( '../views/BrandsView.vue')
  },
  {
    path: '/mens',
    name: 'mens',
    component: () => import( '../views/MensView.vue')
  },
  {
    path: '/womens',
    name: 'womens',
    component: () => import( '../views/WomensView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
