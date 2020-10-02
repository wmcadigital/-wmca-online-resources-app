import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FiltersState } from '../SidebarStore';

const Radio = props => {
  const { name, parent, int, setSelectedFilters } = props;
  const filterState = useContext(FiltersState);
  const onInputChange = e => {
    setSelectedFilters(e.target.value, parent);
  };
  return (
    <label className="wmcads-fe-radios__container">
      {name}
      <input
        className="wmcads-fe-radios__input"
        value={name || 'Missing'}
        checked={filterState.store[parent] === name}
        name={`radio_${parent}`}
        onChange={e => {
          onInputChange(e);
        }}
        type="radio"
      />
      <span className="wmcads-fe-radios__checkmark" />
    </label>
  );
};

Radio.propTypes = {
  name: PropTypes.string,
  int: PropTypes.number,
  parent: PropTypes.string,
  setSelectedFilters: PropTypes.instanceOf(Function).isRequired
};

Radio.defaultProps = {
  name: 'Missing data',
  int: '',
  parent: ''
};

export default React.memo(Radio);
