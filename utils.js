function computerPlay() {
  return Math.trunc(Math.random() * 3);
}

function hasUserWon(userChoice, computerChoice) {
  // 0 - Rock, 1 - Paper, 2 - Scissors

  //            Rock   |  Paper  | Scissors
  // Rock     | [0, 0]   [1, 0]    [2, 0]
  // Paper    | [0, 1]   [1, 1]    [2, 1]
  // Scissors | [0, 2]   [1, 2]    [2, 2]

  const winLoseTable = [
    [0, 1, -1],
    [1, 0, -1],
    [1, -1, 0],
  ];
  // 0 - Draw, 1 - User wins, -1 - User loses
  return winLoseTable[userChoice][computerChoice];
}

export { computerPlay, hasUserWon };
