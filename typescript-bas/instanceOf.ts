// Import stylesheets
import './style.css';

class Song {
  constructor(public name: string, public duration: string) {}
}

class Playlist {
  constructor(public title: string, public songs: Song[]) {}
}

let getName = (song: Song | Playlist) => {
  if (song instanceof Song) return song.name;
  return song.title;
};

const beautifulStr = getName(new Song('Wonderful Tonight', '05:30'));
console.log(beautifulStr);

const beautifulPlaylist = getName(
  new Playlist('Top Jazz', [new Song('Hello', '05:23')])
);

console.log(beautifulPlaylist);
