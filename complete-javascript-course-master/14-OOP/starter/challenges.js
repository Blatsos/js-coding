'use strict';

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// const bmw = new Car(`BMW`, 120);
// const mercedes = new Car(`Mercedes`, 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();

// mercedes.accelerate();
// mercedes.brake();
// mercedes.brake();

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

class ClassCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(val) {
    this.speed = val * 1.6;
  }
}

// const ford = Object.create(Car);
// ford.init(`Ford`, 120);
// ford.accelerate();
// ford.brake();
// console.log(ford.speedUS);
// ford.speedUS = 88;
// console.log(ford.speedUS);

// const EVCl = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EVCl.prototype = Object.create(Car.prototype);

// EVCl.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EVCl.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };

class EvCl extends ClassCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}

const rivian = new EvCl(`Rivian`, 120, 23);
rivian
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(60)
  .accelerate()
  .accelerate();
console.log(rivian.speedUS);

// const tsl = new EVCl(`Tesla`, 120, 23);
// tsl.chargeBattery(90);
// console.log(tsl);
// tsl.brake();
// tsl.accelerate();
