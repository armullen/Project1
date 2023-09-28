import dogs from './dogs.vue';
import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';

test('should render a list of dogs', async () => {
    const wrapper = mount(dogs);
    expect(wrapper.findAll('li'));
    
    expect(wrapper.findAll('[data-test="dogList"]')).toHaveLength(6)
    console.log(dogs)
    
    // expect(wrapper.findAll('[data-test="dogList"]')).toBe(['Spike', 'Rex', 'Rover', 'Matilda', 'Claire', 'Phoebe']);
    
});