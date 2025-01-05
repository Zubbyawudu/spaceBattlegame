const humanAircraft = document.querySelector(".humanship");
const alienAircraft = document.querySelector(".alienspaceships");
const startGameIcon = document.querySelector(".startgameicon");
const header = document.querySelector("h1");
const headerStart = document.querySelector(".spaceh2");
const startBtn = document.querySelector("button");
const gameHistory = document.querySelector("#gamecomments");
const instructions = document.querySelector(".instrcutions");
const howToPlay = document.querySelector("#howtoplay");
const battleHistory = document.querySelector("#battlehistory");
const htpContainer = document.querySelector(".commentscontainer");
// start game alert message
alert("Welcome , After reading the instructions Click on earth icon to initiate the game");

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
      gameHistory.appendChild(document.createElement("p")).textContent = `${this.name} shoots ${target.name}!`
      
      console.log(`${this.name} hits ${target.name}!`);
      
      target.hull -= this.firepower;

      gameHistory.appendChild(document.createElement("p")).textContent =`${target.name}'s lifeline is now ${target.hull}`

      console.log(`${target.name}'s hull is now ${target.hull}`);
    } else {
      
      console.log(`${this.name} missed the attack!`);

      gameHistory.appendChild(document.createElement("p")).textContent = `${this.name} missed his shot!`
    }
  }


  
}

// create a class for humanShip
class humanShip extends ship{
  constructor(name, hull , firepower, accuracy){
    super("USS Assembly", 20 , 5, .7);
  }
}

// create a class for alienShip
class AlienShip extends ship {
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
    
    gameHistory.appendChild(document.createElement("p")).textContent = `Your lifeline is : ${humanShip.hull}, AlienShip lifeline is : ${AlienShip.hull}`
    
    console.log(`Your lifeline: ${humanShip.hull}, AlienShip lifeline: ${AlienShip.hull}`);

    // humanShip attacks first

    humanShip.attack(AlienShip);

    if (AlienShip.hull <= 0) {
      gameHistory.appendChild(document.createElement("p")).textContent = 'Great Job! You destroyed the AlienShip ship!'
      
      console.log('You destroyed the AlienShip ship!');

      break;

    }

    // AlienShip attacks back if it survived

    // AlienShip.attack(humanShip);

    if (humanShip.hull <= 0) {
      gameHistory.appendChild(document.createElement("p")).textContent = 'Your ship has been destroyed!'
      
      console.log('You have been destroyed!');

      break;

    }

  }

}

// Main game function 
const game = () => {
  const humanShips = new humanShip();
  const alienShips = [
    { name: "AlienShip 1", hull: 4, firepower: 2, accuracy: 0.6 },
    { name: "AlienShip 2", hull: 5, firepower: 3, accuracy: 0.7 },
    { name: "AlienShip 3", hull: 6, firepower: 4, accuracy: 0.8 },
  ];

  let gameOver = false;

  // Loop through each alien ship and attack the human ship
  for (let i = 0; i < alienShips.length; i++) {
    if (gameOver) break;


    battle(humanShips, alienShips[i]);


    if (humanShips.hull <= 0) {
      gameHistory.appendChild(document.createElement("p")).textContent = 'Game Over!'
      console.log('Game Over!');
      gameOver = true;
    }else{
      const retreat = window.prompt('Do you want to attack the next alien ship? (yes or no)');
      if (retreat.toLowerCase() === 'no') {
        console.log('You chose to retreat!');
        gameOver = true;
      }
    }
  }

  if (humanShips.hull > 0) {
    gameHistory.appendChild(document.createElement("p")).textContent = 'Bravo! You have Saved the planet Earth!'
    console.log('You have destroyed all the aliens and won the game!');
  }

}

// Start Game Function

const startGame = () => {
  humanAircraft.style.display = "flex";
  alienAircraft.style.display = "flex";
  startGameIcon.style.display = "none";
  header.style.display = "none";
  headerStart.style.display = "block";
  startBtn.style.display = "block";
 
  howToPlay.style.display = "none";
  battleHistory.style.display = "block";
  htpContainer.style.display = "none";

}
startGameIcon.addEventListener("click", startGame);

//Start to Play button
const play = () =>{
  headerStart.style.display = "none";
  startBtn.style.display = "none";
  game();
}
startBtn.addEventListener("click", play);
