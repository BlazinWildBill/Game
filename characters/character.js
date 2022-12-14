//const Mage = require("./mage");
//const Paladin = require("./paladin");
//const Warrior = require("./warrior");
//const Summons = require("../summons/pet");
class Character {
    constructor(name, className, attack, magic, defense, speed, health, mana) {
    this.name = name;
    this.className = className;
    this.level = 1;
    this.attack = attack;
    this.magic = magic;
    this.defense = defense;
    this.speed = speed;
    this.health = health;
    this.mana = mana;
    this.spells = [];
    this.weapons = [];
    this.pets = [];
    this.activePet = null;
    }
    levelUp() {
        this.level = this.level + 1;
        if(this.className === "mage") {
            console.log("leveling up", this.className);
            this.mana = this.mana + 17;
            this.magic = this.magic + 1;
        } else if(this.className === "paladin") {
            console.log("leveling up", this.className);
            this.attack = this.attack + 1;
            this.health = this.health + 12;
            this.mana = this.mana + 6;
        } else if(this.className === "warrior") {
            console.log("leveling up", this.className);
            this.attack = this.attack + 2;
            this.health = this.health + 9;
            this.speed = this.speed + 1;
            this.mana = this.mana + 8;
        }      
    }

getDamage() {
    if(this.activePet) {
        const petDamage = this.activePet.damage;
        const magicDamage = this.magic;
        return petDamage + magicDamage;
    }
}

summonPet(petName) {
    for (let i =0; i < this.pets.length;i++) {
        const pet = this.pets[i];
        if(pet.Name === petName) {
            this.activePet = pet;
        }
    }
}

addWeapon(weapon) {
    this.weapons.push(weapon);
}

equipWeapon(weaponName) {
    for(let i=0; i <this.weapons.length;i++) {
        const weapon = this.weapons[i];
        if(weapon.name === weaponName) {
            this.equippedWeapon = weapon;
            }
    
        }


    }
}
module.exports = Character;