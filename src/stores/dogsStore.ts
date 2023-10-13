import { defineStore } from 'pinia';
import { Dog, DogInput, Genders } from '../types';
import { ref, computed } from 'vue';

export const useDogsStore = defineStore('dogStore', () => {

    console.log("Creating Pinia Store: dogStore");

    const dogsList = ref<Array<Dog>>([]);

    function addDog(input: DogInput): void {

        const dog: Dog = {
            ...input,
            id: nextId.value
        };

        dogsList.value.push(dog);
    }
    
    function removeFavorite(dogId: number): void {
        const index = dogsList.value.findIndex((dog) => dog.id === dogId);
        dogsList.value[index].favorite = false;
    }
    function addFavorite(dogId: number): void {
        const index = dogsList.value.findIndex((dog) => dog.id === dogId);
        dogsList.value[index].favorite = true;
    }

    function removeDog(dogId: number): void { 
        const index = dogsList.value.findIndex((dog) => dog.id === dogId);
        dogsList.value.splice(index, 1);
    }

    const boys = computed(() => {
        return dogsList.value.filter((dog: Dog) => { return dog.gender = Genders.Male } )
    });

    const girls = computed(() => {
        return dogsList.value.filter((dog: Dog) => { return dog.gender = Genders.Female } )
    });

    const favorite = computed(() => {
        return dogsList.value.filter((dog: Dog) => { return dog.favorite = true } )
    });


    const nextId = computed(() => { 

        const reducer = (acc: number, dog: Dog) => {
            return (dog.id >= acc) ? dog.id + 1 : acc;
        }

        const defaultValue = 1;
        return dogsList.value.reduce(reducer, defaultValue);
    });

    function initDogList(dogs: DogInput[]): void {

        dogsList.value = [];

        for(const dogInput of dogs) {
            addDog(dogInput);
        }
    }

    return { dogsList, addDog, removeDog, boys, girls, favorite, initDogList, addFavorite, removeFavorite };

});

