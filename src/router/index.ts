import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// @ts-ignore
import ProjectA from '../views/ProjectA.vue'
import ProjectB from '@/views/ProjectB.vue'
import ProjectC from '@/views/ProjectC.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/project-1',
      name: 'project-1',
      component: ProjectA,
    },
    {
      path: '/project-2',
      name: 'project-2',
      component: ProjectB,
    },
    {
      path: '/project-3',
      name: 'project-3',
      component: ProjectC,
    },
  ],
})

export default router
