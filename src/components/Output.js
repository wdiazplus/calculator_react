import React from 'react';
import PropTypes from 'prop-types'
import './Calculator';

const Output = ({hardname}) => {
  return (
    <div className="result">
      <span name={hardname} type="text" readOnly />
    </div>
  );
};

export default Output;

Output.propTypes = {
  hardname: PropTypes.string.isRequired,
};