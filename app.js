import { computerPlay, hasUserWon } from './utils.js';

// Scores
const userScore = document.querySelector('.user-score');
const computerScore = document.querySelector('.computer-score');

// Play Again
const playAgain = document.querySelector('.play-again-container');

// Choices
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

// All buttons
const buttons = document.querySelectorAll('.button');

const score = {
  you: 0,
  computer: 0,
};
