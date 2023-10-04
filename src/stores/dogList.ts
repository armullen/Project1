import { defineStore } from 'pinia'



export const useDogListStore = defineStore('dogsList', {
    state: () => ({
        dogsList: [],
        id: 0
    }),
    
    actions: {
        addDog(dog) {
            this.dogsList.push({dog, id: this.id++, favorite: false})
            };  
        },
        removeDog(dogId) {
            this.dogsList = this.dogsList.filter((dog) => {
                return dog.id !== dogId
            })
        },
        
    },
    
    getters: {
        
    },
),
    
