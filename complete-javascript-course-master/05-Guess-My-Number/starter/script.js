'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = `Correct Number! 🎉`;

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 52;

let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const genericFun = val => {
  if (score > 1) {
    document.querySelector('.message').textContent = `Too ${val} ${
      val === 'high' ? '📈' : '📉'
    }`;
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = `You lost the game 💥`;
    document.querySelector('.score').textContent = 0;
  }
};

const genericSelector = (target, type, value) => {
  document.querySelector(`.${target}`)[type] = value;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = document.querySelector('.guess').value;

  if (!guess) {
    document.querySelector('.message').textContent = `⛔ No number!`;
  } else if (+guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;

    genericSelector('message', 'textContent', `Correct Number! 🎉`);
    // document.querySelector('.message').textContent = `Correct Number! 🎉`;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (+guess > secretNumber) {
    genericFun('high');
  } else if (+guess < secretNumber) {
    genericFun('low');
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = `Start guessing...`;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
});
