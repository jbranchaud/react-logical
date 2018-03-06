import React from 'react';
import PropTypes from 'prop-types';

const When = ({ cond, then, otherwise }) => {
  if (cond) {
    return then();
  } else {
    return otherwise();
  }
};

When.propTypes = {
  cond: PropTypes.any.isRequired,
  then: PropTypes.func.isRequired,
  otherwise: PropTypes.func,
};

export default When;
