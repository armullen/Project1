import { expect, test } from 'vitest'
import { getNextId } from './dogs.vue'

const dogs = [
        {id: 1},
        {id: 2},
        {id: 3},
    
];

test('gets next id', () => {
    const result = getNextId(dogs);
    expect(result).toBe(4);

})




// function getNextId(): number {
    
//     let result = 1;
//     for(let i = 0; i < dogs.length; i++) {
//         if(dogs[i].id >= result) {
//             result = dogs[i].id + 1;
//         }
//     }

//     return result;
    