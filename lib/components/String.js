import React from 'react';
import PropTypes from 'prop-types';

const String = ({ str, blankStr }) => {
  if (str && str.length > 0) {
    return (
      <React.Fragment>
        {str}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        {blankStr}
      </React.Fragment>
    );
  }
};

String.defaultProps = {
  str: '',
};

String.propTypes = {
  str: PropTypes.string,
  blankStr: PropTypes.string.isRequired,
};

export default String;
