import React from 'react';
import PropTypes from 'prop-types'
import './Calculator';

const Input = ({text}) => {
  return (
    <div className="input">
    <span  type="text" readOnly>{text}</span>
    </div>
  );
};

export default Input;

Input.propTypes = {
  text: PropTypes.string.isRequired,
};
