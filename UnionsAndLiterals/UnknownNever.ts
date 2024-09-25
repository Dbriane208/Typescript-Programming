/*
The Wildest Type: unknown
Typescript's widest type is unknown. It represents something that we don't know what it is
*/ 
const fn = (input: unknown) => {
    console.log(input);
}

// Anything is assignable to unknown!
fn('hello')
fn(42)
fn(true)
fn({})
fn([])
fn(() => {})

// All the above function calls are valid because unknown is assignable to any other type
// The unknown type is the preferred choice when you want to represent something that's truly unknowm in Js.

/*
Difference between unknown and any
any doesn't really fit into our definition of 'wide' and 'narrow' types. It breaks the type system. It's not really a type at all - it's a way of opting out of TypeScript's type checking.
any can be assigned to anything, and anything can be assigned to any. any is both narrower and wider than every other type.
unknown, on the other hand, is part of TypeScript's type system. It's wider than every other type, so it can't be assigned to anything.
*/ 
const handleWebhookInput = (input: unknown) => {
   // input.toUppercase()
}

const handleWebhookInputWithAny = (input: any) => {
    input.toUppercase()
}

// This shows us that unknowm is a safe type, but any is not.
