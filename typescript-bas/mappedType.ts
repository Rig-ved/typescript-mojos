interface Music {
  song: string;
  trackInfo: number;
  duration: number;
  artist: string;
}

type Infer<type> = { [property in keyof type]: boolean };

type guitar = Infer<Music>;

const vanHalen: Pick<guitar, 'artist'> = {
  artist: true,
};
