<!-- this will be the sign up form to add new dogs to the database, the link to get to this page will be in the about page until auth is set up -->

<template>
    <form @submit.prevent="addDogAndClear(dog)"> 
        <label>Name</label>
        <input v-model="dogList" type="text" required />
        <label>Age</label>
        <input type="number" required />
        <label>Breed</label>
        <input type="text" required />
        <label>Gender</label>
        <select>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
    </form>
    <button>Submit</button>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useDogListStore } from '@stores/dogList'

const store = {
    useDogListStore(){},
}
const dogList = ref('')

function addDogAndClear(dog) {
    if (dogList.length === 0) {
        return
    }
    store.addDog(dog)
    dogList.value = ''
}

    export default {
  name: 'SignUpForm',
  components: {
  },
 
}
</script>

