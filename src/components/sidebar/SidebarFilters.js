import React, { useContext } from 'react';
import FiltersGroup from './FiltersGroup';
import { GlobalDispatch } from '../../store';

function SidebarFilters() {
  const sidebarFilters = ['Category', 'Age', 'Eligibility', 'SkillLevel'];
  const dispatcher = useContext(GlobalDispatch);

  const onClick = () => {
    console.log('here');
    dispatcher.dispatch({
      type: 'SET_INITIAL_JOBS',
      payload: []
    });
  };
  return (
    <div>
      <div className="container-wide bg-white">
        <div className="pure-g justify-between">
          <div className="pure-u-1">
            <h2>Filter</h2>
            <button type="submit" className="btn-primary solid" onClick={() => onClick()}>
              <span>Cancel</span>
            </button>
            {sidebarFilters.map(filter => {
              return <FiltersGroup key={filter} filterName={filter} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarFilters;
