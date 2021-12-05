import Vuex from 'vuex'
import { createLocalVue, mount, shallowMount } from '@vue/test-utils'

import Deck from '../../src/components/Deck'
import deckMockedState from './mocks/deckMockedState.json'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Deck component test', () => {
    let store
    let deckGetters

    beforeEach(() => {
        deckGetters = {
            allCards: () => null
        }
        store = new Vuex.Store({ 
            modules: {
                deck: {
                    state: deckMockedState,
                }
            },
        })
    })

    it('store is loaded', () => {
        const wrapper = mount(Deck, { store, localVue })
        store.state.deck.currentPokemon = { name: 'bob', weight: 13, sprites: { front_default: 'my-pokemon.com' } }
        console.log(store.state.deck)
        console.log(store.state.deck.currentPokemon)
        expect(store.state.deck.currentPokemon.name).toBe('bob')
    })
    
})
// const store = new Vuex.Store('deck')

// test('deck store is loaded', () => {
//     const wrapper = mount(Deck, {
//         store
//     })
//     store.state.deck.push({
//         card: {
//             name: 'Archer',
//             weight: 185,
//             sprites: {
//                 front_default: 'archer.com'
//             },
//         },
//     })
//     expect(wrapper.store.deck[0].name).toBe('Archer')
//     expect(wrapper.store.deck[0].weight).toEqual(185)
//     expect(wrapper.store.deck[0].sprites.front_default).toBe('archer.com')
//     expect(length(wrapper.store.deck)).toEqual(0)
// })