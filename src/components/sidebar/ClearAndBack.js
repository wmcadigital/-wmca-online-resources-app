import React from 'react';
import { GlobalDispatch } from '../../store';

const ClearAndBack = () => {
  const buttonForceMargin = { marginBottom: '20px', marginTop: '30px' };
  const dispatcher = React.useContext(GlobalDispatch);
  const onCancelClick = () => {
    dispatcher.dispatch({
      type: 'SET_INITIAL_FILTERED_JOBS',
      payload: []
    });
    dispatcher.dispatch({
      type: 'UPDATE_ON_SECOND_FILTER',
      payload: []
    });
    dispatcher.dispatch({
      type: 'TOGGLE_RESULTS',
      payload: false
    });
  };
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

