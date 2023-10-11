
import { useDogsStore } from "./dogsStore";
import { test, expect, vitest } from "vitest";
import { createTestingPinia } from "@pinia/testing";   
import { nextTick } from "vue";

const testingPinia = createTestingPinia({ createSpy: vitest.fn })
const store = useDogsStore(testingPinia)

/////////add a dog test

test('add a dog', async () => {

expect(store.dogsList).toHaveLength(0);

store.addDog({name: 'Fido', age: 3, breed: 'Bulldog', gender: 1})

await nextTick()

expect(store.dogsList).toHaveLength(1)
})  

/////////delete a dog test
    
   