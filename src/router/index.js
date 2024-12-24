import { createRouter, createWebHistory } from 'vue-router'
import JanpathHome from '@/views/JanpathHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: JanpathHome
    }
  ],
})

export default router
