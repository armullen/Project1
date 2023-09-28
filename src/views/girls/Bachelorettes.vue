<template>
    <h1>The Ladies...</h1>
    <ul>
        <li v-for='dog in dogs' :key="dog.id">
            {{ dog.name }}
        </li>
    </ul>
</template>


<script lang="ts">
import { ref } from 'vue';


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
                {name: "Matilda", age: 3, breed: "Great Dane", gender: "Female", id: 4},
                {name: "Claire", age: 7, breed: "Bichon Frise", gender: "Female", id: 5},
                {name: "Phoebe", age: 1, breed: "Rottweiler", gender: "Female", id: 6},
            ])
            return {
                dogs
            }
        },
    }
</script>