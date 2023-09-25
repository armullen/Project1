<!-- all the male dogs will be pulled from the main database by the gender field and put here in a list.  You will be able to click on a selector box and add them to a personal database list of your own saved dogs -->

<template>
    <h1>The Boys</h1>
    <li v-for="dogs in Doglist" :key="dogs.id">
        <router-link :to="{ name: 'DogDetails', params: { id: dogs.id }}">
            {{ dogs.name }}
        </router-link>
    </li>
</template>

<script lang="ts">
import { ref } from 'vue'
import DogList from '../../data/DogList.vue';


</script>