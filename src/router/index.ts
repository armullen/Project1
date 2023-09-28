import {createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import AllDogs from "../views/all-dogs/index.vue";
import Bachelors from '../views/boys/bachelors.vue'
import Bachelorettes from '../views/girls/bachelorettes.vue'
import SignUpForm from '../views/SignUpForm.vue'
import DetailPage from '../views/DetailPage.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/all-dogs',
        name: 'All Dogs',
        component: AllDogs
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
    },
    {
        path: '/:id',
        name: 'DetailPage',
        component: DetailPage
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

    export default router; 