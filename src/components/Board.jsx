import React from 'react';

import { CELL_VALUES, PLAYER } from '../enums/board';
import BoardCell from './BoardCell';

class Board extends React.Component {
  state = {
    grid: [
      [CELL_VALUES.EMPTY,  CELL_VALUES.EMPTY,   CELL_VALUES.EMPTY],
      [CELL_VALUES.EMPTY,  CELL_VALUES.PLAYER_X,  CELL_VALUES.PLAYER_O],
      [CELL_VALUES.PLAYER_X, CELL_VALUES.PLAYER_O,  CELL_VALUES.PLAYER_O]
    ],
    currentPlayer: "x",
    score: {
      playerX: 0,
      playerO: 0
    }
  };

  handleClick = (x, y) => {
    console.info("Board handleClick", y, x);
  };
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <BoardCell y={0} x={0} value="-" clickHandler={this.handleClick} />
          </div>
          <div className="col-sm">
            <BoardCell y={0} x={1} value="-" clickHandler={this.handleClick} />
          </div>
          <div className="col-sm">
            <BoardCell y={0} x={2} value="-" clickHandler={this.handleClick} />
          </div>
        </div>

        <div className="row">
          <div className="col-sm">
            <BoardCell y={1} x={0} value="-" clickHandler={this.handleClick} />
          </div>
          <div className="col-sm">
            <BoardCell y={1} x={1} value="-" clickHandler={this.handleClick} />
          </div>
          <div className="col-sm">
            <BoardCell y={1} x={2} value="-" clickHandler={this.handleClick} />
          </div>
        </div>

        <div className="row">
          <div className="col-sm">
            <BoardCell y={2} x={0} value="-" clickHandler={this.handleClick} />
          </div>
          <div className="col-sm">
            <BoardCell y={2} x={1} value="-" clickHandler={this.handleClick} />
          </div>
          <div className="col-sm">
            <BoardCell y={2} x={2} value="-" clickHandler={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default Board;