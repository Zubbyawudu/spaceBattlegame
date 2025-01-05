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

