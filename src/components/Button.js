import React from 'react';
import PropTypes from 'prop-types'


const Button = ( { name, clic }) => {
  return (
      <button type="button" className= "primary"  onClick={clic}>
      {name}
      </button>
    );
};

export default Button;

Button.propTypes = {
    name: PropTypes.string.isRequired,
    typeButton: PropTypes.string.isRequired,
    clic: PropTypes.func,
};
