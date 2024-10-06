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
    static MAX_HEALTH = 100;
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        return result
    }
}

class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"]

    constructor (name, role) {
        super(name);
        if (Adventurer.ROLES.includes(role)) {
            this.role = role
        } else {
            throw new Error(`Invalid role: ${role}. Must be one of: ${Adventurer.ROLES.join(', ')}`);
        }
        // Adventurers have specialized roles.
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
    duel(adventurer){
        while (this.health > 50 && adventurer.health >50 ){
            let hRoll = this.roll()
            let oRoll = adventurer.roll()

            if( hRoll > oRoll) {
                adventurer.health--
                console.log(`${this.name} attacks. ${adventurer.name} takes 1 damage. ${this.name}:${this.health}hp | ${adventurer.name}:${adventurer.health}hp`);
            } else if (hRoll == oRoll) {
                console.log("Stalemate");
                continue;
            } else {
                this.health--
                console.log(`${adventurer.name} attacks. ${this.name} takes 1 damage. ${this.name}:${this.health}hp | ${adventurer.name}:${adventurer.health}hp`);
            }
        } 

        if (this.health > adventurer.health) {
            console.log(`${this.name} is Victorious!`);
        } else {
            console.log(`${adventurer.name} is Victorious!`);
        }
    }

    kingPrefers(adventurer) {
        let shortestName = this.name.length > adventurer.name.length ? adventurer.name : this.name
        console.log(`the king prefers ${shortestName} simply because their name is shorter or he heard it first`);
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
const robin = new Adventurer("Robin", "Wizard");
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

robin.companion.companion.runAhead()

console.log("--------");

const ralph = new Adventurer("Ralphh", "Healer");

robin.duel(ralph);
robin.kingPrefers(ralph);


const gerald = new Adventurer("Gerald", "Fighter");
const gus = new Adventurer("Gus", "Healer");

gerald.duel(gus)
gerald.kingPrefers(gus)