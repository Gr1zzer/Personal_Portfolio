// This Program/Project is a turn based system kind of deal.
// Shawn Pocock Feb.3rd, 2023
// Also I have reccemended coding extentions
// Color Highlight
// ESLint
// Live Server
// Material Icon
// Prettier - Code

// Creating the player object
let legendary_player = {
  // These are your stats
  hp: 50,
  attack: 10,
  defence: 15,
  magic: 25,
  // These are your attacks
  spells: ["FireBall", "WaterWarp", "AirPulse", "EarthTremours"],
};

// Creating the bandit object
let bandit = {
  // These are the bandit's stats
  hp: 30,
  attack: 15,
  defence: 10,
  magic: 5,
  // These are the attacks of the bandit
  spells: ["AirPulse", "WaterWarp", "FireBall", "EarthTremours"],
};
// This function will start the battle
function theBattle(legendary_player, bandit) {
  {
    // Starts a loop for if the health of both are over 0 to keep going
    while (legendary_player.hp > 0 || bandit.hp > 0) {
      // These will decide if the player hits or not
      if (legendary_player.attack < bandit.defence) {
        console.log("You used a " + legendary_player.spells[2]);
        console.log("Oh no his defence is to tough.");
      } else if (legendary_player.attack == bandit.defence) {
        console.log("You used a " + legendary_player.spells[1]);
        console.log("It was tough but you hit him");
        bandit.hp -= legendary_player.attack / 2;
      } else {
        console.log("You used a " + legendary_player.spells[3]);
        console.log("You hit the bandit, good job!");
        bandit.hp -= legendary_player.attack;
      }
      // Checks if the bandit hits or not.
      if (legendary_player.defence > bandit.attack) {
        console.log("The bandit used a " + bandit.spells[0]);
        console.log("You resisted the attack!");
      } else if (legendary_player.defence == bandit.attack) {
        console.log("The bandit used a " + bandit.spells[3]);
        console.log("You got hit, but you resisted most of it.");
        legendary_player.hp -= bandit.attack / 3;
      } else {
        console.log("The bandit used a " + bandit.spells[0]);
        console.log("You got hit, but you didn't resist it");
        legendary_player.hp -= bandit.attack;
      }
    }
  }
}

//This will print the final result of the battle
function theEnding(legendary_player, bandit) {
  if (legendary_player.hp == 0) {
    console.log("You lost guess you weren't ready.");
  } else if (legendary_player < 0) {
    console.log("How did you do this??");
  } else {
    console.log("Congragulations you beat the first enemy!");
  }
}
// Calls the functions in order
theBattle(legendary_player, bandit);
theEnding(legendary_player, bandit);
