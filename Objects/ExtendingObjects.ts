/*
INTERSECTION TYPES
An intersection type lets us combine multiple object types into a single type. It uses the &
operator. It signifies an and relationship
*/

type Album = {
  title: string;
  artist: string;
  releaseYear: number;
};

type SalesData = {
  unitsSold: number;
  revenue: number;
};

/*
Using & operator to create an intersection type that allows us to combine the two types into 
a single type that represents an album's sales data.
The AlbumSales type now requires objects to include all of the properties from both AlbumDetails
and SalesData
*/

type AlbumSales = Album & SalesData;

const wishYouWereHereSales: AlbumSales = {
  title: "Wish You Were Here",
  artist: "Pink Floyd",
  releaseYear: 1975,
  unitsSold: 13000000,
  revenue: 65000000,
};

// We can also intersetct more than two types: Useful for creating new types from existing ones.
type AlbumSales0 = Album & SalesData & { genre: string };

/*
Intersection Types With Primitives
Trying to intersect string and number  results to never. This is because string and number
have innate properties that can't be combined together.
*/

type StringAndNumber = string & number;

/*
This also happens when you intersect two object types with and incompatible property.
In this case the age property resolves to never because it's impossible for a single property to be
both a number and a string.
*/
type User1 = {
  age: number;
};

type User2 = {
  age: string;
};

type User = User1 & User2;

/*
INTERFACES

Interfaces let you declare object types using a slightly different syntax to type.
Let's compare the syntax:
They're largely identical, except for the keyword and an equals sign. But it's a common mistake 
to think of them as interchangeable. They're not.
*/

type Album1 = {
  title: string;
  artist: string;
  releaseYear: number;
};

interface Album2 {
  title: string;
  artist: string;
  releaseYear: number;
}

/*
Interface extends
One of interface's most powerful features is its ability to extend other interfaces.
This allows you to create new interfaces that inherit properties from existing ones.
*/

interface StudioAlbum extends Album2 {
  studio: string;
  producer: string;
}

interface LiveAlbum extends Album2 {
  concertVenue: string;
  concertDate: Date;
}

/*
This structure allows us to create more specific album representations with a clear inheritance
relationship
*/
const americanBeauty: StudioAlbum = {
  title: "American Beauty",
  artist: "Grateful Dead",
  releaseYear: 1970,
  studio: "Wally Heider Studios",
  producer: "Grateful Dead and Stephen Barncard",
};

const oneFromTheVault: LiveAlbum = {
  title: "One from the Vault",
  artist: "Grateful Dead",
  releaseYear: 1991,
  concertVenue: "Great American Music Hall",
  concertDate: new Date("1975-08-13"),
};

// We can also extend interface to multiple other interfaces by separating with commas;
interface BoxSet extends StudioAlbum, LiveAlbum {
  numberOfDiscs: number;
}

const box: BoxSet = {
  title: "American Beauty",
  artist: "Grateful Dead",
  releaseYear: 1970,
  studio: "Wally Heider Studios",
  producer: "Grateful Dead and Stephen Barncard",
  concertVenue: "Great American Music Hall",
  concertDate: new Date("1975-08-13"),
  numberOfDiscs: 45000000,
};

/*
Intersection vs interface extends

You should choose interface extends for two reasons:
    - Better errors when merging incompatible types
    - Better Typescript performance

Types Can be anything - Union types, object types, intersection types etc
An interface can only represent object types
*/

// interface User3 {
//     age: number;
// };

// interface p extends User3 {
//     age: string;
// };

/*
When multiple interfaces with the same name in the same scope are created, 
TypeScript automatically merges them. This is known as declaration merging.
*/

interface Albumx {
  title: string;
  artist: string;
}

interface Albumx {
  releaseYear: number;
  genres: string[];
}

// under the hood ts will combine them
interface Albumx {
  title: string;
  artist: string;
  releaseYear: number;
  genres: string[];
}

/*
This is very different from type, which would give you an error if you tried to declare
the same type twice:
*/

// types don't allow declaration mapping
/*
type Album = {
  title: string;
  artist: string;
};

type Album = {
  releaseYear: number;
  genres: string[];
};
*/

// Exercise
type User4 = {
  name: string;
  email: string;
}& BaseEntity ;

type Product = {
  name: string;
  price: number;
}& BaseEntity;

type BaseEntity = {
  id: string,
  createdAt: Date
};

// using interfaces
interface BaseEntityX {
  id: string,
  createdAt: Date
};

interface ProductX extends BaseEntityX {
  name: string,
  price: number
};

interface UserX extends BaseEntity {
  email: string
};

