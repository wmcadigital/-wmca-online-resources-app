import React from 'react';
import PropTypes from 'prop-types';

const ClearAllSecondaryFilters = ({ onClearClick }) => {
  return (
    <button type="submit" className="btn-primary prev" onClick={() => onClearClick()}>
      <span>Clear filters</span>
    </button>
  );
};

export default ClearAllSecondaryFilters;

ClearAllSecondaryFilters.propTypes = {
  onClearClick: PropTypes.instanceOf(Function).isRequired
};
