<template>
    <header class="header">
        <h1>The Pokemon Picker App</h1>
        <NavigationBar />
    </header>
</template>

<script>
import NavigationBar from './NavigationBar.vue'
    export default {
        name: 'Header',
        components: {
            NavigationBar,
        },
    }
</script>

<style scoped>

    .header {
        background: rgb(255, 141, 48);
        color: rgb(255, 238, 0);
        padding: 15px;
    }
</style>