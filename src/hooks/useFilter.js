import React from 'react';

const useFilter = (selectedJobs, sidebarFilters, storeContexSidebar, setSelectedOpportunities) => {
  const [resultsFilter, setResultsFilter] = React.useState([])
  let filteredResults = selectedJobs;

  React.useEffect(() => {
    for (let i = 0; i < sidebarFilters.length; i++) {
      const filterName = sidebarFilters[i].name;
      if (storeContexSidebar.store[filterName]) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        filteredResults = filteredResults.filter(elem => {
          return elem.filters.indexOf(storeContexSidebar.store[filterName]) > -1;
        });
      }
    }
    const toSend = filteredResults.length === 0 ? null : filteredResults;
    setResultsFilter(toSend);
  }, [storeContexSidebar]);

  return {
    resultsFilter
  };
};

export default useFilter;
