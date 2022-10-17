import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  { name: 'home', path: '/', component: () => import('../views/home/Home.vue') },
  { name: 'about', path: '/about', component: () => import('../views/about/About.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router