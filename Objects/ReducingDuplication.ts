/*
Partial
The Partial utility type lets you create a new object type from an existing one,
except all of its propeties are optional
Using Partial utility type and passing in Album, we can create a type that allows
us to update any subset of an album's properties
*/ 
interface AlbumX {
    id: number,
    title: string,
    artist: string,
    releaseYear: number,
    genre: string
};

// PartialAlbumX has all properties optional
type PartialAlbumX = Partial<AlbumX>

const patAlbm: PartialAlbumX = {
    title: "Geogaddi",
    artist: "Board of Canada"
};

// creating a function which only accepts a subset of the album's properties
const updateAlbum = (album: PartialAlbumX) => {
    return console.log(album);
};

updateAlbum(patAlbm);

/*
Required makes sure all of the properties of a given object type are required
*/ 
interface Albm {
    title: string,
    artist: string,
    releaseYear?: number,
    genre?: string
};

type RequiredAlbum = Required<Albm>

// omitting some properties would lead to an error
const doubleCup: RequiredAlbum = {
    title: "Double Cup",
    artist: "DJ Rashad",
    releaseYear: 2013,
    genre: "Juke"
};

/*
Required with nested properties would not make the Required<Album> children required
*/
type AlbmX = {
    title: string,
    artist: string,
    releaseYear?: number,
    genre?: {
        parentGenre?: string,
        subGenre?: string
    };
};

type RequiredAlbumX = Required<AlbmX>

/*
Pick utility type allows you to create a new object type by picking certain properties from an existing
project
*/ 
type AlbumData = Pick<Albm, "title"|"artist">

/*
Omit
It allows you to create a new type by excluding a subset of properties from an existing type
*/ 
type AlbData = Omit<Albm, "id"|"releaseYear"|"genre">