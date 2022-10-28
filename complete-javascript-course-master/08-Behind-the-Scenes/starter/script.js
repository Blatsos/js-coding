'use strict';

// const calcAge = birthYear => {
//   const age = 2037 - birthYear;

//   const printAge = () => {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1991 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = `Steven`;
//       const str = `Oh, and you are a millenial, ${firstName}`;
//       console.log(str);

//       const add = (a, b) => {
//         return a + b;
//       };

//       output = `new output`;
//     }
//     console.log(output);
//   };

//   printAge();
//   return age;
// };

// const firstName = 'Konstandinos';
// calcAge(1991);

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Blatsos';
// let job = 'developer';
// const year = 2022;

// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => {
//   return a + b;
// };

// EXAMPLE

// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log(`All products deleted!`);
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(z === window.z);

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(2000);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(2000);

// var firstName = 'some';

// const blatsos = {
//   firstName: 'kostas',
//   year: 2000,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     const isMillenial = function () {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// blatsos.greet();
// blatsos.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = blatsos.calcAge;
// matilda.calcAge();

// const f = blatsos.calcAge;
// f();

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Kostas',
//   age: 22,
// };

// const friend = me;
// friend.age = 27;
// console.log(me);
// console.log(friend);

// let lastName = `Williams`;
// let oldLastName = lastName;
// lastName = `Davis`;
// console.log(lastName);
// console.log(oldLastName);

// const jessica = {
//   fistName: 'Jessica',
//   lastName: `Williams`,
//   age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = `Davis`;
// console.log(marriedJessica);
// console.log(jessica);

const jessica2 = {
  fistName: 'Jessica',
  lastName: `Williams`,
  age: 27,
  family: [`Alice`, `Bob`],
};
const jessicaCopy = { ...jessica2 };
jessicaCopy.lastName = `Davies`;
console.log(jessica2);
console.log(jessicaCopy);
jessicaCopy.family.push(`Mary`);
jessicaCopy.family.push(`John`);
console.log(jessica2);
console.log(jessicaCopy);
