import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        path : '/' , component : () => import('../views/virtualList1.vue') ,
    } ,
    {
        path: '/timeSlice', component: () => import('../views/timeSlice.vue') , name : 'timeSlice'
    },
    {
        path:'/virtualList', component:()=>import('../views/virtualList.vue'),name:'virtualList'
    }, {
        path : '/index', component: () => import('../views/index.vue') , name:'index'
    }
]

const router = createRouter({
    history : createWebHistory() ,
    routes
})

export default router