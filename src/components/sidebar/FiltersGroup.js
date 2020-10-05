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

  React.useEffect(() => {
    const filtersToSort = getFiltersGroup(selectedJobs, name);
    setAllFilters(filtersToSort.sort());
  }, [selectedJobs, name]);
  return (
    <fieldset aria-required="true" className="wmcads-fe-fieldset">
      {filters && name === 'Category' ? (
        <label htmlFor={name}>{`${displayName}`}</label>
      ) : (
        <legend className="wmcads-fe-fieldset__legend">{`${displayName}`}</legend>
      )}

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
    </fieldset>
  );
}

export default FiltersGroup;

FiltersGroup.propTypes = {
  name: PropTypes.string,
  displayName: PropTypes.string,
  selector: PropTypes.string
};

FiltersGroup.defaultProps = {
  name: '',
  displayName: '',
  selector: ''
};
