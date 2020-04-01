/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { UPDATE_SELECTED_FILTERS } from '../../actionTypes';
import { getFiltersGroup } from '../../utils/utils';
import { GlobalState, GlobalDispatch } from '../../store';
import Checkbox from './inputs/Checkbox';

function FiltersGroup(props) {
  const { filterName } = props;
  const globalState = useContext(GlobalState);
  const dispatcher = useContext(GlobalDispatch);
  const { allJobs, selectedFilters } = globalState.store;
  const [filters, setAllFilters] = useState([]);
  const [selected, setSelected] = useState(selectedFilters);
  const onCheckboxUpdate = val => {
    let arr = selectedFilters;
    if (arr.indexOf(val) < 0) {
      arr = [...arr, val];
      //setSelected(arr);
    } else {
      arr = arr.filter(el => el !== val);
      //setSelected(arr);
    }
    dispatcher.dispatch({
      type: UPDATE_SELECTED_FILTERS,
      payload: arr
    });
  };
  React.useEffect(() => {
    setAllFilters(getFiltersGroup(allJobs, filterName));
  }, [allJobs, getFiltersGroup]);

  // React.useEffect(() => {
  //   console.log(selected);
  //   dispatcher.dispatch({
  //     type: UPDATE_SELECTED_FILTERS,
  //     payload: selected
  //   });
  // }, [selected]);

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
