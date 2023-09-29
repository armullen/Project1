import dogs from './dogs.vue';
import { describe, expect, it, test } from 'vitest';
import { mount } from '@vue/test-utils';

///////////////testing the default array of dogs

describe('dogs', () => {

    it('should render the default array of dogs', () => {
   const wrapper = mount(dogs);
   
   expect(wrapper.findAll('li').length).toEqual(6);

   expect(wrapper.findAll('li').at(0)?.text()).toMatch('Spike')
   expect(wrapper.findAll('li').at(1)?.text()).toMatch('Rex')
   expect(wrapper.findAll('li').at(2)?.text()).toMatch('Rover')
   expect(wrapper.findAll('li').at(3)?.text()).toMatch('Matilda')
   expect(wrapper.findAll('li').at(4)?.text()).toMatch('Claire')
   expect(wrapper.findAll('li').at(5)?.text()).toMatch('Phoebe')
   
    
});
});





/////////////testing add a dog function


test('creates a new dog', async () => {
    const wrapper = mount(dogs);
    expect(wrapper.findAll('[data-test="dogList"]')).toHaveLength(6)

    wrapper.vm.addDog();
    await wrapper.vm.$nextTick();

    expect(wrapper.findAll('[data-test="dogList"]')).toHaveLength(7)    
    

});

////////////////testing delete a dog function

test('deletes a dog', async () => {
    const wrapper = mount(dogs);
    expect(wrapper.findAll('[data-test="dogList"]')).toHaveLength(6)

    wrapper.vm.removeDog();
    await wrapper.vm.$nextTick();

    expect(wrapper.findAll('[data-test="dogList"]')).toHaveLength(5)    
    

});