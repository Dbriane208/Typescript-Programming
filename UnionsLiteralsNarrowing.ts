// A union type is TypeScript's way of saying that a value can be "either this type or that type".
// we use (|) operator to create a union.

// 1. Declaring union types
const logId = (id: string | number) => {
    console.log(id);
}

logId('abcd')
logId(123)
//logId(true)  // logId can accept either a string or a number as argument


// using type aliases
type Id = number | string

function loggId(id: Id) {
    console.log(id);
}

/*
Union types can contain many different types - they don't all have to be primitives, 
or don't need to be related in any way. When they get particularly large, you can use 
this syntax (with the | before the first member of the union) to make it more readable:
*/ 
type AllSortOfStuff = 
    | string
    | number
    | boolean
    | object
    | null
    | {
        name: string
        age: number
    }


/*2. Literal Types
Just as TypeScript allows us to create union types from multiple types, 
it also allows us to create types which represent a specific primitive value. 
These are called literal types.

Literal types can be used to represent strings, numbers, or booleans that have specific values.
*/ 

type YesOrNo = 'yes' | 'no' // YesOrNo can only be one of these two strings
type StatusCode = 200 | 404 | 500


/*
3. Combining Unions With Unions
*/ 
type DigitalFormat = 'MP3' | 'FLAC'
type PhysicalFormat = 'LP' | 'CD' | 'Casssette'

/*
We could specify AlburmFormat as a union of DigitalFormat and PhysicalFormat
Now, we can use the DigitalFormat type for functions that handle digital formats, 
and the AnalogFormat type for functions that handle analog formats. The AlbumFormat type 
can be used for functions that handle all cases. This way, we can ensure that each function only handles 
the cases it's supposed to handle, and TypeScript will throw an error if we try to pass an incorrect format to a function
*/ 
type AlbumFormat = DigitalFormat | PhysicalFormat

const getAlbumFormats = (format: PhysicalFormat) => {
    // function body
}

// throws an error MP# is not assignable to parameter of type 'PhysicalFormat
// getAlbumFormats('MP3')


// Unions and Literals Exercise
function getUsername(username: String | null) {
    if(username !== null){
        return `User: ${username}`
    }else{
        return 'Guest'
    }
}

// const result = getUsername('Alice')
// type test = Expect<Equal<typeof result, string>>

// const result2 = getUsername(null) // null want assaignable to username and we had to use union
// type test2 = Expect<Equal<typeof result2, string>>

// Exercise 2: Restricting functions
function move(direction: string, distance: number){
    if(typeof direction !== 'string' && typeof distance !== 'number'){
        throw new Error('Direction should be string and distance should be number')
    }
}

// test cases
move('up', 10)
move('left', 5)