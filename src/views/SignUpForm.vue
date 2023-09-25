<!-- this will be the sign up form to add new dogs to the database, the link to get to this page will be in the about page until auth is set up -->

<template>
    <form> 
        <label>Name</label>
        <input type="text" required v-model="name" />
        <label>Age</label>
        <input type="number" required v-model="age" />
        <label>Breed</label>
        <input type="text" required v-model="breed" />
        <label>Gender</label>
        <select v-model="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
    </form>
    <button>Submit</button>
</template>

<script lang="ts">
import { ref, Component } from 'vue'
    export default {
  name: 'SignUpForm',
  components: {
  },
 
}
</script>

