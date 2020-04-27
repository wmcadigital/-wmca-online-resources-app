import React from 'react';
import PropTypes from 'prop-types';

const ClearAndBack = ({ onCancelClick }) => {
  const buttonForceMargin = { marginBottom: '20px', marginTop: '30px' };
  return (
    <button
      style={buttonForceMargin}
      type="submit"
      className="btn-main btn-main-warning btn-main-warning--solid"
      onClick={() => onCancelClick()}
    >
      <i className="far fa-angle-left left" />
      <span>Start again</span>
    </button>
  );
};

export default ClearAndBack;

ClearAndBack.propTypes = {
  onCancelClick: PropTypes.instanceOf(Function).isRequired
};
