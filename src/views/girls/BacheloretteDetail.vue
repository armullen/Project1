<!-- each individual dog will have a detail page where there will be more information and a way to contact their human.  This view will be available from the bachelorette page as well as the list of selected dogs for the individual user -->

<template>
    <h1>The Girls Detail Page</h1>
    <p>The girls id is {{ id }}</p>
</template>

<script setup lang="ts">

    import { useRoute } from "vue-router";

    const route = useRoute()

    const id = route.params.id;

</script>