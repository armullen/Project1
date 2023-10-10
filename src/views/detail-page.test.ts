//test functionality of favorite button
//test functionality of clicking on an individual dog and getting their info

import DetailPageVue from "./DetailPage.vue";
import { createTestingPinia } from '@pinia/testing';
import { useDogsStore } from "../stores";
import { expect, test, vitest } from "vitest";
import { mount } from "@vue/test-utils";


const wrapper = mount(DetailPageVue, {
    global: {
        plugins: [createTestingPinia({ createSpy: vitest.fn}),],
        
    }
})

const store = useDogsStore()

store.name = 'dogStore'


//test go back button
test('go back button', async () => {
        
        expect(wrapper.find('button')).onclick('Go Back')

        await wrapper.vm.$nextTick();

        wrapper.vm.goBack();
})
   