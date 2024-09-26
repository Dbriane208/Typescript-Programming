"use strict";
// The Problem: The Bag Of Optionals
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// And let's imagine we have a renderUI function that returns a string based on the input.
const renderUI = (state) => {
    var _a;
    if (state.status === "loading") {
        return "Loading...";
    }
    // Without checking type safety we cannot call the state.error or data since they can be undefined
    if (state.status === "error") {
        return `Error: ${(_a = state.error) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
    }
    if (state.status === "success") {
        return `Data: ${state.data}`;
    }
};
/*
Without using type safety we can now remove the error
This is due to TypeScript's narrowing - it knows that state.status is "error",
so it knows that state.error is a string inside of the if block.
*/
const renderUI0 = (state) => {
    if (state.status === "loading") {
        return "Loading...";
    }
    // we can now call to uppercase without checking for type safety
    if (state.status === "error") {
        return `Error: ${state.error.toUpperCase()}`;
    }
    if (state.status === "success") {
        return `Data: ${state.data}`;
    }
};
const sq = {
    kind: "square",
    sideLength: 70
};
const cle = {
    kind: "circle",
    radius: 56
};
function calculateArea(shape) {
    if (shape.kind == "circle") {
        // using destructuring to extract values
        const { radius } = shape;
        return Math.PI * radius * radius;
    }
    else if (shape.kind == "square") {
        const { sideLength } = shape;
        return sideLength * sideLength;
    }
}
console.log(calculateArea(sq));
// Using switch to destructure 
function calculateArea0(shape) {
    switch (shape.kind) {
        case 'circle':
            const { radius } = shape;
            return Math.PI * radius * radius;
        case 'square':
            const { sideLength } = shape;
            return sideLength * sideLength;
    }
}
console.log(calculateArea0(cle));
// Handling Defaults with a Discriminated Union
function calculateArea1(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius * shape.radius;
    }
    else if (shape.kind === 'square') {
        return shape.sideLength * shape.sideLength;
    }
    else {
        return Math.PI * shape.radius * shape.radius;
    }
}
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://api.example.com/data');
            if (!response.ok) {
                return [
                    'error',
                    // Imagine some improved error handling here
                    'An error occurred',
                ];
            }
            const data = yield response.json();
            return ['success', data];
        }
        catch (error) {
            return ['error', 'An error occurred'];
        }
    });
}
function exampleFunc() {
    return __awaiter(this, void 0, void 0, function* () {
        const [status, value] = yield fetchData();
        if (status === 'success') {
            console.log(value);
        }
        else {
            console.error(value);
        }
    });
}
