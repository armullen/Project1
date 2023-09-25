export interface Dog {
    name: string;
    age: number;
    breed: string;
    gender: string;
    id: number;
}

export type DogInput = Omit<Dog, 'id'>;

export default Dog;