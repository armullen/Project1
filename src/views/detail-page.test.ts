
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
store.name= 'dogStore'



//test functionality of favorite button

test('', async () => {
        
    // await wrapper.find('button').trigger('click')

    // expect(wrapper.emitted('router.back')).toBeTruthy();
})
   