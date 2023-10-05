
<template>
  <div id="app">
    <div class="header">
      <h1>Canine Cupid</h1>
      <p>Bringing tails of love together</p>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link> |
      <router-link :to="{ name: 'All Dogs' }">All Dogs</router-link> |
      <router-link :to="{ name: 'Bachelors' }">Bachelors</router-link> |
      <router-link :to="{ name: 'Bachelorettes' }">Bachelorettes</router-link> |
      <router-link :to="{ name: 'Signup' }">Sign Up</router-link>
    </div>
    <router-view />
  </div>
</template>

<script setup lang="ts">

</script>
