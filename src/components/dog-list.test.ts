
import { beforeEach, describe, expect, test, vitest } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { useDogsStore } from '../stores';
import { setActivePinia, createPinia } from 'pinia';
import { DogList } from '.';

const wrapper = mount(DogList, {
    global: {
        plugins: [createTestingPinia({ createSpy: vitest.fn }),],
    }
})

const store = useDogsStore()


///////////////testing the default array of dogs


describe('DogList', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    }
    )
test('should render the default array of dogs', () => {
    const dogs = useDogsStore();

    expect(dogs.dogsList).toHaveLength(0);
})
});

/////////////testing add a dog function


// test('creates a new dog', async () => {

//     expect(wrapper.findAll('[data-test="dogList"]')).toHaveLength(6)

//     wrapper.vm.addDog();
//     await wrapper.vm.$nextTick();

//     expect(wrapper.findAll('[data-test="dogList"]')).toHaveLength(7)    
    

// });

////////////////testing delete a dog function

// test('deletes a dog', async () => {

//     const wrapper = mount(dogs, {
//         global: {
//             plugins: [createTestingPinia({ createSpy: vitest.fn }),],
//         }
//     })

//     expect(wrapper.findAll('[data-test="dogList"]')).toHaveLength(6)

//     wrapper.vm.removeDog();
//     await wrapper.vm.$nextTick();

//     expect(wrapper.findAll('[data-test="dogList"]')).toHaveLength(5)    
    

// });