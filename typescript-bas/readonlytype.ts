// Import stylesheets
import './style.css';

interface Person {
  name: string;
  age?: number;
}

const person: Person = {
  name: 'Todd',
  age: 12,
};
// Mapped type
function freeze<T>(obj: T): Readonly<T> {
  return Object.freeze(obj);
}

const frozenPerson = freeze(person);
