<!-- this will be the sign up form to add new dogs to the database, the link to get to this page will be in the about page until auth is set up -->

<template>
    <form> 
        <label>Name</label>
        <input type="text" required />
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
    export default {
  name: 'SignUpForm',
  components: {
  },
 
}
</script>

