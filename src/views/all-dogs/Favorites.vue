
<template>
    <div>favorites</div>
    <p> {{ store.favorite }} </p>
</template>


<script setup lang="ts">
import { useDogsStore }  from '../../stores';

    const store = useDogsStore();
   
</script>