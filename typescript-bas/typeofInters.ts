// Import stylesheets
import './style.css';

class Song {
  constructor(public name: string, public duration: string | number) {}
}

let getDurationFromInst = (song: Song): string => {
  if (typeof song.duration === 'string') {
    return song.duration;
  }
  const { duration } = song;
  const minutes = new Date(duration).getMinutes();
  const seconds = new Date(duration).getSeconds();
  return `${minutes}:${seconds}`;
};

const beautifulStr = getDurationFromInst(
  new Song('Wonderful Tonight', '05:30')
);
console.log(beautifulStr);
const beautifulMs = getDurationFromInst(
  new Song('Hey there Dellailah', 330000)
);
console.log(beautifulMs);
