<!-- a page for each individual dog to show information when hyperlink name is clicked on all dogs or girls and boys page, will also have a contact button and favorites button that will save as a favorite in a seperate array -->

<template>
    <div>
    
        <p>   
            Hey!  My name is {{ dog.name }}!
        </p>
    </div>
        
</template>


<script setup lang="ts">
import dogDetail from "../components";  
import { defineProps } from "vue";


const props = defineProps({
    name: {
        type: String
    }
})
console.log(props)

const dog = {
    props: ['id', 'name', 'gender', 'age', 'breed'],
    template: '<div>dog {{ id }}, {{ name }} </div>',
}
console.log(dog)

const routes = [
    { path: '/:id', component: dog, props: true }
]
console.log(routes)
</script>

<style>
</style>