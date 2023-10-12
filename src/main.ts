import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { useDogsStore } from "./stores";
import { Genders } from "./types";
import PrimeVue from 'primevue/config';

const app = createApp(App);


app.use(createPinia());
app.use(PrimeVue);


const dogsStore = useDogsStore();
dogsStore.initDogList([
    {name: "Spike", age: 5, breed: "Boxer", gender: Genders.Male, favorite: false}, 
    {name: "Rex", age: 3, breed: "Poodle", gender: Genders.Male, favorite: false}, 
    {name: "Rover", age: 2, breed: "Bulldog", gender: Genders.Male, favorite: false},
    {name: "Matilda", age: 3, breed: "Great Dane", gender: Genders.Female, favorite: false},
    {name: "Claire", age: 7, breed: "Bichon Frise", gender: Genders.Female, favorite: false},
    {name: "Phoebe", age: 1, breed: "Rottweiler", gender: Genders.Female, favorite: true}
]);

app.use(router);
app.mount('#app')
    
