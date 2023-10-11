
import { useDogsStore } from "./dogsStore";
import { setActivePinia, createPinia } from "pinia";
import { describe, beforeEach, expect, it } from "vitest";

describe('dogsStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })
})

it('should add a dog to the doglist array', () => {
    const dogs = useDogsStore();
    expect(dogs.dogsList).toHaveLength(0);
    dogs.addDog();
    expect(dogs.dogsList).toHaveLength(1);
})