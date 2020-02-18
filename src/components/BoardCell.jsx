import React from 'react';
import PropTypes from 'prop-types';

class BoardCell extends React.Component {

  handleClick = () => {
    const {
      x,
      y
    } = this.props;

    this.props.clickHandler(y, x);
  }

  render() {
    const {
      value
    } = this.props;
    

    return (
      <button onClick={this.handleClick}>
        {value}
      </button>
    );
  }
}

// TODO: Document props

BoardCell.propTypes = {
  /**
   * The X-axis (horizontal) position
   */
  x: PropTypes.number.isRequired,

  /**
   * The Y-axis (vertical) position
   */
  y: PropTypes.number.isRequired,
  
  /**
   * Can be "" (empty), 'x', 'o'
   */
  value: PropTypes.string.isRequired,

  /**
   * Function called when the cell is clicked
   */
  clickHandler: PropTypes.func.isRequired
};

export default BoardCell;