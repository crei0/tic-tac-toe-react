import React from 'react';

import BoardCell from './BoardCell';

// TODO: Create ENUM for current player, cell values, ...

class Board extends React.Component {
  state = {
    grid: [
      ["",  "",   ""],
      ["",  "x",  "o"],
      ["x", "o",  "o"]
    ],
    currentPlayer: "x",
    score: {
      playerX: 0,
      playerO: 0
    }
  };

  handleClick = (x, y) => {
    console.info("handleClick", y, x);
  };
  
  render() {
    return (
      <div>
        board goes here

        <BoardCell y={0} x={0} value="-" clickHandler={this.handleClick} />
        <BoardCell y={0} x={1} value="-" clickHandler={this.handleClick} />
        <BoardCell y={0} x={2} value="-" clickHandler={this.handleClick} />

        <BoardCell y={1} x={0} value="-" clickHandler={this.handleClick} />
        <BoardCell y={1} x={1} value="-" clickHandler={this.handleClick} />
        <BoardCell y={1} x={2} value="-" clickHandler={this.handleClick} />

        <BoardCell y={2} x={0} value="-" clickHandler={this.handleClick} />
        <BoardCell y={2} x={1} value="-" clickHandler={this.handleClick} />
        <BoardCell y={2} x={2} value="-" clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default Board;