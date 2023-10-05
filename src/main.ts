import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { useDogsStore } from "./stores";
import { Genders } from "./types";

const app = createApp(App);


app.use(createPinia());


const dogsStore = useDogsStore();
dogsStore.initDogList([
    {name: "Spike", age: 5, breed: "Boxer", gender: Genders.Male }, 
    {name: "Rex", age: 3, breed: "Poodle", gender: Genders.Male},
    {name: "Rover", age: 2, breed: "Bulldog", gender: Genders.Male},
    {name: "Matilda", age: 3, breed: "Great Dane", gender: Genders.Female},
    {name: "Claire", age: 7, breed: "Bichon Frise", gender: Genders.Female},
    {name: "Phoebe", age: 1, breed: "Rottweiler", gender: Genders.Female}
]);

app.use(router);
app.mount('#app')
    
