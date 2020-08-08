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


class Doctor extends Traveler{

    constructor (name, food, isHealthy) {
        super (name, food, isHealthy)

        
    }
    heal(Traveler) {
        Traveler.isHealthy === true
        
        
    }
}

class Hunter extends Traveler{
    
    constructor(name, food, isHealthy) {
        super(name, food, isHealthy)
        
        this.food = 2
    }

    hunt(name, food, isHealthy){
        this.food += 5

    }

    eat(name, food, isHealthy){
        this.food -= 2

    }

    givefood(Traveler, numberOfFoodUnits){
        
        if(this.food > 0){
         Hunter - numberOfFoodUnits + Traveler
       }

    }
}

// Create a wagon that can hold 4 people
let wagon = new Wagon(4);
// Create five travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');
console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);
wagon.join(maude); // There isn't room for her!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);
sarahunter.hunt(); // gets 5 more food
drsmith.hunt();
console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);
henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);
drsmith.heal(juan);
console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);
sarahunter.giveFood(juan, 4);
sarahunter.eat(); // She only has 1, so she eats it and is now sick
console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);