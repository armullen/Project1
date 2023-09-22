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