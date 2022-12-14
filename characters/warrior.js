const Pet = require("../summons/pet")
const Character = require("./character");
const mjolnir = require("../weapons/mjolnir")
class Warrior extends Character {
    constructor(name) {
     super(name, "warrior", 7, 2, 5, 4, 125, 75);
     const phoenix = new Pet("phoenix", 3);
     this.pets.push(phoenix);
     this.weapons.push(mjolnir);
     //this.spells.push();
    }
}
module.exports = Warrior;
console.log();