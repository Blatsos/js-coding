'use strict';

const Person = function (fistName, birthYear) {
  // Instance properties
  this.firstName = fistName;
  this.birthYear = birthYear;

  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

// Person.hey = function () {
//   console.log(`Hey there 👋`);
//   console.log(this);
// };

// Person.hey();

// const blatsos = new Person(`Konstantinos`, 2000);

// console.log(blatsos);

// const matilda = new Person(`Matilda`, 1997);
// const jack = new Person(`Jack`, 2007);
// console.log(matilda, jack);

// const jay = `Jay`;

// console.log(jay instanceof Person);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student(`Mike`, 2020, `CS`);
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);

// blatsos.calcAge();
// matilda.calcAge();

// console.log(blatsos.__proto__);
// console.log(blatsos.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = `Homo Sapiens`;
// console.log(matilda.species, blatsos.species);

// console.log(blatsos.hasOwnProperty(`firstName`));
// console.log(blatsos.hasOwnProperty(`species`));

// console.log(blatsos.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [2, 5, 2, 8, 6, 8, 3];
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector(`h1`);
// console.dir(h1);

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet = function () {
//     console.log(`Hey ${this.firstName}`);
//   };

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(` `)) {
//       this._fullName = name;
//     } else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log(`Hi there 👋`);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${2037 - this.birthYear} years old, but I feel like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const bla = new StudentCl(`Bla Jones`, 2021, `Computer Engineering`);
// bla.introduce();
// bla.calcAge();

// PersonCl.hey();

// const jessica = new PersonCl(`Jessica Davis`, 1996);
// console.log(jessica);
// jessica.calcAge();

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };

// jessica.greet();
// console.log(jessica.age);

// const walter = new PersonCl(`Walter White`, 1965);

// const account = {
//   owner: `Jonas`,
//   movements: [200, 540, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = `Steven`;
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init(`Sarah`, 1979);
// sarah.calcAge();

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(
//     `Hi my name is ${this.firstName} and I'm studying ${this.course}`
//   );
// };

// const jay = Object.create(StudentProto);
// jay.init(`Jay`, 2010, `Computer Science`);
// jay.introduce();
// jay.calcAge();

// class Account {
//   // Public field
//   locale = navigator.language;

//   // Private fields
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     // this._movements = [];
//     // this.locale = navigator.language;

//     console.log(`Thank for trusting our bank ${owner}`);
//   }

//   // Public methods
//   getMovements() {
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }

//   withdrawal(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//     return this;
//   }

//   static helper() {
//     console.log(`Helper`);
//   }

//   // Private methods
//   _approveLoan(val) {
//     return true;
//   }
// }

// const acc1 = new Account(`Jonas`, `EUR`, 1111);

// acc1.deposit(250);
// acc1.withdrawal(140);
// acc1.requestLoan(1000);
// console.log(acc1.getMovements());

// Account.helper();

// acc1
//   .deposit(300)
//   .deposit(500)
//   .withdrawal(35)
//   .requestLoan(25000)
//   .withdrawal(4000);
