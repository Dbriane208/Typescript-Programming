/*
creating objects in ts
The technical term for what we're doing here is 'indexing'. We're indexing into albumAwards 
with a string key, Grammy, and assigning it a value.
We're telling TypeScript that whenever we try to index into albumAwards with a string,
we should expect a boolean value.
*/ 
const albumAwards: {
    [index: string]: boolean | string | number;
} = {};

albumAwards.Grammy = true;
albumAwards.MercuryPrize = false;
albumAwards.Billboard = true;
albumAwards.Year = 2023;

// The same syntax can be used wiht types and interfaces
interface AlbumAwards {
    [index: string]: boolean;
};

const beyonceAwards: AlbumAwards = {
    Grammy: true,
    Billboard: true
}

/*
The Record utility type is another option for supporting dynamic keys.
Record can also support a union type as keys, but an index signature can't:
The first type argument is the key, and the second type argument is the value. 
This is a more concise way to achieve a similar result as an index signature.

Index signatures can't use literal types, but Record can.
*/ 
const albumAward: Record<string, boolean> = {};

albumAward.Grammy = true;

// supporting Record in union types
const albumAwards1: Record<"Grammy" | "MercuryPrize" | "Billboard", boolean> = {
    Grammy: true,
    MercuryPrize: false,
    Billboard: true
};

/*
Combining Known and Dynamic Keys
In many cases there will be a base set of keys we know we want to include, but we
also want to allow for additional keys to be added dynamically.
*/ 

type BaseAwards = "Grammy" | "MercuryPrize" | "Billboard";

type ExtendedAlbumAwards = Record<BaseAwards, boolean> & {
    [award:string]: boolean;
};

const extendedNominations: ExtendedAlbumAwards = {
    Grammy: true,
    MercuryPrize: false,
    Billboard: true,
    "American Music Awards": true,  // Additional awards can be dynamically added
};

console.log(extendedNominations);

/*
This technique would also work when using an interface and the extends keyword
This version is preferrable because in general interface extends is preferable to intersections
*/ 
interface BaseAwardsInt {
    Grammy: boolean,
    MercuryPrize: boolean,
    Billboard: boolean
}

interface ExtendedAlbumAwardsInt extends BaseAwardsInt {
    [award: string] : boolean;
};

const extendedNominationsInt: ExtendedAlbumAwardsInt = {
    Grammy: true,
    MercuryPrize: false,
    Billboard: true,
    "American Music Awards": true, 
};

console.log(extendedNominationsInt);

/*
propertyKey

The PropertyKey type is a global type that represents the set of all possible
keys that can be used on an object, including string, number, and symbol.
PropertyKey works with all possible keys, it's great for working with dynamic keys
where you aren't sure what the type of the key will be.
*/ 
declare type PropKey = string | number | symbol;

type Alb = {
    [key: PropKey]: string
};

/*
Object - global type in TypeScript
It represents more types than you might expect. Instead of representing only objects
like {} or new Object(), object represents any non-primitive type. This includes arrays, functions, and objects.
*/ 

// So a function like this:
function acceptAllNonPrimitives(obj: object) {}

// would accept any non-primitive value:
acceptAllNonPrimitives({});
acceptAllNonPrimitives([]);
acceptAllNonPrimitives(() => {});

// But error on primitives
acceptAllNonPrimitives(1);
acceptAllNonPrimitives("hello");
acceptAllNonPrimitives(true);


/*
Exercises
*/ 

// Using an Index Signature for Dynamic Keys
const scores: {
    [score: string] : number
} = {};

scores.math = 95;
scores.english = 90;
scores.science = 85;

// Default Properties with Dynamic Keys
interface Scores {
    // [score: string] : number, We can also add it here
    math: number,
    english: number,
    science: number
}

interface ExtendedScores extends Scores {
    [score: string] : number
}

const scoresA: ExtendedScores = {
    math: 80,
    english: 70,
    science: 98,
    "french": 89
};

scoresA.athletics = 100;
scoresA.spanish = 70;

// Restricting Object Keys With Records
type Environment = "development" | "production" | "staging";

type retn = {
    apiBaseUrl: string,
    timeout: number
};

type Configurations = Record<Environment,retn>;

const configurations: Configurations = {
    development: {
        apiBaseUrl: "http://localhost:8080",
        timeout: 5000
    },
    production: {
        apiBaseUrl: "https://api.example",
        timeout: 10000
    },
    staging: {
        apiBaseUrl: "https://staging.example.com",
        timeout: 8000
    },
    // Has squiggly lines because it's not in the Union
    // notAllowed: {
    //     apiBaseUrl: "https://staging.example.com",
    //     timeout: 8000
    // }
}

