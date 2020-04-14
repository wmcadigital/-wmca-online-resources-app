import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { getFiltersGroup } from '../../utils/utils';
import { GlobalState } from '../../store';
import Radio from './inputs/Radio';

function FiltersGroup(props) {
  const { filterName } = props;
  const globalState = useContext(GlobalState);

  const { allJobs } = globalState.store;
  const [filters, setAllFilters] = useState([]);

  React.useEffect(() => {
    setAllFilters(getFiltersGroup(allJobs, filterName));
  }, [allJobs, filterName]);

  return (
    <>
      <div className="wmca-form wdgt">
        <label htmlFor="radio" className="wmca-form-label filter-title">
          {filterName}
        </label>
        {filters &&
          filters.map((filter, i) => {
            return (
              filter && (
                <Radio int={i} name={filter} parent={filterName} key={`${filterName}-${filter}`} />
              )
            );
          })}
      </div>
    </>
  );
}

export default FiltersGroup;

FiltersGroup.propTypes = {
  filterName: PropTypes.string
};

FiltersGroup.defaultProps = {
  filterName: ''
};
