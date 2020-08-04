/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-plusplus */
import React from 'react';
import { splitArray } from '../utils/utils';

const useFilter = (selectedJobs, sidebarFilters, storeContexSidebar) => {
  const [resultsFilter, setResultsFilter] = React.useState(selectedJobs);
  let filteredResults = selectedJobs;

  React.useEffect(() => {
    for (let i = 0; i < sidebarFilters.length; i++) {
      const filterName = sidebarFilters[i].name;
      if (storeContexSidebar.store[filterName]) {
        filteredResults = selectedJobs.filter(elem => {
          return elem.filters.indexOf(storeContexSidebar.store[filterName]) > -1;
        });
      }
    }
    const toSend = selectedJobs.length === 0 ? null : filteredResults;
    splitArray(toSend).then(arr => {
      setResultsFilter(arr);
    });
  }, [storeContexSidebar]);

  return {
    resultsFilter
  };
};

export default useFilter;
