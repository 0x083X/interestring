import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', redirect: '/1' },
    { path: '/1', component: () => import('../views/_1.vue'), name: '1', meta: { id: 1 } },
    { path: '/1.1', component: () => import('../views/_1.1.vue'), name: '1-1', meta: { id: 1 - 1 } },
    { path: '/1.1.1', component: () => import('../views/_1.1.1.vue'), name: '1-1-1', meta: { id: 1 - 1 - 1 } },
    { path: '/1.1.2', component: () => import('../views/_1.1.2.vue'), name: '1-1-2', meta: { id: 1 - 1 - 2 } },
    { path: '/1.2', component: () => import('../views/_1.2.vue'), name: '1-2', meta: { id: 1 - 2 } },
    { path: '/1.3', component: () => import('../views/_1.3.vue'), name: '1-3', meta: { id: 1 - 3 } },
    { path: '/2', component: () => import('../views/_2.vue'), name: '2', meta: { id: 2 } },
    { path: '/2.1', component: () => import('../views/_2.1.vue'), name: '2-1', meta: { id: 2 - 1 } },
    { path: '/3', component: () => import('../views/_3.vue'), name: '3', meta: { id: 3 } },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router