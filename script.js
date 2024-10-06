let roll = function(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
}

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    roll
}

adventurer.inventory.forEach((item)=>{
    console.log(item);
})

adventurer.companion = {
    name: "Leo",
    type: "Cat"
}

adventurer.companion.companion = {
    name: "Frank",
    type: "Flea",
    belongings: ["small hat", "sunglasses"]
}

adventurer.roll()
adventurer.roll()
adventurer.roll()

class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log("--------");

robin.roll()
robin.companion.roll()
robin.companion.companion.roll()

console.log("--------");


