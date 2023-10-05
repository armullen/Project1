
<template>
    <h1>{{ dogListTitle }}</h1>
    <ul>
        <li v-for='dog in dogsList' :key="dog.id" data-test="dogList">

            <router-link :to="{ name: 'DetailPage', params: { id: dog.id } }">
                {{ dog.name }}
            </router-link>

        </li>
    </ul>
</template>

<script setup lang="ts">

import { computed } from 'vue';

import { useDogsStore } from "../stores";
import { Genders } from "../types";

const dogStore = useDogsStore();

// https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits

const props = withDefaults(defineProps<{
    gender: Genders
}>(), { gender: Genders.Unspecified});

const dogListTitle = computed(() => {
    switch (props.gender) {
        case Genders.Male:
            return "The Boys...";
        case Genders.Female:
            return "The Ladies...";
        default:
            return "The Dogs...";
    }
})

const dogsList = computed(() => {

    return dogStore.dogsList.filter((item) => {
        return props.gender === Genders.Unspecified || props.gender === item.gender;
    })
});

</script>