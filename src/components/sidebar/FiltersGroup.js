import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { getFiltersGroup } from '../../utils/utils';
import { GlobalState } from '../../store';
import Radio from './inputs/Radio';
import Dropdown from './inputs/Dropdown';
import { FiltersDispatch } from './SidebarStore';

function FiltersGroup(props) {
  const { name, displayName } = props;
  const globalState = useContext(GlobalState);
  const filterDispatch = useContext(FiltersDispatch);

  const { selectedJobs } = globalState.store;
  const [filters, setAllFilters] = useState([]);
  const setSelectedFilters = (value, parent) => {
    // i hear you ask why - this is to reset the secondary filters when dropdown changes - radiobuttons clear values
    if (parent === 'Category') {
      filterDispatch.dispatch({
        type: 'RESET'
      });
      filterDispatch.dispatch({
        type: 'SET_INITIAL_FILTERS',
        payload: {
          parent,
          value: value === 'select' ? '' : value
        }
      });
    } else {
      filterDispatch.dispatch({
        type: 'SET_INITIAL_FILTERS',
        payload: {
          parent,
          value
        }
      });
    }
  };

  // get all filters for the group
  React.useEffect(() => {
    const filtersToSort = getFiltersGroup(selectedJobs, name);
    setAllFilters(filtersToSort.sort());
  }, [selectedJobs, name]);
  return (
    <div className="wmca-form wdgt">
      <label name={name} id={name} className="wmca-form-label filter-title">
        {`${displayName}`}
      </label>
      {/* two different types of filters - but dropdown is the one who rule them all */}
      {filters && name === 'Category' ? (
        <Dropdown setSelectedFilters={setSelectedFilters} selectValue={filters} parent={name} />
      ) : (
        filters &&
        filters.map((filter, i) => {
          return (
            filter && (
              <Radio
                setSelectedFilters={setSelectedFilters}
                int={i}
                name={filter}
                parent={name}
                key={`${name}-${filter}`}
              />
            )
          );
        })
      )}
    </div>
  );
}

export default FiltersGroup;

FiltersGroup.propTypes = {
  name: PropTypes.string,
  displayName: PropTypes.string
};

FiltersGroup.defaultProps = {
  name: '',
  displayName: ''
};
