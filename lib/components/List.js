import React from 'react';
import PropTypes from 'prop-types';

const List = ({ list, render, emptyList }) => {
  if (list && list.length) {
    return render({ list });
  } else {
    return emptyList();
  }
};

List.propTypes = {
  list: PropTypes.array,
  render: PropTypes.func,
  emptyList: PropTypes.func,
};

export default List;
