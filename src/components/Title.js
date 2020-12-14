import React from 'react';
import PropTypes from 'prop-types'
import './Calculator'

const Title = ({ NameTitle }) => {
  return <div className="title"> {NameTitle} </div>;
};

export default Title;

Title.propTypes = {
    NameTitle: PropTypes.string.isRequired,
};