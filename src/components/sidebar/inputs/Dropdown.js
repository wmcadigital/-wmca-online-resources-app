import React, { useState } from 'react';
import PropTypes from 'prop-types';

function DropDown(props) {
  const DEFAULT = 'select';
  const { selectValue, parent, setSelectedFilters } = props;
  const [selectedValue, setSelectedValue] = useState('select');

  function onSlectedChange(e) {
    setSelectedValue(e.target.value, parent);
    setSelectedFilters(e.target.value, parent);
  }

  return (
    <div className="pure-u-1">
      <div className="wmca-form wdgt">
        <select
          value={selectedValue}
          id={parent}
          onChange={e => {
            onSlectedChange(e);
          }}
          onBlur={e => {
            onSlectedChange(e);
          }}
        >
          <option value={DEFAULT}>Select</option>
          {selectValue &&
            selectValue.map(select => {
              return (
                <option value={select} key={`select_${select}`}>
                  {select}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
}

export default DropDown;

DropDown.propTypes = {
  selectValue: PropTypes.instanceOf(Array),
  parent: PropTypes.string,
  setSelectedFilters: PropTypes.instanceOf(Function).isRequired
};

DropDown.defaultProps = {
  selectValue: [],
  parent: ''
};
