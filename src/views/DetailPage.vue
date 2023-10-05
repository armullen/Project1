
<template>
    <div>
        <dogs :id="id" />
        <p>   
            Hey!  My name is {{ dogInfo.name }}!
        </p>
    </div>
        
</template>


<script setup lang="ts">
import { computed } from 'vue'
import dogs from '../components/dogs.vue'
import { Dog } from '../types/Dogs'

// import { useRoute } from 'vue-router'

// const route = useRoute()
// const dogInfo = parseInt(route.params.id)
const dogInfo = dogs.find(id)

  const props = defineProps({
    id: {
      type: Number,
      required: true
    }
  })

const routes = [
    { path: '/:id', component: dog, props: true }
]
</script>

<style>
</style>