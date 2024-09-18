'use strict';

let totalScorePlayer1 = 0;
let totalScorePlayer2 = 0;
let currentDice = 0;
let currentScore = 0;

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScorePlayer1 = document.querySelector('#current--0');
const currentScorePlayer2 = document.querySelector('#current--1');
const scorePlayer1 = document.querySelector('#score--0');
const scorePlayer2 = document.querySelector('#score--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const titlePlayer1 = document.querySelector('#name--0');
const titlePlayer2 = document.querySelector('#name--1');

//Function delcaration
const displayDice = function (dice) {
  const diceImageSrc = `dice-${dice}.png`;
  document.querySelector('.dice').setAttribute('src', diceImageSrc);
};

const switchPlayer = function () {
  if (player1.classList.contains('player--active')) {
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
    currentScorePlayer1.textContent = 0;
  } else {
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
    currentScorePlayer2.textContent = 0;
  }
};

//Operation
btnRoll.addEventListener('click', function () {
  currentDice = Math.floor(Math.random() * 6) + 1;
  displayDice(currentDice);
  if (currentDice === 1) {
    switchPlayer();
    currentScore = 0;
  } else {
    currentScore += currentDice;
    if (player1.classList.contains('player--active')) {
      currentScorePlayer1.textContent = currentScore;
    } else {
      currentScorePlayer2.textContent = currentScore;
    }
  }
});

btnHold.addEventListener('click', function () {
  if (player1.classList.contains('player--active')) {
    totalScorePlayer1 += currentScore;
    scorePlayer1.textContent = totalScorePlayer1;
    if (totalScorePlayer1 >= 100) {
      titlePlayer1.textContent = 'Player 1 WIN';
    }
    switchPlayer();
    currentScore = 0;
  } else {
    totalScorePlayer2 += currentScore;
    scorePlayer2.textContent = totalScorePlayer2;
    if (totalScorePlayer2 >= 100) {
      titlePlayer2.textContent = 'Player 2 WIN';
    }
    switchPlayer();
    currentScore = 0;
  }
});

btnNew.addEventListener('click', function () {
  totalScorePlayer1 = 0;
  totalScorePlayer2 = 0;
  currentDice = 0;
  currentScore = 0;
  displayDice(5);
  currentScorePlayer1.textContent = 0;
  currentScorePlayer2.textContent = 0;
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
});
