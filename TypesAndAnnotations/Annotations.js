"use strict";
/*
Annotations will often use a : - this is used to tell Ts that  a variable of function
parameter is of a certain type
When you don't annotate Ts defaults the type to any
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// functions parameters always need anotations
const logAlbumInfo = (title, trackCount, isReleased) => {
    // implementation
};
/*
Parameter help check if passed arguments are of correct type
If the type doesn't match up, TypeScript will show a squiggly red line
under the offending argument
 */
//logAlbumInfo("Black Gold",false,15)
// variable annotations but variable don't always need annotations
const albumTitle = "Midnights";
let isReleased = true;
let trackCount = 13;
/*
The any Type
This type breaks TypeScript's type system. It turns off type safety on the thing it's assigned to.
This means that anything can be assigned to it, any property on it can be accessed/assigned to,
 and it can be called like a function.
*/
const add = (a, b) => {
    return a + b;
};
const result = add(1, 2);
// type test = Expect<Equal<typeof result, number>>;
// Annotating Empty Parameters
const concatTwoStrings = (a, b) => {
    return [a, b].join(" ");
};
const r = concatTwoStrings("Daniel", "Brian");
console.log(r);
const talkToAnimal = (animal) => {
    // rest of function body
    return console.log(animal);
};
const an = {
    name: "Barbie",
    type: "Samoyed Dog"
};
talkToAnimal(an);
const getRectangleArea = (rectangle) => {
    return rectangle.height * rectangle.width;
};
const getRectanglePerimeter = (rectangle) => {
    return 2 * (rectangle.width + rectangle.height);
};
const rect = {
    width: 90,
    height: 40
};
console.log(getRectangleArea(rect));
console.log(getRectanglePerimeter(rect));
/*
Arrays and Tuples
The first option is the square bracket syntax.
The second option is to explicitly use the Array type with angle brackets
containing the type of data the array will hold:
*/
// option one
let albums = [
    "Rubber Soul",
    "Revolver",
    "Sgt. Pepper's Lonely Hearts Club Band",
];
let dates = [1965, 1966, 1967];
// option two
let albums0 = [
    "Rubber Soul",
    "Revolver",
    "Sgt. Pepper's Lonely Hearts Club Band",
];
let selectedDiscography = [
    {
        artist: "The Beatles",
        title: "Rubber Soul",
        year: 1965,
    },
    {
        artist: "The Beatles",
        title: "Revolver",
        year: 1966,
    },
];
// Ts will raise an error if we update with unmatching type
// selectedDiscography.push({name: "karma",type: "cat"})
/*
Tuples
Tuples let you specify an array with a fixed number of elements, where each element has its own type.
Creating a tuple is similar to an array's square bracket syntax - except the square brackets contain the types instead
of abutting the variable name:
Tuples are useful for grouping related information together without having to create a new type.
*/
let album = ["Rubber", 1965];
// grouping an album
let albumWithPlayCount = [
    {
        artist: "The Beatles",
        title: "Revolver",
        year: 1965
    },
    10000
];
const processCart = (cart) => {
    return console.log(cart);
};
processCart({
    userId: "user123",
    items: ["item1", "item2", "item3"]
});
const processRecipe = (recipe) => {
    // Do something with recipe in here
    return console.log(recipe);
};
processRecipe({
    title: "Chocolate Chip Cookies",
    ingredients: [
        { name: "Flour", quantity: "2 cups" },
        { name: "Sugar", quantity: "1 cup" }
    ],
    instructions: "..."
});
const setRange = (range) => {
    const x = range[0];
    const y = range[1];
    // Do something with x and y here
    // x and y should both be numbers
    return console.log(x + y);
};
const ar = [10, 10];
setRange(ar);
const loc = [10, 10];
const goToLocation = (coordinates) => {
    const latitude = coordinates[0];
    const longitude = coordinates[1];
    const elevation = coordinates[2];
    return console.log(latitude, longitude, elevation);
};
goToLocation(loc);
/*
Passing Types To Functions

We use angle brackets to pass types to functions
A Set is a JavaScript feature that represents a collection of unique values.
*/
/*
To create a set, use the new keyword and call set:
If we hover over the formats variable, we can see that it is typed as Set<unknown>.
That's because the Set doesn't know what type it's supposed to be! We haven't passed it any values,
so it defaults to an unknown type.
*/
const formats = new Set();
// When we pass some elements to the set TS knows the type of the set
const formats0 = new Set(["CD", "DVD"]);
// creating sets that we know which type they will contain, adding any other type will fail
const formats1 = new Set();
formats1.add("Heather");
const userMap = new Map();
userMap.set(1, { name: "Max", age: 30 });
userMap.set(2, { name: "Manuel", age: 31 });
const parsedData = JSON.parse('{"name": "Daniel","age": 48}');
console.log(parsedData);
// Typing Functions
/*
Optional Parameters
For cases where a function parameter is optional, we can add the ? operator before the :.
*/
const logAlbumInfo0 = (title, trackCount, isReleased, releaseDate) => {
    // rest of function body
};
// we can call logAlbumInfo
logAlbumInfo0("Midnights", 13, true, "2022-10-21");
logAlbumInfo0("American Beauty", 10, true);
/*
Default Parameters
You can set default values for parameters by using the = operator.
The annotation of :string can also be omitted
*/
const logAlbumInfo1 = (title, trackCount, isReleased, format = "CD") => {
    // rest of function body
};
// annotation removed
const logAlbumInfo2 = (title, trackCount, isReleased, format = "CD") => {
    // rest of function body
};
/*
Function Return Types
In addition to setting parameter types, we can also set the return type of a function.
The return type of a function can be annotated by placing a : and the type after the closing
parentheses of the parameter list.
*/
const logAlbumInfo3 = (title, trackCount, isReleased) => {
    // rest of function body
    return title;
};
/*
Rest Parameters
Just like in JavaScript, TypeScript supports rest parameters by using the ... syntax for the final parameter.
This allows you to pass in any number of arguments to a function.
*/
function getAlbumFormats(album, ...formats) {
    return `${album.title} is availabel in the following formats: ${formats.join(",")}`;
}
// Declaring the parameter with the ...formats syntax combined with an array of strings lets us pass in
// any number of strings to the function:
getAlbumFormats({ artist: "Radiohead", title: "OK Computer", year: 1997 }, "CD", "LP", "Cassette");
// we can also use spreading of array of strings
const albumFormats = ["CD", "LP", "Cassette"];
getAlbumFormats({ artist: "Radiohead", title: "OK Computer", year: 1997 }, ...albumFormats);
// We could then use this to describe a callback function passed to another function
const mapOverItems = (items, map) => {
    return items.map(map);
};
// using function type in callbacks
const mapOverItems0 = (items, map) => {
    return items.map(map);
};
// const db: UserData[] = [];
// // The return of an async function should be a promise
// const getUser = async (id: string): Promise<UserData> => {
//     const user = await db;
//     return user;
// };
// Exercise One and Two
const concatName = (first, last = "PocoCk") => {
    return `${first} ${last}`;
};
const result2 = concatName("John");
console.log(result2);
// Exercise Three
function concatenate(...strings) {
    return strings.join("");
}
// Exercise Four
const modifyUser = (user, id, makeChange) => {
    return user.map((u) => {
        if (u.id === id) {
            return makeChange(u);
        }
        return u;
    });
};
const users = [
    { id: "1", name: "John" },
    { id: "2", name: "Jane" },
];
modifyUser(users, "1", (user) => {
    return Object.assign(Object.assign({}, user), { name: "Waqas" });
});
// Exercise Six
// Void tells ts to ignore the return value when comparing them
// In js a function that doesnt return anything its value is undefined eg console.log("Hello")
const acceptsCallback = (callback) => {
    callback();
};
const returnString = () => {
    return "Hello!";
};
acceptsCallback(returnString);
// Exercise Seven
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.example.com/data");
        const data = yield response.json();
        return data;
    });
}
;
