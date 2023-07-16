'use strict';

// console.log(document.querySelector('.message').textContent);

// It is possible to manipulate an element

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let score = 20;
let highscore = 0;
let randomNumber = Math.trunc(Math.random() * 20 + 1);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else {
    if (guess < 0 || guess === 0) {
      if (score > 1) {
        document.querySelector('.message').textContent =
          'Number should be positive!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You lost the game!';
        document.querySelector('.score').textContent = 0;
      }
    } else {
      if (guess === randomNumber) {
        // manipulating styles (css)
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.message').textContent = 'Congratulations!!!';
        document.querySelector('.number').textContent = randomNumber;
        if (score > highscore) {
          highscore = score;
          document.querySelector('.highscore').textContent = highscore;
        }
      } else {
        if (score > 1) {
          document.querySelector('.message').textContent =
            guess > randomNumber ? 'Too High!' : 'Too Low!';
          score--;
          document.querySelector('.score').textContent = score;
        } else {
          document.querySelector('.message').textContent = 'You lost the game!';
          document.querySelector('.score').textContent = 0;
        }
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
});
