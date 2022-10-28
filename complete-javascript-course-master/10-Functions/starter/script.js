'use strict';

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet(`Hey`);
// greeterHey(`Jonas`);
// greeterHey(`Steven`);

// greet(`Hello`)(`Blatsos`);

const lufthansa = {
  airline: `Lufthansa`,
  iataCode: `LH`,
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// lufthansa.book(235, `Blatsos`);
// lufthansa.book(66, `Petros`);
// console.log(lufthansa.bookings);

const eurowings = {
  airline: `Eurowings`,
  iataCode: `EW`,
  bookings: [],
};

const book = lufthansa.book;

// book.call(eurowings, 23, `Sarah`);
// console.log(eurowings.bookings);

// book.call(lufthansa, 238, `Mary`);
// console.log(lufthansa.bookings);

const swiss = {
  airline: `Swiss Air Lines`,
  iataCode: `LX`,
  bookings: [],
};

// book.call(swiss, 777, `Davis`);
// console.log(swiss.bookings);

// const flightData = [583, `George Cooper`];
// book.apply(swiss, flightData);
// console.log(swiss.bookings);

// book.call(swiss, ...flightData);
// console.log(swiss.bookings);

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, `Steven King`);

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23(`Jonas`);
// bookEW23(`Martha Cooper`);

// lufthansa.planes = 300;
// lufthansa.buy = function () {
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector(`.buy`)
//   .addEventListener(`click`, lufthansa.buy.bind(lufthansa));

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));

// const runOnce = function () {};

// (function () {
//   console.log(`This will never run again`);
// })();

// (() => console.log(`This will ALSO never run again`))();

// const secureBooking = function () {
//   let passenger = 0;

//   return function () {
//     passenger++;
//     console.log(passenger);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker);

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// h();
// f();
// console.dir(f);

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(() => {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);

(function () {
  const header = document.querySelector(`h1`);
  header.style.color = 'red';

  const body = document.querySelector(`body`);
  body.addEventListener(`click`, () => (header.style.color = `blue`));
  console.dir(body.addEventListener());
})();
