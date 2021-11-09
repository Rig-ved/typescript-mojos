// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.querySelector('#app');
appDiv.innerHTML = `<h1>Is it yes or is it no</h1>`;

//interface

// Abstract classes dont allow new instances to be created
abstract class Extras {
  // private add: string;
  constructor(protected add: number) {}
  get addonsQty() {
    return this.add;
  }

  set addonsQty(qty: number) {
    this.add = qty;
  }
}

class Pizza extends Extras {
  private toppings: string[] = [];

  constructor(readonly name: string, add: number) {
    super(add);
  }

  defaultQty() {
    this.add = 10;
    return this.add;
  }

  addTopping(topping: string) {
    this.toppings.push(topping);
  }
  getToppings(): string {
    if (this.toppings.length === 0) return 'No toppings';
    return this.toppings.join(',');
  }
  getPizzaWithToppings() {
    return `You have one pizza named ${
      this.name
    } with ${this.getToppings()} with quantity as  ${this.addonsQty}`;
  }
}

var dom = new Pizza('Pepper', 1);
// console.log(dom);
dom.addTopping('mushroom');
dom.addTopping('slice');
console.log(dom.addonsQty);

console.log(dom.defaultQty());
dom.addonsQty = 123;
console.log(dom.addonsQty);
console.log(dom.getPizzaWithToppings());
