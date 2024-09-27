"use strict";
/*
creating objects in ts
The technical term for what we're doing here is 'indexing'. We're indexing into albumAwards
with a string key, Grammy, and assigning it a value.
We're telling TypeScript that whenever we try to index into albumAwards with a string,
we should expect a boolean value.
*/
const albumAwards = {};
albumAwards.Grammy = true;
albumAwards.MercuryPrize = false;
albumAwards.Billboard = true;
albumAwards.Year = 2023;
;
const beyonceAwards = {
    Grammy: true,
    Billboard: true
};
/*
The Record utility type is another option for supporting dynamic keys.
Record can also support a union type as keys, but an index signature can't:
The first type argument is the key, and the second type argument is the value.
This is a more concise way to achieve a similar result as an index signature.

Index signatures can't use literal types, but Record can.
*/
const albumAward = {};
albumAward.Grammy = true;
// supporting Record in union types
const albumAwards1 = {
    Grammy: true,
    MercuryPrize: false,
    Billboard: true
};
const extendedNominations = {
    Grammy: true,
    MercuryPrize: false,
    Billboard: true,
    "American Music Awards": true, // Additional awards can be dynamically added
};
console.log(extendedNominations);
;
const extendedNominationsInt = {
    Grammy: true,
    MercuryPrize: false,
    Billboard: true,
    "American Music Awards": true,
};
console.log(extendedNominationsInt);
/*
Object - global type in TypeScript
It represents more types than you might expect. Instead of representing only objects
like {} or new Object(), object represents any non-primitive type. This includes arrays, functions, and objects.
*/
// So a function like this:
function acceptAllNonPrimitives(obj) { }
// would accept any non-primitive value:
acceptAllNonPrimitives({});
acceptAllNonPrimitives([]);
acceptAllNonPrimitives(() => { });
// But error on primitives
acceptAllNonPrimitives(1);
acceptAllNonPrimitives("hello");
acceptAllNonPrimitives(true);
