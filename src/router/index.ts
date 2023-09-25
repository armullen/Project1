import {createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Bachelors from '../views/Boys/Bachelors.vue'
import Bachelorettes from '../views/Girls/Bachelorettes.vue'
import SignUpForm from '../components/SignUpForm.vue'

const routes: Array<RouteRecordRaw> = [
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
        path: '/bachelors',
        name: 'Bachelors',
        component: Bachelors
    },
    {
        path: '/bachelorettes',
        name: 'Bachelorettes',
        component: Bachelorettes
    },
    {
        path: '/signup',
        name: 'Signup',
        component: SignUpForm
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

    export default router; 