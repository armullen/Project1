<!-- a page for each individual dog to show information when hyperlink name is clicked on all dogs or girls and boys page, will also have a contact button and favorites button that will save as a favorite in a seperate array -->

<template>
           <h1>
               Dog {{ $route.params.id }} Detail Page 
            </h1> 
     
    
</template>

<script setup lang="ts">
   
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const queryDog = ref({})
const isLoading = ref(true)
const route = useRoute()

onMounted(async () => {
    const response = await fetch(`http://localhost:5173/${route.params.id}`)
    queryDog.value = response()
    isLoading.value = false
})


</script>

<style>

</style>