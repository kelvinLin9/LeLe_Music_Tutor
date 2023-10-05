import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(/#/),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/HomeView.vue'),
      children: [
        // {
        //   path: '',
        //   name: 'home',
        //   component: () => import('../views/HomePage.vue')
        // },

      ],
    },
    // {
    //   path: '/UserLogin',
    //   name: 'UserLogin',
    //   component: () => import('../views/UserLogin.vue')
    // },
    // {
    //   path: '/admin',
    //   name: 'admin',
    //   component: () => import('../views/admin/AdminView.vue'),
    //   children:[]
    // },
    {
      path: '/:pathMatch(.*)*',
      name: '404Page',
      component: () => import('../views/404Page.vue')
    }
  ]
})


export default router





// history: createWebHistory(import.meta.env.BASE_URL),