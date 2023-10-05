
<template>
    <DogList :gender="Genders.Male" />
</template>


<script setup lang="ts">
    import { DogList } from "../../components";
    import { Genders } from "../../types";
</script>