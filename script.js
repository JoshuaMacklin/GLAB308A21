const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
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

