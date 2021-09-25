'use strict';

let secrectNum = Math.trunc(Math.random() * 20);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  if (!guessNumber)
    document.querySelector('.message').textContent = 'No number';
  else if (guessNumber < 0 || guessNumber > 20)
    document.querySelector('.message').textContent = 'put Only 1-20';
  else if (guessNumber < secrectNum) {
    document.querySelector('.message').textContent = 'Try higher number..';
    if (score <= 0)
      document.querySelector('.message').textContent = 'you loose!!';
    else {
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (guessNumber > secrectNum) {
    document.querySelector('.message').textContent = 'Try lower number..';
    if (score <= 0)
      document.querySelector('.message').textContent = 'you loose!!';
    else {
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    if (guessNumber === secrectNum) {
      document.querySelector('.message').textContent = 'Matched your guess!!';
      document.querySelector('.number').textContent = secrectNum;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '25rem';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secrectNum = Math.trunc(Math.random() * 20);
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = null;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
});
