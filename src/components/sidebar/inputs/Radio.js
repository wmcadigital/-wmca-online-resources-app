import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { UPDATE_SELECTED_FILTERS } from '../../../actionTypes';
import { GlobalState, GlobalDispatch } from '../../../store';

const Radio = props => {
  const { name, parent, int } = props;
  const dispatcher = useContext(GlobalDispatch);
  const globalState = useContext(GlobalState);
  const { selectedFilters } = globalState.store;
  const onInputChange = () => {
    // let arr = selectedFilters;
    // if (arr.indexOf(name) < 0) {
    //   arr = [...arr, name];
    // } else {
    //   arr = arr.filter(el => el !== name);
    // }
    // dispatcher.dispatch({
    //   type: UPDATE_SELECTED_FILTERS,
    //   payload: arr
    // });
  };

  return (
    <span className="wmca-form__radio pure-u-1" id={`radio_${parent}`}>
      <label htmlFor={`radio_${int}_${parent}`} className="wmca-form__radio-label">
        {name}
        <input
          type="radio"
          name={`radio_${parent}`}
          value={name || 'Missing'}
          id={`radio_${int}_${parent}`}
          onChange={() => {
            onInputChange();
          }}
        />
        <span className="wmca-form__radio-checkmark"> </span>
      </label>
    </span>
  );
};

Radio.propTypes = {
  name: PropTypes.string,
  int: PropTypes.number,
  parent: PropTypes.string
};

Radio.defaultProps = {
  name: 'Missing data',
  int: '',
  parent: ''
};

export default React.memo(Radio);
