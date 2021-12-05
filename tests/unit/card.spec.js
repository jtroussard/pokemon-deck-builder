import { mount } from '@vue/test-utils'
import Card from '../../src/components/Card'

test('Card component snapshot test', () => {
    const wrapper = mount(Card, {
        propsData: {
            card: {
                name: 'Bobo',
                weight: 100,
                sprites: {
                    front_default: 'https://bobothepokemon.com',
                },
            },
        }
    })
    expect(wrapper).toMatchSnapshot()
})