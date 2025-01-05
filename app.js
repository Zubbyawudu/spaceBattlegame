const humanAircraft = document.querySelector(".humanship");
const alienAircraft = document.querySelector(".alienspaceships");
const startGameIcon = document.querySelector(".startgameicon");
const header = document.querySelector("h1");
const headerStart = document.querySelector(".spaceh2");
const startbtn = document.querySelector("button");
const gameHistory = document.querySelector("#gamecomments");

// start game alert message
alert("Welcome , Click on earth icon to iniciate the game");

// Class object of the all the spaceships
class ship{
  constructor(name, hull , firepower, accuracy){
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;

  }

  // attack player function

  attack(target) {
    const hitChance = Math.random();
    if (hitChance < this.accuracy) {
      gameHistory.appendChild(document.createElement("p")).textContent = `${this.name} hits ${target.name}!`
      
      console.log(`${this.name} hits ${target.name}!`);
      
      target.hull -= this.firepower;

      gameHistory.appendChild(document.createElement("p")).textContent =`${target.name}'s hull is now ${target.hull}`

      console.log(`${target.name}'s hull is now ${target.hull}`);
    } else {
      
      console.log(`${this.name} missed the attack!`);

      gameHistory.appendChild(document.createElement("p")).textContent = `${this.name} missed the attack!`
    }
  }


  
}

// create a class for humanShip
class humanShip extends Ship{
  constructor(name, hull , firepower, accuracy){
    super("USS Assembly", 20 , 5, .7);
  }
}

// create a class for alienShip
class AlienShip extends Ship {
  constructor() {
    // generate Hull between 3 and 6
    const hull = Math.floor(Math.random() * 4) + 3; 
    
    // generate random Firepower between 2 and 4
    const firepower = Math.floor(Math.random() * 3) + 2;  
    
    // generate random accuracy between   0.6 and 0.8
    const accuracy = Math.random() * 0.2 + 0.6;  
    
    super(hull, firepower, accuracy);
  }
}

// class Alienship1 extends Ship {
//   constructor(){
//     super("Alienship 1", 4 , 2, .6);
//   }
// }
// class Alienship2 extends Ship {
//   constructor(){
//     super("Alienship 2", 5 , 3, .7);
//   }
// }
// class Alienship3 extends Ship {
//   constructor(){
//     super("Alienship 3", 6 , 3, .8);
//   }
// }

//create the battle logic 
const battle = (humanShip, AlienShip) => {

  while (humanShip.hull > 0 && AlienShip.hull > 0) {
    console.log(`Your hull: ${humanShip.hull}, AlienShip hull: ${AlienShip.hull}`);

    // humanShip attacks first

    humanShip.attack(AlienShip);

    if (AlienShip.hull <= 0) {
      
      console.log('You destroyed the AlienShip ship!');

      break;

    }

    // AlienShip attacks back if it survived

    AlienShip.attack(humanShip);

    if (humanShip.hull <= 0) {
      
      console.log('You have been destroyed!');

      break;

    }

  }

}