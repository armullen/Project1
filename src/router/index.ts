import {createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import AllDogs from "../views/all-dogs/index.vue";
import Bachelors from '../views/boys/Bachelors.vue'
import Bachelorettes from '../views/girls/Bachelorettes.vue'
import SignUpForm from '../views/SignUpForm.vue'
import DetailPage from '../views/DetailPage.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/dogs',
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
        path: '/dogs/:id',
        name: 'DetailPage',
        component: DetailPage,
        props: true
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router; 