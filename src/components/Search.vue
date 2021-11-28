<template>
    <div>
        <h2>Search</h2>
        <form @submit.prevent="doSearch">
            <input type="text" class="search" v-model="pokemonName" placeholder="Pokemon Name...">
            <input type="submit" class="btn" value="Search">
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Search',
        data() {
            return {
                pokemonName: ''
            }
        }
    }
</script>

<style scoped>
    form {
        display: flex;
        margin-left: 5%;
        margin-right: 5%;
        margin-bottom: 7%;
    }

    input {
        margin-right: 10px;
        padding: 5px;
        border: 2px coral solid;
        border-radius: 7pt;
    }

    input[type="text"] {
        flex: 0.75;
    }

    input[type="submit"] {
        flex: 0.25;
        border-color: #999;
    }
</style>