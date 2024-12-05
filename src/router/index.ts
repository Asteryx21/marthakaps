import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import HomeView from '../views/HomeView.vue'
// @ts-ignore
import About from '../views/About.vue'
// @ts-ignore
import Contact from '../views/Contact.vue'
// @ts-ignore
import ProjectA from '../views/ProjectA.vue'
// @ts-ignore
import ProjectB from '@/views/ProjectB.vue'
// @ts-ignore
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
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
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
