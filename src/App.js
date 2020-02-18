import React from 'react';

import './App.css';
import Board from './components/Board'


function App() {
  return (
    <div className="tic-tac-toe">
      <header className="tic-tac__toeheader">
        <h1>
          Tic-tac-toe
        </h1>
      </header>
      <main>
        <Board></Board>
      </main>
    </div>
  );
}

export default App;
