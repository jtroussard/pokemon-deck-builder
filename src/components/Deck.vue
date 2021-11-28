<template>
    <div>
        <h2>Deck</h2>
        <span v-for="card in this.getAllCards" :key="card.id">
            <Card :card="card"/>
        </span>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from './Card.vue'
export default {
    name: 'Deck',
    components: {
        Card,
    },
    computed: mapGetters(['getAllCards']),
    data() {
        return {
            card: {},
        }
    },
    created() {
        console.log(this.getAllCards)
    }
}
</script>

<style scoped>

</style>