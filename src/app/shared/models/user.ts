import { Todo } from "./todo";

export interface User{
    id: number;
    name: string;
    username: string;
    email: string;
    address: Array<{
        street: string;
        suite: string;
        city: string;
        zipcode: number;
        geo: {
            lat: number;
            lng: number;
        }
    }>;
    todo: Todo
}