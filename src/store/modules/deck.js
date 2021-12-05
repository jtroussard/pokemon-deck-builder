import LocalPokemon from '../../utils/nf_localPokemon.js'

const state = {
    currentPokemon: LocalPokemon.vileplume,
    deck: [LocalPokemon.victreebel, LocalPokemon.pikachu, LocalPokemon.staryu,],
}

const getters = {
    getAllCards: (state) => state.deck
}

const actions = {
    async addToDeck({ commit }, pokemon) {
        commit('ADD_TO_DECK', pokemon)
    }
}

export default {
    state,
    getters,
    actions,
}