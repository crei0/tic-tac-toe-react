import { CELL_VALUES, PLAYER } from '../enums/board';

/**
 * Resets the grid and makes Player X the current player
 * @returns {Object}
 */
export const resetGridState = () => (
  {
    grid: [
      [CELL_VALUES.EMPTY,  CELL_VALUES.EMPTY,   CELL_VALUES.EMPTY],
      [CELL_VALUES.EMPTY,  CELL_VALUES.EMPTY,   CELL_VALUES.EMPTY],
      [CELL_VALUES.EMPTY,  CELL_VALUES.EMPTY,   CELL_VALUES.EMPTY]
    ],
    currentPlayer: PLAYER.X
  }
);

const _checkThreeCells = (cell1, cell2, cell3) => {
  return cell1 === cell2 &&
         cell1 === cell3 &&
         cell1 !== CELL_VALUES.EMPTY;
};

/**
 * Checks if a player won, 
 * first checks by row,
 * then by column,
 * then diagonal top-left to bottom-right
 * lastly diagonal bottom-left to top-right
 * 
 * @param {Array} grid The grid array
 * @returns {Boolean}
 */
export const checkIfPlayerWon = (grid) => {
  console.info('checkIfPlayerWon', grid);

  for (let index = 0; index < 3; index++) {
    // Rows
    if (_checkThreeCells(grid[index][0], grid[index][1], grid[index][2])) {
      return true;
    };

    // Columnns
    if (_checkThreeCells(grid[0][index], grid[1][index], grid[2][index])) {
      return true;
    };
  }

  // diagonal top-left to bottom-right
  if (_checkThreeCells(grid[0][0], grid[1][1], grid[2][2])) {
    return true;
  }

  // diagonal bottom-left to top-right
  if (_checkThreeCells(grid[2][0], grid[1][1], grid[0][2])) {
    return true;
  }
};

/**
 * Checks if the game is Tied
 * 
 * @param {Array} grid The grid array
 * @returns {Boolean}
 */
export const checkIfGameIsTied = (grid) => {
  const test = grid.flat(2).toString().indexOf();
  console.info(test);
};
