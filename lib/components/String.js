import React from 'react';

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

export default String;
