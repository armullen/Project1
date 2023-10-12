import { Genders } from "./Genders";

export interface Dog {
    name: string;
    age: number;
    breed: string;
    gender: Genders;
    id: number;
    favorite: boolean;
}

export type DogInput = Omit<Dog, 'id'>;

export default Dog;