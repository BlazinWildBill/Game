const Pet = require("../summons/pet");
const Character = require("./character");
class Paladin extends Character {
    constructor(name) {
    super(name, "paladin", 3, 2, 8, 2, 200, 50);
    const wolf = new Pet("wolf", 3);
    this.pets.push(wolf);
    }
}
module.exports = Paladin;

