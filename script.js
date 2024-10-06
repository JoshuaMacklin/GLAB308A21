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

class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
    sleep() {
        console.log(`${this.name} takes a nap...`);
        super.roll()
    }
}

class Companion extends Character {
    constructor (name, role) {
        super(name);
        this.role = role;
    }
    runAhead() {
        console.log(`${this.name} runs ahead...`);
        super.roll()
    }
}
const robin = new Adventurer("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Companion("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Companion("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log("--------");

robin.roll()
robin.companion.roll()
robin.companion.companion.roll()

console.log("--------");
robin.companion.companion.runAhead()