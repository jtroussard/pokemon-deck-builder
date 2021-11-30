<template>
        <span>
            <div v-if="card" class='card'>
                <p class='card-name'>{{ card.name.toUpperCase() }}</p>
                <img :src="`${card.sprites.front_default}`">
                <p class="card-stat">weight: {{ card.weight }}</p>
            </div>
        </span>
</template>

<script>
    export default {
        name: 'Card',
        props: ['card'],
        methods: {
            sum() {
                return 1
            },
            summing() {
                return 100
            },
            newmethod() {
                return null
            }
        },
    }
</script>

<style scoped>

img {
    width: 100%;
    height: auto;
}

.card {
    display: inline-block;
    width: 150px;
    height: 210px;
    border: solid 2px rgb(87, 87, 87);
    border-radius: 4pt;
    padding-top: 10px;
    margin-right: 5%;
    position: relative;
    text-align: center;
    vertical-align: middle;
}

.card-name {
    margin-left: 5px;
    margin-right: 5px;
}

.card-stat {
    position:absolute;
    bottom:0;
    width: 150px;
    margin-bottom: 2px;
}

</style>