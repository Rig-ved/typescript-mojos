interface character {
  readonly name: string;
  readonly age: number;
}
type mutable<Type> = {
  -readonly [property in keyof Type]: Type[property];
};

type character1 = mutable<character>;
