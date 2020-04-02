import React, { useContext, useEffect, useState, useCallback } from 'react';
import { GlobalState } from '../../store';
import ResultItem from './ResultItem';
import ResultsHeader from './ResultsHeader';

function Results() {
  const jobs = useContext(GlobalState);
  const { selectedFilters, allJobs } = jobs.store;
  const hasFilters = selectedFilters.length > 0;
  const [selectedToRender, setSelecteToRender] = useState();
  const makeIt = useCallback(() => {
    const arr = [];
    if (hasFilters) {
      allJobs.map(job => {
        // eslint-disable-next-line array-callback-return
        if (job.filters.some(item => selectedFilters.includes(item))) {
          arr.push(job);
        }
      });
      setSelecteToRender(arr);
    } else {
      setSelecteToRender(allJobs);
    }
  }, [allJobs, hasFilters, selectedFilters]);

  useEffect(() => {
    makeIt();
  }, [makeIt]);
  console.log('RENDERING');
  return (
    <div>
      <ResultsHeader
        length={
          selectedToRender && selectedToRender.length > 0
            ? `${selectedToRender.length} results`
            : 'Fetching data'
        }
      />
      {selectedToRender &&
        selectedToRender.length > 0 &&
        selectedToRender.map(job => {
          return (
            <ResultItem
              key={job.Id}
              name={job.Name}
              provider={job.Provider}
              url={job.Url}
              from={job.DateFrom}
              to={job.DateTo}
              link={job.Link}
              summary={job.Summary}
              id={job.Id}
            />
          );
        })}
    </div>
  );
}

export default Results;
