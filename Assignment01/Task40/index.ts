interface Album {
  artist: string;
  album: string;
  tracks?: number;
}

function make_album(artist: string, album: string, tracks?: number): Album {
  let return_album: Album = {
    artist,
    album,
  };

  if (tracks !== undefined) {
    return_album.tracks = tracks;
  }

  return return_album;
}

const album1 = make_album("The Beatles", "Abbey Road");
const album2 = make_album("The Band", "Angelina Road", 12);
const album3 = make_album("The Doors", "Jolie Road", 8);

console.log(album1);
console.log(album2);
console.log(album3);
