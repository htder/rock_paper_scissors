function computerPlay() {
  return Math.trunc(Math.random() * 3);
}

function hasUserWon(userChoice, computerChoice) {
  const winLoseTable = [
    [0, 1, -1],
    [1, 0, -1],
    [1, -1, 0],
  ];
  return winLoseTable[userChoice][computerChoice];
}

export { computerPlay, hasUserWon };
