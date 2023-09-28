import dogs from './dogs.vue';
import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';

test('should render a list of dogs', async () => {
    const wrapper = mount(dogs);
    expect(wrapper.findAll('li'));
    
    expect(wrapper.findAll('[data-test="dogList"]')).toHaveLength(6)
    
    // expect(wrapper.findAll('li')).toBe(['Spike', 'Rex', 'Rover', 'Matilda', 'Claire', 'Phoebe']);
    
});

test('creates a new dog', async () => {
    const wrapper = mount(dogs);
    expect(wrapper.findAll('[data-test="dogList"]')).toHaveLength(6)

    wrapper.vm.addDog();
    await wrapper.vm.$nextTick();

    expect(wrapper.findAll('[data-test="dogList"]')).toHaveLength(7)    
    

});

test('deletes a dog', async () => {
    const wrapper = mount(dogs);
    expect(wrapper.findAll('[data-test="dogList"]')).toHaveLength(6)

    wrapper.vm.removeDog();
    await wrapper.vm.$nextTick();

    expect(wrapper.findAll('[data-test="dogList"]')).toHaveLength(5)    
    

});