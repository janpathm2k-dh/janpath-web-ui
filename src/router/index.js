import { createRouter, createWebHistory } from 'vue-router'
import JanpathHome from '@/views/JanpathHome.vue'
import ProductList from '@/views/ProductList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: JanpathHome
    },
    {
      path: '/products',
      name: 'products',
      component: ProductList
    }
  ],
})

export default router
