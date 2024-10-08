"use strict";
// A union type is TypeScript's way of saying that a value can be "either this type or that type".
// we use (|) operator to create a union.
// 1. Declaring union types
const logId = (id) => {
    console.log(id);
};
logId('abcd');
logId(123);
function loggId(id) {
    console.log(id);
}
const getAlbumFormats = (format) => {
    // function body
};
// throws an error MP# is not assignable to parameter of type 'PhysicalFormat
// getAlbumFormats('MP3')
// Unions and Literals Exercise
function getUsername(username) {
    if (username !== null) {
        return `User: ${username}`;
    }
    else {
        return 'Guest';
    }
}
// const result = getUsername('Alice')
// type test = Expect<Equal<typeof result, string>>
// const result2 = getUsername(null) // null want assaignable to username and we had to use union
// type test2 = Expect<Equal<typeof result2, string>>
// Exercise 2: Restricting functions
function move(direction, distance) {
    if (typeof direction !== 'string' && typeof distance !== 'number') {
        throw new Error('Direction should be string and distance should be number');
    }
}
// test cases
move('up', 10);
move('left', 5);
// instance of examples
class Dog {
    bark() {
        console.log("Woof! 🐶");
    }
}
class Cat {
    meow() {
        console.log("Meow! 🐱");
    }
}
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark(); // Narrowed down to Dog
    }
    else if (animal instanceof Cat) {
        animal.meow(); // Narrowed down to Cat
    }
}
// Example usage:
const myDog = new Dog();
const myCat = new Cat();
makeSound(myDog); // Output: Woof! 🐶
makeSound(myCat); // Output: Meow! 🐱
// using in instead of (instanceof)
function makeSound0(animal) {
    if ('bark' in animal) {
        animal.bark(); // Narrowed down to Dog
    }
    else if ('meow' in animal) {
        animal.meow(); // Narrowed down to Cat
    }
}
