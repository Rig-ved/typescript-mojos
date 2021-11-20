interface Generic<T, U> {
  name: T;
  age: U;
}

const numeric: Generic<number, number> = {
  name: 4,
  age: 12,
};

const stringified: Generic<string, number> = {
  name: 'Asasas',
  age: 12,
};

const getField: Generic<number, string> = {
  name: 12,
  age: '212',
};
