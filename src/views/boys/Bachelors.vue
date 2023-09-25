<!-- all the male dogs will be pulled from the main database by the gender field and put here in a list.  You will be able to click on a selector box and add them to a personal database list of your own saved dogs -->

<template>
    <h1>The Boys</h1>
    <!-- vfor loop to pick out the gender of "male" and list them with a link to the detail page -->
    <li v-for="dogs in Doglist"> {{ dogs.name }} {{ dogs.breed }}
        
    </li>
</template>

<script lang="ts">
import DogList from '../../data/DogList.vue';

export default {
    setup() {
        return {
            DogList
        }
    }
}


</script>