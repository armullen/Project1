<!-- a page for each individual dog to show information when hyperlink name is clicked on all dogs or girls and boys page, will also have a contact button and favorites button that will save as a favorite in a seperate array -->

<template>
    <div>
        <h1>Detail Page</h1>
        <p>   
            {{ dogs.name }}
        </p>
    </div>
        
</template>

<script setup lang="ts">
import dogs from "../components/dogs.vue";


const dog = {
    props: ['id', 'name'],
    template: '<div>dog {{ id }}, {{ name }} </div>',
}

const routes = [
    { path: '/:id', component: dog, props: true }
]

</script>

<style>
</style>