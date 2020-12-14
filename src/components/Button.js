import React from 'react';
import PropTypes from 'prop-types'


const Button = ( { name , clic }) => {
  return (
    <input type="button" className="button" value={name} onClick={clic} />
  );
};

export default Button;

Button.propTypes = {
    name: PropTypes.string.isRequired,
    clic: PropTypes.func,
};
