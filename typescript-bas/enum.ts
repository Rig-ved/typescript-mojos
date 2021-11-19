// Import stylesheets
import './style.css';

// Intersection types

interface Music {
  type: string;
  solo: boolean;
}

enum vehicles {
  TwoWheeler,
  ThreeWheeler,
  FourWheeler,
}

console.log(vehicles[1] === 'ThreeWheeler');
console.log(vehicles.ThreeWheeler);
