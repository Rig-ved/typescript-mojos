// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

//

class Extras {
  private add: string;
  constructor() {}
  get addons() {
    return this.add;
  }

  set addons(name: string) {
    this.add = name;
  }
}

class Pizza extends Extras {
  private toppings: string[] = [];

  constructor(readonly name: string) {
    super();
  }

  addTopping(topping: string) {
    this.toppings.push(topping);
  }
  getToppings(): string {
    if (this.toppings.length === 0) return 'No toppings';
    return this.toppings.join(',');
  }
  getPizzaWithToppings() {
    return `You have one pizza named ${this.name} with ${this.getToppings()}`;
  }
}

var dom = new Pizza('Pepper');
// console.log(dom);
dom.addTopping('mushroom');
dom.addTopping('slice');
dom.addons = 'mocha';
console.log(dom.addons);
console.log(dom.getPizzaWithToppings());
