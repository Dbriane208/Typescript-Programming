const acceptsObj = (obj: {
    foo: string,
    bar: number,
    baz: boolean
}) => {
console.log(obj);
};

acceptsObj({
    foo: "Hello",
    bar: 123,
    baz: false
});


type MY_Album = {
    artist: string,
    title: string,
    year: number
}

const album: MY_Album = {
    artist: "Tv",
    title: "Equalizer",
    year: 2024
}

console.log(album);
