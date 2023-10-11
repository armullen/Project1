
import { useDogsStore } from "./dogsStore";
import { describe, beforeAll, expect, it } from "vitest";
import { createPinia, setActivePinia } from "pinia";

describe('Dogs Store', () => {

    beforeAll(() => { 
        setActivePinia(createPinia());
    });

    /////////add a dog test
    it('ads dogs', () => {

        const store = useDogsStore();
        expect(store.dogsList).toHaveLength(0);
        store.addDog({name: 'Fido', age: 3, breed: 'Bulldog', gender: 1});
        expect(store.dogsList).toHaveLength(1)
    });

    /////////delete a dog test
    it('removes dogs', () => { 
        const store = useDogsStore();
        expect(store.dogsList).toHaveLength(1);
        const dogId = store.dogsList[0].id;
        store.removeDog(dogId);
        expect(store.dogsList).toHaveLength(0);
    });

})  


    
   