import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('../components/Home/Home.vue')
    },
    {
        path: '/category/:id',
        props: true,
        component: () => import('../components/Blogs/BlogList.vue')
    },
    {
        path: '/category/:id/:bid',
        props: true,
        component: () => import('../components/Blogs/BlogContent.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router
