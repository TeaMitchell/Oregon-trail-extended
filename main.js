class Traveler {
    constructor(name, food, isHealthy) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt() {

        this.food += 2
    }

    eat() {
        if (this.food < 1) {
            return this.isHealthy = false
        } else {
            this.food -= 1
        }

    }
}

class Wagon {
    constructor(capacity, passengers) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount() {
        let seatCount = this.capacity - this.passengers.length
        return seatCount
    }
    join(Traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(Traveler)
        }
    }
    shouldQuarantine() {
        let healthyPeople = this.passengers.some(Traveler => Traveler.isHealthy === false)
        return healthyPeople

    }

    totalFood() {

        let allFood = 0
        for (let index = 0; index < this.passengers.length; index += 1) {
            allFood += this.passengers[index].food
        }
        return allFood
    }
}


let wagon = new Wagon(2)
// Create three travelers
let henrietta = new Traveler('Henrietta')
let juan = new Traveler('Juan')
let maude = new Traveler('Maude')
console.log(`Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 2. The wagon starts with 2 seats. We haven't added travelers to the wagon yet.`)
wagon.join(henrietta)
console.log(`Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 1. Henrietta just joined.`)
wagon.join(juan)
wagon.join(maude)  // There is no room for her!
console.log(`Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 0 – There is no room for Maude, but Juan was able to join.`)
henrietta.hunt()   // Henrietta goes in search of food.
juan.eat()         // Juan eats – as Juan does. 🤣
juan.eat()         // Juan has run out of food!
console.log(juan)
console.log(`Wagon Should Quarantine?: ${wagon.shouldQuarantine()} – EXPECTED: true. Juan has run out of food and become unhealthy!`)
console.log(`Wagon's Total Food?: ${wagon.totalFood()} – EXPECTED: 3.`)