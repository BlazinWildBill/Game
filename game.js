//this  is where our game logic is going to go. 
//we will put the mechanics of our game here, and slowly
//build it over the next few lessons.


// i want to create a new warlock in my game.
// the warlock is not located in this file. the warlock FACTORY, that is
// the actual warlock itself should be located in thiss file. it's the game!

//how should i go about getting the warlock class from another file?
// module.exports = object // is how you export &
// const object = require("./object") is how we can import from another file! 

//const Pet = require("./summons/pet");


const Mage = require("./characters/mage");

const Paladin = require("./characters/paladin");

const Warrior = require("./characters/warrior");

const mage = new Mage("MagicHorsey");
console.log(mage);

const paladin = new Paladin("Palahorse");
console.log(paladin);

const warrior = new Warrior("Thorsey");
console.log(warrior);

warrior.levelUp();
 console.log(warrior);


//const meowgi = new Pet("Mr.Meowgi");
//console.log(meowgi);

//const tempie = new Pet("Tempie");
//console.log(tempie);

// tempie and meowgi are currently unassigned 12/11/2022

// edit: moved bat within warlock
//const pet = new Pet("Bat");
//console.log(bat);
//edit: moved eagle within shaman
//const eagle = new Pet("Eagle");
//console.log(eagle);