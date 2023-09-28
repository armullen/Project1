import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { Dogs } from '../views/all-dogs/index.vue'


test('creates a new dog', async () => {
    const wrapper = mount(Dogs)

    await wrapper.find('[data-test="dog-name"]').setValue('Fido')
    await wrapper.find('[data-test="dog-breed"]').setValue('Poodle')
    await wrapper.find('[data-test="dog-age"]').setValue('3')
    await wrapper.find('[data-test="dog-gender"]').setValue('Male')
    await wrapper.find('submit').trigger('click')

});
    const wrapper = mount(Dogs)
    expect(wrapper.emitted('submit')).toBe({
        name: 'Fido',
        breed: 'Poodle',
        age: '3',
        gender: 'Male'
    })






    