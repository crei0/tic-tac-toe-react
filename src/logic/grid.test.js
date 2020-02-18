import { CELL_VALUES } from '../enums/board'
import {
  resetGridState,
  checkIfPlayerWon,
  checkIfGameIsTied
} from './grid'


describe('grid.js', () => {
  it('resetGridState() returns an empty grid state', () => {
    // In this case we use an hardcoded object to test against
    const expectedResult = {
      grid: [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"]
      ],
      currentPlayer: "X",
      gameState: "PLAYING"
    };

    const returnedResult = resetGridState();

    expect(returnedResult).toStrictEqual(expectedResult)
  });

  it('checkIfPlayerWon(grid) detects that one player has won', () => {
    const gridState = [
      [CELL_VALUES.CELL_O, CELL_VALUES.CELL_O, CELL_VALUES.CELL_X],
      [CELL_VALUES.CELL_O, CELL_VALUES.CELL_O, CELL_VALUES.CELL_X],
      [CELL_VALUES.EMPTY, CELL_VALUES.EMPTY, CELL_VALUES.CELL_X]
    ];
    
    const returnedResult = checkIfPlayerWon(gridState);

    expect(returnedResult).toEqual(true);
  });

  it('checkIfPlayerWon(grid) detects that no one has won', () => {
    const gridState = [
      [CELL_VALUES.EMPTY, CELL_VALUES.EMPTY, CELL_VALUES.CELL_X],
      [CELL_VALUES.EMPTY, CELL_VALUES.EMPTY, CELL_VALUES.CELL_O],
      [CELL_VALUES.EMPTY, CELL_VALUES.EMPTY, CELL_VALUES.CELL_X]
    ];

    const returnedResult = checkIfPlayerWon(gridState);

    expect(returnedResult).toEqual(false);
  });

  it('checkIfGameIsTied(grid) detects the game is tied', () => {
    const gridState = [
      [CELL_VALUES.CELL_O, CELL_VALUES.CELL_X, CELL_VALUES.CELL_X],
      [CELL_VALUES.CELL_X, CELL_VALUES.CELL_X, CELL_VALUES.CELL_O],
      [CELL_VALUES.CELL_O, CELL_VALUES.CELL_O, CELL_VALUES.CELL_X]
    ];

    const returnedResult = checkIfGameIsTied(gridState);

    expect(returnedResult).toEqual(true);
  });
});
