import React from 'react';
import PropTypes from 'prop-types'
import './Calculator';

const Input = ({hardname}) => {
  return (
    <div className="input">
      <span name={hardname}   type="text" readOnly />
    </div>
  );
};

export default Input;

Input.propTypes = {
  hardname: PropTypes.string.isRequired,
};
