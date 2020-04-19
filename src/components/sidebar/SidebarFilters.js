import React, { useContext } from 'react';
import FiltersGroup from './FiltersGroup';
import { GlobalDispatch } from '../../store';

function SidebarFilters() {
  const sidebarFilters = [
    { name: 'Category', displayName: 'Industry', selector: 'dropdown' },
    { name: 'Age', displayName: 'Age', selector: 'radio' },
    { name: 'SkillLevel', displayName: 'Skill Level', selector: 'radio' }
  ];
  const dispatcher = useContext(GlobalDispatch);

  const onCancelClick = () => {
    dispatcher.dispatch({
      type: 'SET_INITIAL_FILTERED_JOBS',
      payload: []
    });
  };
  return (
    <div>
      <div className="container-wide bg-white">
        <div className="pure-g justify-between">
          <div className="pure-u-1">
            <h2>Filter</h2>
            <button type="submit" className="btn-primary solid" onClick={() => onCancelClick()}>
              <span>Cancel</span>
            </button>
            {sidebarFilters.map(filter => {
              return (
                <FiltersGroup
                  key={filter.name}
                  name={filter.name}
                  displayName={filter.displayName}
                  selector={filter.selector}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarFilters;
