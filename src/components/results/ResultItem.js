import React from 'react';
import PropTypes from 'prop-types';

function ResultItem(props) {
  const { id } = props;
  return <div>{id}</div>;
}

ResultItem.propTypes = {
  id: PropTypes.string
};

ResultItem.defaultProps = {
  id: ''
};

export default ResultItem;
