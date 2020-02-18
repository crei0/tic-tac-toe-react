import React from 'react';

import { CELL_VALUES, PLAYER, GAME_STATE } from '../enums/board';
import { resetGridState, checkIfPlayerWon, checkIfGameIsTied } from '../logic/grid';
import BoardCell from './BoardCell';

class Board extends React.Component {
  state = {
    grid: [],
    currentPlayer: PLAYER.X,
    gameState: GAME_STATE.PLAYING
  };

  componentDidMount() {
    this.resetGrid();
  }

  resetGrid = () => {
    this.setState(
      resetGridState()
    );
  }

  handleCellClick = (x, y) => {
    const {
      grid,
      currentPlayer
    } = this.state;
    
    if (GAME_STATE.PLAYING) {
      if (grid[y][x] === CELL_VALUES.EMPTY) {
        grid[y][x] = currentPlayer;
  
        if (checkIfPlayerWon(grid)) {
          this.setState({
            grid: grid,
            gameState: GAME_STATE.PLAYER_WON
          });
        } if (checkIfGameIsTied(grid)) {
          this.setState({
            grid: grid,
            gameState: GAME_STATE.TIE
          });
        } else {
          this.setState({
            grid: grid,
            currentPlayer: 
              currentPlayer === PLAYER.X
                ? PLAYER.O
                : PLAYER.X
          });
        }
      }
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
              clickHandler={this.handleCellClick}
            />
          </div>
        )}
      </div>
    )
  };
  
  render() {
    const {
      grid,
      currentPlayer,
      gameState
    } = this.state;

    let message = '';
    switch (gameState) {
      case GAME_STATE.PLAYER_WON:
        message = `${currentPlayer} WON`;
        break;

      case GAME_STATE.TIE:
        message = 'The game is TIED, please restart';
        break;

      default:
        message = `The current player is ${currentPlayer}`;
        break;
    }

    return (
      <div>
        <div className="container-fluid">
          { message }
        </div>

        <div className="container">
          { this.renderBoardStructure(grid) }
        </div>

        <div className="container-fluid">
          <button 
            onClick={this.resetGrid}
            disabled={gameState === GAME_STATE.PLAYING}
            type="button"
            className="btn btn-primary btn-lg">
            Restart
          </button>
        </div>
      </div>
    );
  }
}

export default Board;