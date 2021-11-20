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

interface Aukaat {
  firstname: string;
  lastname: string;
}

type Expression = {
  firstName: string;
  lastName: string;
  address: {
    zip: number;
    city: string;
    state: string;
    country: string;
  };
};
type setters<Type> = {
  [property in keyof Type as `set${Capitalize<
    string & property
  >}`]: Type[property];
};
type lasOnly<Type> = {
  [property in keyof Type as Exclude<property, 'firstName'>]: Type[property];
};
type addressOnly<Type> = {
  [property in keyof Type as Extract<property, 'address'>]: Type[property];
};
const lastName: lasOnly<Expression> = {
  lastName: 'asas',
  address: {
    zip: 4545445,
    city: 'Bengaluru',
    state: 'Karn',
    country: 'India',
  },
};

const address: Expression['address'] = {
  zip: 11212,
  city: 'assa',
  state: 'asas',
  country: 'asaas',
};
