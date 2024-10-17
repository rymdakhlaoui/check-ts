"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        // console.log( "the Car engine started");
        console.log(` The ${this.make} ${this.model} engine started`);
    }
}
let car1 = new Car("Ford", "Fiesta", 2016);
let car2 = new Car("Volkswagen", "Passat", 2012);
let car3 = new Car("Mercedes", "E 300", 2020);
car1.start();
car2.start();
car3.start();
