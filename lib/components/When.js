import React from 'react';
import PropTypes from 'prop-types';

const When = ({ cond, then, otherwise }) => {
  if (cond) {
    return then();
  } else {
    if (otherwise) {
      return otherwise();
    } else {
      return null;
    }
  }
};

When.defaultProps = {
  cond: false,
};

When.propTypes = {
  cond: PropTypes.any.isRequired,
  then: PropTypes.func.isRequired,
  otherwise: PropTypes.func,
};

export default When;
