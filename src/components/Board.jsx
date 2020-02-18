import React from 'react';

import { CELL_VALUES, PLAYER } from '../enums/board';
import BoardCell from './BoardCell';

class Board extends React.Component {
  state = {
    grid: [],
    currentPlayer: "x",
    score: {
      playerX: 0,
      playerO: 0
    }
  };

  componentDidMount() {
    this.resetGrid();
  }

  resetGrid = () => {
    this.setState({
      grid: [
        [CELL_VALUES.EMPTY,  CELL_VALUES.EMPTY,   CELL_VALUES.EMPTY],
        [CELL_VALUES.EMPTY,  CELL_VALUES.EMPTY,   CELL_VALUES.EMPTY],
        [CELL_VALUES.EMPTY,  CELL_VALUES.EMPTY,   CELL_VALUES.EMPTY]
      ]
    });
  }

  handleClick = (x, y) => {
    console.info("Board handleClick", y, x);
  };

  renderBoardStructure = (grid, clickHandler) => {
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
      grid
    } = this.state;

    return (
      <div className="container">
        { this.renderBoardStructure(grid) }
      </div>
    );
  }
}

export default Board;