function make_album(artist, album, tracks) {
    var return_album = {
        artist: artist,
        album: album,
    };
    if (tracks !== undefined) {
        return_album.tracks = tracks;
    }
    return return_album;
}
var album1 = make_album("The Beatles", "Abbey Road");
var album2 = make_album("The Band", "Angelina Road", 12);
var album3 = make_album("The Doors", "Jolie Road", 8);
console.log(album1);
console.log(album2);
console.log(album3);
