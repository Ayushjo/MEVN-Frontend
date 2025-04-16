import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import AboutView from '@/views/AboutView.vue'
import SinglepostView from '@/views/SinglepostView.vue'
import DashboardView from '@/views/DashboardView.vue'
import CreatePostView from '@/views/CreatePostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomeView,
    },
    {
      name: 'login',
      path: '/login',
      component: LoginView,
    },
    {
      name: 'signup',
      path: '/signup',
      component: SignupView,
    },
    {
      name: 'about',
      path: '/about',
      component: AboutView,
    },
    {
      name: 'blogbyid',
      path: '/blog/:id',
      component: SinglepostView,
    },
    { name: 'dashboard', path: '/dashboard/:userid', component: DashboardView },
    {name:"createpost",path:"/createpost/:userid",component:CreatePostView}
  ],
})

export default router
