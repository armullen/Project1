import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { Dogs } from './index.ts'


test('creates a new dog', async () => {
    const wrapper = mount(Dogs)
    expect(wrapper.findAll('[data-test="Dogs"]')).toHaveLength(1)

    await wrapper.get('[data-test="dog-name"]').setValue('Fido')
    await wrapper.get('[data-test="dog-breed"]').setValue('Poodle')
    await wrapper.get('[data-test="dog-age"]').setValue('3')
    await wrapper.get('[data-test="dog-gender"]').setValue('Male')
    await wrapper.get('[data-test="dog-form"]').trigger('submit')

    expect(wrapper.findAll('[data-test="dog"]')).toHaveLength(2)
});


// describe('remove a dog button is pushed' () => {
//     it('should remove the dog from the Dog array', async() => {
//     })
//         const wrapper = mount(Dogs)
//         await wrapper.find('button').trigger('click')
// })




    