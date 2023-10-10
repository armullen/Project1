//test functionality of favorite button
//test functionality of clicking on an individual dog and getting their info

import DetailPageVue from "./DetailPage.vue";
import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";


//test go back button
test('go back button', async () => {
        const wrapper = mount(DetailPageVue);
        
        expect(wrapper.toFind('button')).onclick('Go Back')

        await wrapper.vm.$nextTick();
        
        wrapper.vm.goBack();

        

    }
        )
   