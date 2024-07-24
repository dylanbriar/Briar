import {createRouter, createWebHistory} from 'vue-router';
import LandingPage from '../components/LandingPage.vue';
import AboutMe from '../components/AboutMe.vue'
import Blog from '../components/Blog.vue'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/about',
    name: 'AboutMe',
    component: AboutMe
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router