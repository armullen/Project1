<!-- all the male dogs will be pulled from the main database by the gender field and put here in a list.  You will be able to click on a selector box and add them to a personal database list of your own saved dogs -->
<template>
    <h1>{{ dogListTitle }}</h1>
    <ul>
        <li v-for='dog in dogList' :key="dog.id">
            {{ dog.name }}
        </li>
    </ul>
</template>


<script lang="ts">
    export type DogsComponent = { 
        addDog: (dogInput: DogInput) => void,
        removeDog: (dog: Dog) => void
    }
</script>

<script setup lang="ts">


import { computed, reactive, PropType, defineExpose } from 'vue'
import { Dog, DogInput } from "../types/Dogs";

const props = defineProps({
    gender: {
        type: String
    },
    dogs: {
        type: Object as PropType<Dog[]>
    }
})

const dogs = reactive<Dog[]>(props.dogs ?? [
    {name: "Spike", age: 5, breed: "Boxer", gender: "Male", id: 1}, 
    {name: "Rex", age: 3, breed: "Poodle", gender: "Male", id: 2},
    {name: "Rover", age: 2, breed: "Bulldog", gender: "Male", id: 3},
    {name: "Matilda", age: 3, breed: "Great Dane", gender: "Female", id: 4},
    {name: "Claire", age: 7, breed: "Bichon Frise", gender: "Female", id: 5},
    {name: "Phoebe", age: 1, breed: "Rottweiler", gender: "Female", id: 6}
]);

const dogListTitle = computed(() => {
    switch(props.gender?.toLowerCase()) {
        case "male":
            return "The Boys...";
        case "female":
            return "The Ladies...";
        default:
            return "The Dogs..."        
    }
})

const dogList = computed(() => {
    return dogs.filter((dog: Dog) => { return !props.gender || dog.gender === props.gender } )
});

function getNextId(): number {
    
    let result = 1;
    for(let i = 0; i < dogs.length; i++) {
        if(dogs[i].id >= result) {
            result = dogs[i].id + 1;
        }
    }

    return result;
}

function addDog(dogInput: DogInput) {

    const dog: Dog = {
        ...dogInput,
        id: getNextId()
    };  

    dogs.push(dog);
}

function removeDog(dog: Dog) {
    dogs.splice(dogs.indexOf(dog), 1);
}

defineExpose({
    addDog,
    removeDog
});

</script>