'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ``;

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};

//displayMovements(account1.movements);

const calcDisplayBalance = acc => {
  acc.balance = acc.movements.reduce((acc, val) => acc + val, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

//calcDisplayBalance(account1.movements);

const calcDisplaySum = acc => {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${out}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}`;
};

//calcDisplaySum(account1.movements);

const createUsernames = accs =>
  accs.forEach(
    acc =>
      (acc.username = acc.owner
        .toLowerCase()
        .split(` `)
        .map(val => val[0])
        .join(``))
  );

createUsernames(accounts);

const updateUI = acc => {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySum(acc);
};

let loggedInUser;

btnLogin.addEventListener(`click`, e => {
  e.preventDefault();
  loggedInUser = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (loggedInUser?.pin === +inputLoginPin.value) {
    labelWelcome.textContent = `Welcome back, ${
      loggedInUser.owner.split(` `)[0]
    }`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = ``;
    inputLoginPin.blur();
    updateUI(loggedInUser);
  } else {
    console.log(`Please check your credentials`);
  }
});

btnTransfer.addEventListener(`click`, e => {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = ``;
  if (
    amount > 0 &&
    receiverAcc &&
    loggedInUser.balance >= amount &&
    receiverAcc?.username !== loggedInUser.username
  ) {
    loggedInUser.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(loggedInUser);
  } else console.log(`false`);
});

btnLoan.addEventListener(`click`, e => {
  e.preventDefault();
  const amount = +inputLoanAmount.value;
  if (amount > 0 && loggedInUser.movements.some(mov => mov >= amount / 10)) {
    loggedInUser.movements.push(amount);

    updateUI(loggedInUser);
  }
  inputLoanAmount.value = ``;
});

btnClose.addEventListener(`click`, e => {
  e.preventDefault();

  if (
    inputCloseUsername.value === loggedInUser.username &&
    +inputClosePin.value === loggedInUser.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === loggedInUser.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = ``;
});

let sorted = false;
btnSort.addEventListener(`click`, e => {
  e.preventDefault();
  displayMovements(loggedInUser.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = [`a`, `b`, `c`, `d`, `e`];

// console.log(arr.slice(1, -1));
// console.log(arr.slice());

// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);

// const arr2 = [`j`, `i`, `h`, `g`, `f`];

// console.log(arr2.reverse());
// console.log(arr2);

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// console.log(letters.join(` - `));

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log(`Blatsos`.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const arr = [
  [[1, 2], 3],
  [4, 5, 6],
  [7, [8, 9]],
];

// console.log(arr.flat(2));

// console.log(movements);
// console.log(movements.includes(-130));

// console.log(movements.some(mov => mov > 1500));

// console.log(account4.movements.every(mov => mov > 0));

// const deposit = mov => mov > 0;
// console.log(movements.every(deposit));

// const element = movements.find(mov => mov < 0);
// console.log(element);

// const account = accounts.find(acc => acc.owner === `Jessica Davis`);
// console.log(account);

// let account22 = {};
// for (const acc of accounts) {
//   if (acc.owner === `Jessica Davis`) {
//     account22 = { ...acc };
//   }
// }
// console.log(account22);

// const totalUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * 1.1)
//   .reduce((acc, mov) => acc + mov);

// console.log(totalUSD);

// const balance = movements.reduce((acc, val) => acc + val, 0);
// console.log(balance);

// const max = movements.reduce(
//   (acc, val) => (acc > val ? acc : (acc = val)),
//   movements[0]
// );
// console.log(max);

// const deposits = movements.filter(mov => mov > 0);
// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);
// const eurToUSD = 1.1;

// const movementsUSD = movements.map(val => val * eurToUSD);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];

// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUSD);
// }
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? `deposited` : `withdrew`} ${Math.abs(
//       mov
//     )}`
// );

// console.log(movementsDescriptions);

// for (const move of movements) {
//   if (move > 0) {
//     console.log(`You deposited ${move}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(move)}`);
//   }
// }

// movements.forEach(function (move, index, arr) {
//   if (move > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${move}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew ${Math.abs(move)}`);
//   }
// });

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set([`USD`, `GBP`, `USD`, `EUR`, `EUR`]);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

const juliaArr = [9, 16, 6, 8, 3];
const kateArr = [10, 5, 6, 1, 4];

// const checkDogs = function (arr1, arr2) {
//   const copyArr1 = [...arr1];
//   copyArr1.splice(-2);
//   copyArr1.shift();

//   const correctData = [...copyArr1, ...arr2];
//   correctData.forEach(function (val, i) {
//     const isAdult =
//       val >= 3 ? `an adult, and is ${val} years old` : `still a puppy 🐶`;
//     console.log(`Dog number ${i + 1} is ${isAdult}`);
//   });
// };

// const calcAverageHumanAge = ages => {
//   const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAge.filter(human => human >= 18);
//   let averageAge = adults.reduce((acc, val) => acc + val, 0);
//   averageAge /= adults.length;
//   return averageAge;
// };

// const calcAverageHumanAge = ages => {
//   const average = ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(human => human >= 18)
//     .reduce((acc, val, i, arr) => acc + val / arr.length, 0);
//   return average;
// };

// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
// checkDogs(juliaArr, kateArr);

const owners = [`Jonas`, `Zach`, `Adam`, `Martha`];
// console.log(owners.sort());
// console.log(owners);

// console.log(movements);

// movements.sort((a, b) => a - b);
// console.log(movements);

const x = new Array(7);

// x.fill(1, 3);
// console.log(x);

// owners.fill(23, 4, 6);
// console.log(owners);

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (curr, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener(`click`, () => {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => +el.textContent.replace(`€`, ``)
//   );

//   console.log(movementsUI);
// });

// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, cur) => acc + cur);
// console.log(bankDepositSum);

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, cur) => (cur >= 1000 ? ++acc : acc), 0);

// console.log(numDeposits1000);

// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? `deposits` : `withdrawals`] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(deposits, withdrawals);

// const convertTitleCase = title => {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);

//   const exception = [`a`, `an`, `the`, `and`, `but`, `or`, `on`, `in`, `with`];

//   const titleCase = title
//     .toLowerCase()
//     .split(` `)
//     .map(word =>
//       exception.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(` `);
//   return capitalize(titleCase);
// };
// console.log(convertTitleCase(`this is a nice title`));
// console.log(convertTitleCase(`this is a LONG title but not too long`));
