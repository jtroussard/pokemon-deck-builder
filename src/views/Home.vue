<template>
  <div class="home">
    <Search />
    <Results />
    <Deck />
  </div>
</template>

<script>
import Deck from '../components/Deck.vue'
import Results from '../components/Results.vue'
import Search from '../components/Search.vue'

export default {
  name: 'Home',
  components: {
    Deck,
    Results,
    Search,
  }
}
</script>
