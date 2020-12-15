import React from 'react';
import PropTypes from 'prop-types'


const Button = ( { name, typeButton, clic }) => {
  return (
      <button type="button" className= {typeButton}  onClick={clic}>
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
