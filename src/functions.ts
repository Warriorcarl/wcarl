import { SayHelloProps } from "./types";

export function sayHello({ firstName, lastName, age }: SayHelloProps) {
    console.log('Hallo WEI!');
    console.log('nama depanluh ${firstName}');

    if (lastName) {
        console.log('nama belakang ${lastName}');
    }
    
    if (age) {
        console.log('umur luh ${age}');
    }
}
