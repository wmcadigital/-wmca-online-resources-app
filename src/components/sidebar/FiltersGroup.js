import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { getFiltersGroup } from '../../utils/utils';
import { GlobalState } from '../../store';
import Checkbox from './inputs/Checkbox';
import Radio from './inputs/Radio';
import Dropdown from './inputs/Dropdown';

function FiltersGroup(props) {
  const { name, displayName, selector } = props;
  const globalState = useContext(GlobalState);

  const { selectedJobs } = globalState.store;
  const [filters, setAllFilters] = useState([]);

  React.useEffect(() => {
    setAllFilters(getFiltersGroup(selectedJobs, name));
  }, [selectedJobs, name]);
  return (
    <div className="wmca-form wdgt">
      <label className="wmca-form-label filter-title">{`${displayName}:  ${name}`}</label>
      {filters && name === 'Category' ? (
        <Dropdown selectValue={filters} parent={name} />
      ) : (
        filters &&
        filters.map((filter, i) => {
          return filter && <Radio int={i} name={filter} parent={name} key={`${name}-${filter}`} />;
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
