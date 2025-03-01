import {createRouter, createWebHistory} from 'vue-router';
import LandingPage from '../components/LandingPage.vue';
import AboutMe from '../components/AboutMe.vue'
import Blog from '../components/Blog/Blog.vue'
import Portfolio from '../components/Portfolio.vue';
import Honesty from '../components/Blog/blogs/Misc./Honesty.vue';
import Cauthionary from '../components/Blog/blogs/Misc./Cauthionary.vue';

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
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/honesty',
    name: 'Honesty',
    component: Honesty
  },
  {
    path: '/cauthionary',
    name: 'Cauthionary',
    component: Cauthionary,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router