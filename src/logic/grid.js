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

/**
 * Checks if a player won, 
 * first checks by row,
 * then by column,
 * then diagonal top-left to bottom-right
 * lastly diagonal top-right to bottom-left
 * 
 * @param {Object} grid 
 * @returns {Boolean}
 */
export const checkIfPlayerWon = (grid) => {
  console.info('checkIfPlayerWon', grid);

  
};


