// Import stylesheets
import './style.css';

interface Person {
  name: string;
  age: number;
  address: {};
}

//Pick type
const person: Pick<Person, 'name'> = {
  name: 'todd',
};
