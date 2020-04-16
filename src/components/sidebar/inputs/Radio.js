import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

const Radio = props => {
  const { name, parent, int, setSelectedFilters } = props;
  const onInputChange = e => {
    setSelectedFilters(e.target.value, parent);
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
          onChange={e => {
            onInputChange(e);
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
