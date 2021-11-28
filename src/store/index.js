import Vue from 'vue'
import Vuex from 'vuex'

import deck from './modules/deck.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { 
    deck
  }
})
