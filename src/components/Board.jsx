import React from 'react';

import { CELL_VALUES, PLAYER } from '../enums/board';
import { resetGridState, checkIfPlayerWon } from '../logic/grid';
import BoardCell from './BoardCell';

class Board extends React.Component {
  state = {
    grid: [],
    currentPlayer: PLAYER.X,
  };

  componentDidMount() {
    this.resetGrid();
  }

  resetGrid = () => {
    this.setState(
      resetGridState()
    );
  }

  handleClick = (x, y) => {
    const {
      grid,
      currentPlayer
    } = this.state;
    console.info("Board handleClick", y, x);

    if (grid[y][x] === CELL_VALUES.EMPTY) {
      grid[y][x] = currentPlayer;

      checkIfPlayerWon(grid);

      this.setState({
        grid: grid,
        currentPlayer: 
          currentPlayer === PLAYER.X
            ? PLAYER.O
            : PLAYER.X
      });
    }
  };

  renderBoardStructure = (grid) => {
    return grid.map((row, rowIndex) =>
      <div className="row" key={`row-${rowIndex}`}>
        { row.map((value, columnIndex) =>
          <div key={`cell-${rowIndex}-${columnIndex}`}>
            <BoardCell
              y={rowIndex}
              x={columnIndex}
              value={value}
              clickHandler={this.handleClick}
            />
          </div>
        )}
      </div>
    )
  };
  
  render() {
    const {
      grid,
      currentPlayer
    } = this.state;

    return (
      <div>
        <div className="container">
          { this.renderBoardStructure(grid) }
        </div>

        <div className="container-fluid">
          The current player is {currentPlayer}

          <button 
            onClick={this.resetGrid}
            disabled={false}
            type="button"
            className="btn btn-primary btn-lg btn-block">
            Restart
          </button>
        </div>
      </div>
    );
  }
}

export default Board;