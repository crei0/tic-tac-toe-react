import React from 'react';
import { render } from '@testing-library/react';

import Board from './Board';

describe('Board', () => {
  test('renders without crashing', () => {
    const { getByText } = render(<Board />);

    const title = getByText(/The current player is 'X'/i);

    expect(title).toBeInTheDocument();
  });

  test('renders 9 BoardCells', () => {
    const { container } = render(<Board />);

    // This is a bit brittle
    const allCells = container.querySelectorAll('.tic-tac-toe__board-cell');

    expect(allCells.length === 9);
  });
});