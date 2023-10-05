
<template>
    <DogList :gender="Genders.Female" />
</template>


<script setup lang="ts">
    import { DogList } from "../../components";
    import { Genders } from "../../types";
</script>