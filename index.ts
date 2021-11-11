// Import stylesheets
import './style.css';

// Intersection types

interface Music {
  type: string;
  solo: boolean;
}

interface Guitar {
  classical: boolean;
}

type percussionSolo =  Music & Guitar

const gibson:Guitar =  {
  classical:true
}


console.log(gibson)

const orchestra:percussionSolo = {
    type:'strings',
    solo:true,
    ...gibson
}

console.log(orchestra)