
<template>
    <DogList :favoriteDog="true" />
</template>


<script setup lang="ts">
    import { DogList } from "../../components";
    // import { computed } from 'vue';
    // import { favorite } from "../../stores";

    // const favoriteDog = computed (() => {
    //         return favorite.value.filter ((dog: Dog) => dog.favorite === true);
    //     });
</script>