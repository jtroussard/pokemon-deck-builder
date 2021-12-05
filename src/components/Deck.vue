<template>
  <div>
    <h2>Deck: {{ deckSize }}/5</h2>
    <div v-if="allCards">
    <span v-for="card in allCards" :key="card.id">
      <Card :card="card" />
    </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from './Card.vue';
export default {
  name: 'Deck',
  components: {
    Card,
  },
  computed: {
    ...mapGetters({ allCards: 'getAllCards' }),
    deckSize: () => mapGetters(['getAllCards']).length,
  },
  data() {
    return {
      card: {},
    };
  },
  created() {
    console.log('DECK CREATED');
  },
};
</script>

<style scoped>
</style>