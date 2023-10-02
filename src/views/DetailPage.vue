<!-- a page for each individual dog to show information when hyperlink name is clicked on all dogs or girls and boys page, will also have a contact button and favorites button that will save as a favorite in a seperate array -->

<template>
    <div>
        <p>
            Hello, my name is {{ dog.name }} and I am a {{ dog.breed }}. I am {{ dog.age }} years old.
        </p> 
        <button>Add {{ dog.name }} to my favorites</button>     
        <button>Contact my humans</button>     
    </div>
        
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onBeforeMount } from "vue"
import  dogs  from '../components/dogs.vue';

const dog = ref(null)
const route = useRoute()
const id = route.params.id

onBeforeMount(() => {
    dog.value = dogs.find(dog => dog.id === parseInt(id))
})

</script>

<style>
</style>