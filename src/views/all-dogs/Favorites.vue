
<template>
    <ul>
        <li v-for="dog in store.favorite" :key="dog.id">
            <router-link :to="`/dogs/${dog.id}`">
                {{ dog.name }}
            </router-link>
        </li>
        <!-- if no favorites need a message saying -->
    </ul>
</template>


<script setup lang="ts">
import { useDogsStore }  from '../../stores';

    const store = useDogsStore();
   
</script>