
<template>
  
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link>
    </div>
  <router-view />
  </template>



  <script setup lang="ts">

  </script>
