<!-- a page for each individual dog to show information when hyperlink name is clicked on all dogs or girls and boys page, will also have a contact button and favorites button that will save as a favorite in a seperate array -->

<template>
    <div>
        <p>
            Hello, my name is {{ Dog.name }} and I am a {{ Dog.breed }}. I am {{ Dog.age }} years old.
        </p> 
        <button>Add {{ Dog.name }} to my favorites</button>     
        <button>Contact my humans</button>     
    </div>
        
</template>

<script setup lang="ts">
import  Dog  from '../components/dogs.vue';
// import { computed } from 'vue';
// import { useRoute } from 'vue-router';

//     setup() {
//         const route = useRoute();
//         const id = computed(() => route.params.id);
//    return { id }
//     }



</script>

<style>

</style>