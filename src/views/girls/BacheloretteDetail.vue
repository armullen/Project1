<template>
    <h1>The Girls Detail Page</h1>
    <p>The girls id is {{ id }}</p>
</template>

<script lang="ts">
export default {
    name: 'BacheloretteDetail',
    components: {
    },
    props: {
    },
    setup(props: any) {
        return {
            id:this.$route.params.id
        }
    },
  
}
</script>