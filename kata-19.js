const generateBoard = function(whiteQueen, blackQueen) {
  let board = [[], [], [], [], [], [], [], []];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      if ((row === whiteQueen[0] && col === whiteQueen[1]) || 
          (row === blackQueen[0] && col === blackQueen[1])) {
        board[row].push(1);
      } else {
        board[row].push(0);
      }
    }
  }
  return board;
}

const queenThreat = function(board) {
  let whiteQueen = [];
  let blackQueen = [];
  let i = 1;

  // get queen locations
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      if (board[row][col] === 1 && whiteQueen.length === 0) {
        whiteQueen = [row, col];
      } else if (board[row][col] === 1 && blackQueen.length === 0) {
        blackQueen = [row, col];
      }
    }
  }

  // row and col check
  if (whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1]) {
    return true;
  }

  // upper diagonal search
  for (let row = whiteQueen[0] - 1; row >= 0; row--) {
    if (row === blackQueen[0] && 
        (whiteQueen[1] - i === blackQueen[1] || whiteQueen[1] + i === blackQueen[1])) {
      return true;
    }
    i++;
  }

  i = 1;

  // lower diagonal search
  for (let row = whiteQueen[0] + 1; row < 8; row++) {
    if (row === blackQueen[0] && 
        (whiteQueen[1] - i === blackQueen[1] || whiteQueen[1] + i === blackQueen[1])) {
      return true;
    }
    i++;
  }

  return false;
}

console.log(queenThreat(generateBoard([0, 5], [5, 0])));
console.log(queenThreat(generateBoard([0, 0], [5, 7])));