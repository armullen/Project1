
<template>
    <div>
        <p v-if="dogInfo">   
          Hey!  My name is {{ dogInfo.name }}!
        </p>
        <p v-else>
          Lost Dog Alert!  This dog is not in our database!
        </p>
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


const dogInfo = computed(() => {
    return dogsStore.dogsList.find((item) => {
        return item.id === selectedDogId.value;
    });
});

</script>
