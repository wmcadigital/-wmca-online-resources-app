import React from 'react';
import FiltersGroup from './FiltersGroup';

function SidebarFilters() {
  const sidebarFilters = [
    'Category',
    'Opportunity',
    'Eligibility',
    'SkillLevel',
    'Age',
    'Provider',
  ];

  return (
    <div>
      <div className="container-wide bg-white">
        <div className="pure-g justify-between">
          <div className="pure-u-1">
            <h2>Filter</h2>
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
