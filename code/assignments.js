function percentageOfWorld(population) {
  return ((population / 7900000000) * 100).toFixed(2);
}

const populations = [2000000, 35000000, 88000000, 11000000];

// populations.length === 4 ? console.log(true) : console.log(false);

// const percentages = [
//   percentageOfWorld(populations[0]),
//   percentageOfWorld(populations[1]),
//   percentageOfWorld(populations[2]),
//   percentageOfWorld(populations[3]),
// ];

// console.log(percentages);

// const neighbours = [`Denmark`, `Belgium`, `France`];

// neighbours.push(`Utopia`);
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes(`Germany`))
//   console.log(`Probably not a central European country :D`);

// const indexOfDenmark = neighbours.indexOf(`Denmark`);
// console.log(indexOfDenmark);
// neighbours[indexOfDenmark] = `Republic of Denmark`;

// console.log(neighbours);

// const myCountry = {
//   country: `Greece`,
//   capital: `Athens`,
//   language: `greek`,
//   population: 11000000,
//   neighbours: [`Italy`],
//   describe: function () {
//     console.log(
//       `${this.country} has ${this.population} ${this.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
//     );
//   },
//   checkIsIsland: function () {
//     this.neighbours.length > 0
//       ? (this.isIsland = true)
//       : (this.isIsland = false);
//     return this.isIsland;
//   },
// };

// myCountry[`population`] = 11000000

// console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
// and a capital called ${myCountry.capital}.`);

// myCountry.describe();
// console.log(myCountry.checkIsIsland());

// for (let i = 1; i <= 50; i++) {
//   console.log(`Vote number ${i} is currently voting.`);
// }

// const percentage2 = [];

// for (let i = 0; i < populations.length; i++) {
//   percentage2.push(percentageOfWorld(populations[i]));
// }

// console.log(percentage2);
