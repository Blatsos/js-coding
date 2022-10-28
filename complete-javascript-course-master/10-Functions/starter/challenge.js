'use strict';

const poll = {
  question: `What is your favorite programming language?`,
  options: [`0: JavaScript`, '1: Python', `2: Rust`, `3: C++`],
  answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function () {
  const option = prompt(`${this.question}\n${this.options.join(
    `\n`
  )}\n(Write option number)
  `);

  console.log(+option);
  if (+option >= 0 && option < this.answers.length) {
    this.answers[+option]++;
  } else {
    console.log(`This is not a valid option`);
  }
  this.displayResults();
  this.displayResults(`string`);
};

document
  .querySelector('.poll')
  .addEventListener(`click`, poll.registerNewAnswer.bind(poll));

poll.displayResults = function (type = 'array') {
  if (type === 'array') {
    console.log(this.answers);
  } else {
    console.log(`Poll results are ${this.answers.join(`, `)}`);
  }
};
