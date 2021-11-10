// Import stylesheets
import './style.css';

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: 'Todd',
  age: 12,
};

type Hello = typeof person;
const anotherPerson: Partial<Person> = {
  name: 'Todd',
};

type HelloKeys = keyof Hello;

// Mapped type
function freeze<T>(obj: T): Readonly<T> {
  return Object.freeze(obj);
}

const frozenPerson = freeze(anotherPerson);
console.log(typeof frozenPerson);
