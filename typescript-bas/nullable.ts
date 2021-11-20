type Duck = {
  kind: 'duck';
  quack: () => 'quack';
};

type Nullable<T> = { [P in keyof T]: T[P] | boolean | null };
type NullableDuck = Nullable<Duck>;

const nullDuck: NullableDuck = {
  kind: 'asassas',
  quack() {
    return 'quack';
  },
};
