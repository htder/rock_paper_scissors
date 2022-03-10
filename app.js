import {
  computerPlay,
  getUserChoiceAsNumber,
  hasUserWon,
  isGameOver,
} from './utils.js';

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
const gameChoices = document.querySelectorAll('.button');

// Winner text
const userWinner = document.querySelector('.user-won');
const computerWinner = document.querySelector('.computer-won');

const score = {
  user: 4,
  computer: 4,
};

function resetScores() {
  score.user = 0;
  score.computer = 0;
}

function removeSelectionClasses() {
  gameChoices.forEach((button) =>
    button.classList.remove(
      'user-selected',
      'computer-selected',
      'user-computer-selected'
    )
  );
}

function computersTurn(computersChoice) {
  gameChoices.forEach((button) => {
    if (button.classList.contains(computersChoice)) {
      if (button.classList.contains('user-selected')) {
        button.classList.add('user-computer-selected');
      }
      button.classList.add('computer-selected');
    }
  });
}

function updateScore() {
  userScore.textContent = score.user;
  computerScore.textContent = score.computer;
}

function showWinner(winner) {
  if (winner === 1) {
    userWinner.classList.remove('hide');
    userWinner.classList.add('show-winner');
  }
  if (winner === -1) {
    computerWinner.classList.remove('hide');
    computerWinner.classList.add('show-winner');
  }
}

function hideWinnerScreen() {
  userWinner.classList.add('hide');
  computerWinner.classList.add('hide');
  playAgain.classList.add('hide');
  userWinner.classList.remove('show-winner');
  computerWinner.classList.remove('show-winner');
  playAgain.classList.remove('play-again-show');
}

function showPlayAgain() {
  playAgain.classList.remove('hide');
  playAgain.classList.add('play-again-show');
  playGameAgain();
}

function increaseScore(winner) {
  if (winner === 1) score.user += 1;
  if (winner === -1) score.computer += 1;
  updateScore();
  const isWinner = isGameOver(score.user, score.computer);
  if (isWinner) {
    stopGamePlay();
    showWinner(isWinner);
    showPlayAgain();
  }
}

function startGame() {
  const userChoice = event.target.closest('.button');
  const computersChoiceValue = computerPlay();
  const userChoiceValue = getUserChoiceAsNumber(userChoice);
  removeSelectionClasses();
  userChoice.classList.add('user-selected');
  computersTurn(computersChoiceValue);
  const winner = hasUserWon(userChoiceValue, computersChoiceValue);
  increaseScore(winner);
}

function stopGamePlay() {
  gameChoices.forEach((button) => {
    button.removeEventListener('click', startGame);
  });
}

function allowGamePlay() {
  gameChoices.forEach((button) => {
    button.addEventListener('click', startGame);
  });
}

function resetGame() {
  resetScores();
  updateScore();
  removeSelectionClasses();
  hideWinnerScreen();
  allowGamePlay();
}

function playGameAgain() {
  playAgain.addEventListener('click', resetGame);
}

allowGamePlay();
