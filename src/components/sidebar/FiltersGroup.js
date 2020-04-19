import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { getFiltersGroup } from '../../utils/utils';
import { GlobalState, GlobalDispatch } from '../../store';
import Radio from './inputs/Radio';
import Dropdown from './inputs/Dropdown';
import { FiltersDispatch, FiltersState } from './SidebarStore';

function FiltersGroup(props) {
  const { name, displayName } = props;
  const globalState = useContext(GlobalState);
  const filterDispatch = useContext(FiltersDispatch);
  const filterState = useContext(FiltersState);

  const { selectedJobs, secondFilterJobs } = globalState.store;
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
          value
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
    setAllFilters(getFiltersGroup(selectedJobs, name));
  }, [selectedJobs, name]);
  // React.useEffect(() => {
  //   setAllFilters(getFiltersGroup(secondFilterJobs, name));
  // }, [secondFilterJobs, name, cat]);
  return (
    <div className="wmca-form wdgt">
      <label className="wmca-form-label filter-title">{`${displayName}:  ${name}`}</label>
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
  displayName: PropTypes.string,
  selector: PropTypes.string
};

FiltersGroup.defaultProps = {
  name: '',
  displayName: '',
  selector: ''
};
