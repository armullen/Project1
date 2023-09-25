<!-- all the male dogs will be pulled from the main database by the gender field and put here in a list.  You will be able to click on a selector box and add them to a personal database list of your own saved dogs -->

<template>
    <h1>The Boys...</h1>
    <ul>
        <li v-for='dog in dogs' :key="dog.id">
            {{ dog.name }}
        </li>
    </ul>
</template>


<script lang="ts">
import { ref } from 'vue'


interface Dog {
name: string;
age: number;
breed: string;
gender: string;
id: number;
}
    
export default{
        name: 'DogList',
        setup() {
            const dogs = ref<Dog[]>([
                {name: "Spike", age: 5, breed: "Boxer", gender: "Male", id: 1}, 
                {name: "Rex", age: 3, breed: "Poodle", gender: "Male", id: 2},
                {name: "Rover", age: 2, breed: "Bulldog", gender: "Male", id: 3},
            ])
            return {
                dogs
            }
        },
    }
</script>