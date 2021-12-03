import { mount } from '@vue/test-utils'
import Card from '../../src/components/Card'

test('mount a vue', () => {
    const wrapper = mount(Card)
    expect(wrapper.vm.sum()).toEqual(1)
    expect(wrapper.vm.summing()).toEqual(100)
})

test('test 2', () => {
    const wrapper = mount(Card)
    expect(wrapper.vm.summing()).toEqual(100)
})