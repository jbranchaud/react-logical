import React from 'react';

const String = ({ str, blankStr }) => {
  if (str && str.length > 0) {
    return str;
  } else {
    return blankStr;
  }
};

export default String;
