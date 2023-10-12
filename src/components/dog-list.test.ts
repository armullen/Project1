
import { describe, it, vitest, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { useDogsStore } from '../stores';
import { DogList } from '.';

const wrapper = mount(DogList, {
    global: {
        plugins: [createTestingPinia({ createSpy: vitest.fn }),],
    }
})

const store = useDogsStore()
let dog;


///////////////testing the switch in titles from male to female to all dogs


describe("dogListTitle", () => {
    it("should return the boys page title",() => {
        const wrapper = mount(DogList, {
            propsData: {
                gender: 1
            }

        })
    expect(wrapper.text()).toContain('The Boys...')
})
})


describe("dogListTitle", () => {
    it("should return the girls page title",() => {
        const wrapper = mount(DogList, {
            propsData: {
                gender: 2
            }

        })
    expect(wrapper.text()).toContain('The Ladies...')
})


})
describe("dogListTitle", () => {
    it("should return the default page title",() => {
        const wrapper = mount(DogList, {
            propsData: {
                gender: undefined
            }

        })
    expect(wrapper.text()).toContain('The Dogs...')
})
})


