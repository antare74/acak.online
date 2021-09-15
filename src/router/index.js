import { createRouter, createWebHistory } from 'vue-router'
const Home  = () => import ('../views/pages/home/Home.vue')
const About = () => import ('../views/pages/about/About.vue')
const Blog  = () => import ('../views/pages/blog/Blog.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
