import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/destination/:slug',
      name: 'destination',
      component: () => import('../views/DestinationView.vue'),
      props: true,
      children: [
        {
          path: ':experienceSlug',
          name: 'experience',
          component: () => import('../views/ExperienceView.vue'),
          props: true
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router