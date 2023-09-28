import { expect, test, describe, it } from 'vitest'
import { mount } from '@vue/test-utils'
import index from './index.vue'


test('object created with submit button', async () => {
    const wrapper = mount(index)

    await wrapper.find('[data-test="dog-name"]').setValue('Fido')
    await wrapper.find('[data-test="dog-breed"]').setValue('Poodle')
    await wrapper.find('[data-test="dog-age"]').setValue('3')
    await wrapper.find('[data-test="dog-gender"]').setValue('Male')
    
    describe('index', () => {
        test('should render add-dog event on button click', async () => {
            const wrapper = mount(index)
            await wrapper.find('button').trigger('click')
            expect(wrapper.emitted('add-dog')).toBeTruthy()
        })
        });
        
});
    

test('alert message when no dog info is entered', async () => {
    
    describe('index', () => {
        test('should render alert message on button click', async () => {
            const wrapper = mount(index)
            await wrapper.find('button').trigger('click')
            expect(wrapper.emitted('alert')).toBeTruthy()
        })
        });
})








    