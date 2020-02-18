import React from 'react';
import PropTypes from 'prop-types';

/**
 * Board's cell
 */
class BoardRow extends React.Component {

  render() {
    const {
      value
    } = this.props;

    console.info("BoardRow", value !== '-')
    return (
      <button 
        onClick={this.handleClick}
        disabled={value !== '-'}
        type="button"
        className="btn btn-light">
        {value}
      </button>
    );
  }
}

BoardRow.propTypes = {
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

export default BoardRow;