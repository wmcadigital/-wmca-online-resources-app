/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
// import { UPDATE_SELECTED_FILTERS } from '../../actionTypes';
import { getFiltersGroup } from '../../utils/utils';
import { GlobalState } from '../../store';
import Checkbox from './inputs/Checkbox';

function FiltersGroup(props) {
  const { filterName } = props;
  const globalState = useContext(GlobalState);

  const { allJobs } = globalState.store;
  const [filters, setAllFilters] = useState([]);

  React.useEffect(() => {
    setAllFilters(getFiltersGroup(allJobs, filterName));
  }, [allJobs, getFiltersGroup]);

  return (
    <div className="wmca-form wdgt">
      <label className="wmca-form-label filter-title">{filterName}:</label>
      {filters &&
        filters.map(filter => {
          return <Checkbox name={filter} parent={filterName} key={`${filterName}-${filter}`} />;
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
