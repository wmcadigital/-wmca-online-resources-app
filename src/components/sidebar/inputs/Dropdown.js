import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

function DropDown(props) {
  const DEFAULT = 'select';
  const { selectValue, parent } = props;
  const [selectedValue, setSelected] = useState('select');

  function onSlectedChange(e) {
    // arr = arr.filter(el => el !== selectedValue);
  }



  return (
    <div className="pure-u-1">
      <div className="wmca-form wdgt">
        <select
          value={selectedValue}
          id={parent}
          onBlur={e => {
            onSlectedChange(e);
          }}
        >
          <option value={DEFAULT}>Select</option>
          {selectValue &&
            selectValue.map(select => {
              return (
                <option
                  onBlur={e => {
                    onSlectedChange(e);
                  }}
                  value={select}
                  key={`select_${select}`}
                >
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
  parent: PropTypes.string
};

DropDown.defaultProps = {
  selectValue: [],
  parent: ''
};
