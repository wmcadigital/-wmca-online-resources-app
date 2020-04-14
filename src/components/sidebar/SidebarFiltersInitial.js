import React from 'react';
import FiltersGroup from './FiltersGroupInitial';

function SidebarFiltersInitial() {
  const sidebarFilters = ['Opportunity', 'Age'];

  return (
    <div>
      <div className="container-wide bg-white">
        <div className="pure-g justify-between">
          <div className="pure-u-1">
            <h2>Find an opportunity</h2>
            {sidebarFilters.map(filter => {
              return <FiltersGroup key={filter} filterName={filter} />;
            })}
            <button type="submit" className="btn-primary solid">
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarFiltersInitial;
