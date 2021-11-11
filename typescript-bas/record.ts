// Import stylesheets
import './style.css';

interface Person {
  name: string;
  age: number;
  address: {};
}
interface CatInfo {
  age: number;
  breed: string;
}

// Record types stores values as dictionary

interface TrackStates {
  current: string;
  next: number;
}

type TrackStatesKeys = keyof TrackStates;

const dictionary: Record<TrackStatesKeys, CatInfo> = {
  current: { age: 10, breed: 'Persian' },
  next: { age: 10, breed: 'Halucan' },
};

console.log(dictionary);
