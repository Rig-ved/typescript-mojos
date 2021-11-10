// Import stylesheets
import './style.css';

interface Person {
  name?: string;
  age?: number;
}

type myRequired = Required<Person>;
const person: myRequired = {
  name: 'Todd',
  age: 12,
};

function printEmployee(obj: Required<Person>) {
  return obj;
}

const employee = printEmployee(person);

console.log(employee.name);
