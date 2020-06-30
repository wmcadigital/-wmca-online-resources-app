import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { getFiltersGroup } from '../../utils/utils';
import { GlobalState } from '../../store';
import Radio from './inputs/Radio';
import { FiltersDispatch } from './SidebarStore';

function FiltersGroupInitial(props) {
  const { filterName, displayName } = props;
  // set context
  const filterDispatch = useContext(FiltersDispatch);
  const globalState = useContext(GlobalState);
  // get all jobs
  const { allJobs } = globalState.store;
  const [filters, setAllFilters] = useState();

  // having data passed on radio change
  const setSelectedFilters = (value, parent) => {
    filterDispatch.dispatch({
      type: 'SET_INITIAL_FILTERS',
      payload: {
        parent,
        value
      }
    });
  };
  // get all selectable filters from the filter groupo: allJobs, filterName
  React.useEffect(() => {
    setAllFilters(getFiltersGroup(allJobs, filterName));
  }, [allJobs, filterName]);

  return (
    <>
      <div className="wmca-form wdgt">
        <label htmlFor="radio" className="wmca-form-label filter-title">
          {displayName}
        </label>
        {filters &&
          filters.map((filter, i) => {
            return (
              filter && (
                <Radio
                  setSelectedFilters={setSelectedFilters}
                  int={i}
                  name={filter}
                  parent={filterName}
                  key={`${filterName}-${filter}`}
                />
              )
            );
          })}
      </div>
    </>
  );
}

export default React.memo(FiltersGroupInitial);

FiltersGroupInitial.propTypes = {
  filterName: PropTypes.string,
  displayName: PropTypes.string
};

FiltersGroupInitial.defaultProps = {
  filterName: '',
  displayName: ''
};
