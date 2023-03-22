import Home from '@/pages/Home.vue';
import IdentificationPage from '@/pages/IdentificationPage.vue';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/identification',
    component: IdentificationPage,
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
