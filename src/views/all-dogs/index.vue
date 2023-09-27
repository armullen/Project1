<!-- all the male dogs will be pulled from the main database by the gender field and put here in a list.  You will be able to click on a selector box and add them to a personal database list of your own saved dogs -->

<template>
    <Dogs ref="dogsComponent"  />
    <form data-test="dog-form">
        <label>Name</label>
        <input type="text" required v-model="name" data-test="dog-name" />
        <label>Age</label>
        <input type="number" required v-model="age" data-test="dog-age" />
        <label>Breed</label>
        <input type="text" required v-model="breed" data-test="dog-breed"/>
        <label>Gender</label>
        <select v-model="gender" data-test="dog-gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <button @click="onAddDogClick" data-test="submit">Add a Dog</button>
    </form>

    
</template>


<script setup lang="ts">
    import { ref } from "vue";
    import { Dogs, DogsComponent } from "../../components";   

    const name = ref("");
    const age = ref(0);
    const breed = ref("");
    const gender = ref("");
    
    const dogsComponent = ref<DogsComponent>();

    const onAddDogClick = () => {

        if(!name.value || !breed.value || !gender.value ) {
            alert("Please fill out all fields");
            return;
        } 


        dogsComponent.value?.addDog({
            name: name.value,
            age: age.value,
            breed: breed.value,
            gender: gender.value
        });
    }

</script>