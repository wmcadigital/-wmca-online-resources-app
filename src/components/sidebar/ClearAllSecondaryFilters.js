import React from 'react';
import PropTypes from 'prop-types';

const ClearAllSecondaryFilters = ({ onClearClick }) => {
  return (
    <button type="submit" className="btn-main btn-main-primary" onClick={() => onClearClick()}>
      <i className="fal fa-times left" />
      <span>Clear filters</span>
    </button>
  );
};

export default ClearAllSecondaryFilters;

ClearAllSecondaryFilters.propTypes = {
  onClearClick: PropTypes.instanceOf(Function).isRequired
};
