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
constructor() {
  const hull = Math.floor(Math.random() * 4) + 3;  // generate a random hull  between 3 and 6
  const firepower = Math.floor(Math.random() * 3) + 2;  // generate a random firepower  between 2 and 5
  const accuracy = Math.random() * 0.2 + 0.6;  // generate a random accuracy between 0.6 and 0.8
  super(hull, firepower, accuracy);
}