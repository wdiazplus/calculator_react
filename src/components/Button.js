import React from 'react';
import PropTypes from 'prop-types'


const Button = ( {classType , name , clic }) => {
  return (
    <input type="button" className={classType} value={name} onClick={clic} />
  );
};

export default Button;

Button.propTypes = {
    name: PropTypes.string.isRequired,
    classType: PropTypes.string.isRequired,
    clic: PropTypes.func,
};
