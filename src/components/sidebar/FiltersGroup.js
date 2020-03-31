/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { getFiltersGroup } from '../../utils/utils';
import { GlobalState } from '../../store';
import Checkbox from './inputs/Checkbox';

function FiltersGroup(props) {
  const { filterName } = props;
  const globalState = useContext(GlobalState);
  const { allJobs } = globalState.store;
  const [filters, setAllFilters] = useState([]);
  const [selected, setSelected] = useState([]);
  const onCheckboxUpdate = val => {
    console.log('selected change', val);
    let arr = selected;
    if (arr.indexOf(val) < 0) {
      arr = [...arr, val];
      setSelected(arr);
    } else {
      arr = arr.filter(el => el !== val);
      setSelected(arr);
    }
  };
  React.useEffect(() => {
    setAllFilters(getFiltersGroup(allJobs, filterName));
  }, [allJobs, getFiltersGroup]);

  React.useEffect(() => {
    console.log(selected)
  }, [selected]);

  return (
    <div className="wmca-form wdgt">
      <label className="wmca-form-label filter-title">{filterName}:</label>
      {filters &&
        filters.map(filter => {
          return (
            <Checkbox
              onCheckboxUpdate={onCheckboxUpdate}
              name={filter}
              parent={filterName}
              key={`${filterName}-${filter}`}
            />
          );
        })}
    </div>
  );
}

export default FiltersGroup;

FiltersGroup.propTypes = {
  filterName: PropTypes.string
};

FiltersGroup.defaultProps = {
  filterName: ''
};
