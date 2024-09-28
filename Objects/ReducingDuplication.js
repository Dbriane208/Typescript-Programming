"use strict";
;
const patAlbm = {
    title: "Geogaddi",
    artist: "Board of Canada"
};
// creating a function which only accepts a subset of the album's properties
const updateAlbum = (album) => {
    return console.log(album);
};
updateAlbum(patAlbm);
;
// omitting some properties would lead to an error
const doubleCup = {
    title: "Double Cup",
    artist: "DJ Rashad",
    releaseYear: 2013,
    genre: "Juke"
};
