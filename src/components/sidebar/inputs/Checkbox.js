import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { UPDATE_SELECTED_FILTERS } from '../../../actionTypes';
import { GlobalState, GlobalDispatch } from '../../../store';

const Checkbox = props => {
  const { name, parent } = props;
  const dispatcher = useContext(GlobalDispatch);
  const globalState = useContext(GlobalState);
  const { selectedFilters } = globalState.store;
  const onInputChange = () => {
    let arr = selectedFilters;
    if (arr.indexOf(name) < 0) {
      arr = [...arr, name];
    } else {
      arr = arr.filter(el => el !== name);
    }
    dispatcher.dispatch({
      type: UPDATE_SELECTED_FILTERS,
      payload: arr
    });
  };

  return (
    <div className="wmca-form">
      <span className="wmca-form__checkboxes pure-u-1">
        <label htmlFor={`${name}_${parent}`} className="wmca-form__checkboxes-label">
          {name}
          <input
            type="checkbox"
            value={name || 'Missing'}
            id={`${name}_${parent}`}
            onChange={() => {
              onInputChange();
            }}
          />
          <span className="wmca-form__checkboxes-checkmark"> </span>
        </label>
      </span>
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  parent: PropTypes.string
};

Checkbox.defaultProps = {
  name: 'Missing data',
  parent: ''
};

export default React.memo(Checkbox);
