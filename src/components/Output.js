import React from 'react';
import PropTypes from 'prop-types'
import './Calculator';

const Output = ({text}) => {
  return (
    <div className="output">
      <span  type="text" readOnly>{text}</span>
    </div>
  );
};

export default Output;

Output.propTypes = {
  text: PropTypes.string.isRequired,
};