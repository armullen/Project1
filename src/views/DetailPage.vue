
<template>
    <div>
        <p v-if="dogInfo">   
          Hey!  My name is {{ dogInfo.name }}! I am a {{ dogInfo.age }} year old {{ dogInfo.breed }}.  Lets play!
        </p>
        <p v-else>
            Lost Dog Alert!  This dog is not in our database!    
        </p>
    <div>
        <div class="notFavorite" v-if="dogInfo?.favorite === false">
            <input type="radio" id="favorite" @click="addFavorite()" >Add to Favorites
        </div>
            <div class favorite>
                <p v-if="dogInfo?.favorite">
                    This dog is a favorite!
                    <div>
                        <button class="removeFavorite" @click="removeFavorite()">Remove from Favorites</button>
                    </div>
                </p>
        </div>
    </div>
    <hr>
        <button @click="router.back()">Go Back!</button>
    </div>
    
        
</template>


<script setup lang="ts">

import { computed } from 'vue';
import { useRoute, useRouter } from "vue-router";
import { useDogsStore } from "../stores";


const route = useRoute();
const router = useRouter();

const dogsStore = useDogsStore();

const selectedDogId = computed(() => {
    return parseInt(route.params.id as string) || 0;
});

const addFavorite = () => {
    dogsStore.addFavorite(selectedDogId.value);
};

const removeFavorite = () => {
    dogsStore.removeFavorite(selectedDogId.value);
};


const dogInfo = computed(() => {
    return dogsStore.dogsList.find((item) => {
        return item.id === selectedDogId.value;
    });
});



</script>
