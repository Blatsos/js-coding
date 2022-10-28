// const calcAverage = (score1, score2, score3) => {
//   const total = score1 + score2 + score3;
//   const avg = total / 3;
//   console.log(avg);
//   return avg;
// };

// const avgKoalas = calcAverage(65, 54, 49);
// const avgDolphins = calcAverage(44, 23, 71);

// function checkWinner(avg1, avg2) {
//   avg1 >= avg2 * 2
//     ? console.log(`Koalas WIN`)
//     : avg2 >= avg1 * 2
//     ? console.log(`Dolphins WIN`)
//     : console.log(`No winner!`);
// }

// checkWinner(avgKoalas, avgDolphins);

// const calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(tips[i] + bills[i]);
// }

// console.log(tips);
// console.log(totals);

// const calcAverage = (arr) => {
//   let average = 0;
//   for (let i = 0; i < arr.length; i++) {
//     average += arr[i];
//   }
//   average = average / arr.length;
//   console.log(average);
// };

// calcAverage(tips);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills);
// console.log(tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

// const markMiller = {
//   fullName: `Mark Miller`,
//   weight: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.weight / (this.height * this.height);
//     return this.bmi;
//   },
// };
// const johnSmith = {
//   fullName: `John Smith`,
//   weight: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.weight / (this.height * this.height);
//     return this.bmi;
//   },
// };

// markMiller.calcBMI();
// console.log(markMiller.bmi);
// johnSmith.calcBMI();
// console.log(johnSmith.bmi);
