import dogs from './dogs.vue';
import { describe, expect, it, test } from 'vitest';
import { mount } from '@vue/test-utils';

///////////////testing the default array of dogs

// describe('dogs', () => {

//     it('should render the default array of dogs', () => {
//    const wrapper = mount(dogs);
   
//    const dogList = wrapper.findAll('[data-test="dogList"]');

//    const expectedDogs = [
//     {name: "Spike"}, 
//     {name: "Rex"},
//     {name: "Rover"},
//     {name: "Matilda"},
//     {name: "Claire"},
//     {name: "Phoebe"}
// ]

//     expect(dogList).toEqual(expectedDogs);
// });
// });





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