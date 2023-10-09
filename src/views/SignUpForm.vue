
<template>
    <div>
        <label>Name</label>
        <input v-model="name" type="text" required />
    </div>
    <div>
        <label>Age</label>
        <input v-model="age" type="number" required />
    </div>
    <div>
        <label>Breed</label>
        <input v-model="breed" type="text" required />
    </div>
    <div>
        <label>Gender</label>
        <select v-model="gender">
            <option @value="Genders.Unspecified"></option>
            <option @value="Genders.Male">Male</option>
            <option @value="Genders.Female">Female</option>
        </select>
    </div>
    <button @click="addDogAndClear">Submit</button>
</template>

<script setup lang="ts">

import { ref, computed } from 'vue';
import { useDogsStore } from "../stores";
import { Genders } from "../types";

const dogsStore = useDogsStore();

const name = ref('');
const age = ref<number>();
const breed = ref('');
const gender = ref<Genders>();

const isValid = computed(() => {
    return name.value?.trim().length > 0 
    && breed.value?.trim().length > 0
});

function addDogAndClear() {

    if(!isValid) {
        console.error("Invalid Form");
        return;
    }

    console.debug("adding dog:", {
        name: name.value?.trim(),
        age: age.value ?? 0,
        breed: breed.value?.trim(),
        gender: gender.value ?? Genders.Unspecified
    });

    dogsStore.addDog({
        name: name.value?.trim(),
        age: age.value ?? 0,
        breed: breed.value?.trim(),
        gender: gender.value ?? Genders.Unspecified
    });

    name.value = '';
    breed.value = '';
    age.value = undefined;
    gender.value = Genders.Unspecified;
}

</script>

