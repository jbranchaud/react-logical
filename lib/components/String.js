import React from 'react';
import PropTypes from 'prop-types';

const String = ({ str, blankStr }) => {
  if (str && str.length) {
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
  blankStr: '',
};

String.propTypes = {
  str: PropTypes.string,
  blankStr: PropTypes.string,
};

export default String;
