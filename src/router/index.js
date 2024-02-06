import { createRouter, createWebHistory } from 'vue-router'
import TeamViewVue from '@/views/TeamView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'team',
      component: TeamViewVue
    }
  ]
})

export default router
