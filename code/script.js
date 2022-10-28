// console.log(friends);

// friends[2] = `Blatsos`;

// console.log(friends);

// const firstName = `Kostas`;
// const blatsos = [firstName, `Blatsos`, 2022 - 2000, friends];
// console.log(blatsos);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [age1, age2, age3, calcAge(2000)];

// console.log(ages);

// const logWhatYouNeed = (value) => {
//   console.log(value);
// };

// const friends = [`Steven`, `Peter`, "Davis"];

// console.log(friends);

// const newLength = friends.push("Jay");

// console.log(friends);
// console.log(newLength);

// friends.unshift(`John`);
// console.log(friends);

// const removedElement = friends.pop();
// friends.pop();
// logWhatYouNeed(friends);
// logWhatYouNeed(removedElement);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf(`Bob`));

// console.log(friends.includes(`Steven`));

// if (friends.includes(`Steven`)) console.log(`You have a friend called Steven`);

// const blatsos = {
//   firstName: `Kostas`,
//   lastName: `Blatsos`,
//   birthYear: 2000,
//   hasDriversLicense: true,
//   job: `Developer`,
//   hobbies: [`Sports`, `Go-Kart`],
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and ${
//       this.hasDriversLicense
//         ? `he has a driver's license.`
//         : `does not have a driver's license.`
//     }`;
//   },
// };

// console.log(blatsos[`age`]);

// const nameKey = `Name`;
// console.log(blatsos[`first${nameKey}`]);
// console.log(blatsos[`last${nameKey}`]);

// const userTyped = prompt(`What do you want to know about Blatsos?`);
// console.log(blatsos[userTyped]);

// blatsos.location = `Greece`;
// console.log(blatsos);

// console.log(
//   `${blatsos.firstName} has ${blatsos.hobbies.length} hobbies, and his favorite is ${blatsos.hobbies[1]}`
// );

// console.log(blatsos.getSummary());

// for (let rep = 1; rep < 10; rep++) {
//   console.log(`printed ${rep}`);
// }

const blatsos = [
  `Kostas`,
  `Blatsos`,
  2022 - 2000,
  [`Stam`, `Stauros`, `Aggelos`],
];

// const types = [];

// for (let i = 0; i <= blatsos.length - 1; i++) {
//   if (typeof blatsos[i] === "number") break;

//   types.push(typeof blatsos[i]);
// }

// console.log(types);

// const years = [2020, 1991, 1985];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }

// console.log(ages);

// for (let i = blatsos.length - 1; i >= 0; i--) {
//   console.log(i, blatsos[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`------------ Starting exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} `);
//   }
// }

// for (let i = blatsos.length - 1; i >= 0; i--) {
//   console.log(i, blatsos[i]);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(rep);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);

// while (dice !== 6) {
//   console.log(dice);
//   dice = Math.trunc(Math.random() * 6) + 1;
// }
