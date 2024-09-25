"use strict";
/*
Narrowing in TypeScript lets us take a wider type and make it narrower using runtime code.
Some types are wider versions of other types. For example, string is wider than the literal string "small". This is because string can be any string, while "small" can only be the string "small".
*/
const logSize = (size) => {
    console.log(size.toUpperCase());
};
logSize('small');
// since the function accepts "small" we can't pass any random string.
const recordOfSizes = {
    small: 'Small',
    large: 'Large'
};
const LogSize = (size) => {
    console.log(recordOfSizes[size]);
};
//LogSize('medium') // throws an error that 'medium' is not assignable to parameter of type
/*
2. Unions Are Wider Than Their Members

A union type is a wider type than its members. For example, string | number is wider than string or number on their own.
This means that we can pass a string or a number to a function that accepts string | number:
*/
function logId0(id) {
    console.log(id);
}
logId0('abc');
logId0(123);
// We can't pass string | number to a function that only accepts string.
function LogId(id) {
    console.log(`The id is ${id}`);
}
const user = {
    id: 123,
};
// Argument of type 'string | number' is not assignable to parameter of type 'number'.
// Type 'string' is not assignable to type 'number'.
//LogId(user.id)
/*
Narrowing in Typescript lets us take a wider type and make it narrower using runtime code
Narrowing with typeOf
one way to narrow dowm the type of a value is to use the typeOf operator, combined with an If statement
Narrowing only applies within the block's scope.
*/
const getAlbumYear = (year) => {
    if (typeof year === 'string') {
        // year is a string
        console.log(`The album was released in ${year.toUpperCase()}.`);
    }
    else if (typeof year === 'number') {
        // year is a number
        console.log(`The album was released in ${year.toFixed(0)}.`);
    }
};
getAlbumYear('small');
/*
if we add a boolean to the year union, the first if block will
still end up with a type of string, but the else block will end up with a type of number | boolean:
*/
const getAlbumYear0 = (year) => {
    if (typeof year === 'string') {
        // year is a string
        console.log(`The album was released in ${year}.`);
    }
    else if (typeof year === 'number') {
        // year is number | boolean
        console.log(`The album was released in ${year}.`);
    }
    console.log(year);
};
getAlbumYear0(3045);
/*
Narrowing Exercises
1. Narrowing with if statements
*/
function validateUsername(username) {
    if (typeof username === 'string') {
        return username.length > 5;
    }
    return false;
}
validateUsername('Matt1234');
validateUsername('Alice');
validateUsername('Bob');
describe('Username validation tests', () => {
    test('should return true for valid usernames', () => {
        expect(validateUsername('Matt1234')).toBe(true);
        expect(validateUsername('Alice')).toBe(false);
        expect(validateUsername('Bob')).toBe(false);
    });
    test('should return false for null', () => {
        expect(validateUsername(null)).toBe(false);
    });
});
