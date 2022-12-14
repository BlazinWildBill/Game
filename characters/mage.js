const Character = require("./character");
const fireball = require("../spells/fireball");
const healingAura = require("../spells/healingaura");

class Mage extends Character {
    constructor(name) {
    super(name, "mage", 2, 7, 3, 5, 50, 200);
     this.spells.push(fireball);
     this.spells.push(healingAura);
    }
}
module.exports = Mage;