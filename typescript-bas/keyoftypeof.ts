// Import stylesheets
import './style.css';

const person = {
  name: 'Todd',
  age: 12,
};

// type of
type Person = typeof person;
type PersonKeys = keyof Person;
type PersonTypes = Person[PersonKeys];

const anotherPerson: Person = {
  name: 'Rick',
  age: 10,
};

const thirdPerson = {
  newName: 'Asasas',
};

// Look Up type
function getProperty<T, k extends keyof T>(obj: T, key: k) {
  if (obj[key]) return obj[key];
}

const name = getProperty(person, 'name');
console.log(name);
