import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { Dogs } from './index.ts'


test('creates a new dog', async () => {
    const wrapper = mount(Dogs)

    await wrapper.find('[data-test="dog-name"]').setValue('Fido')
    await wrapper.find('[data-test="dog-breed"]').setValue('Poodle')
    await wrapper.find('[data-test="dog-age"]').setValue('3')
    await wrapper.find('[data-test="dog-gender"]').setValue('Male')
    await wrapper.find('button').trigger('click')

});
    const wrapper = mount(Dogs)
    expect(wrapper.emitted('submit')).toBe({
        name: 'Fido',
        breed: 'Poodle',
        age: '3',
        gender: 'Male'
    })


// describe('remove a dog button is pushed' () => {
//     it('should remove the dog from the Dog array', async() => {
//     })
//         const wrapper = mount(Dogs)
//         await wrapper.find('button').trigger('click')
// })




    