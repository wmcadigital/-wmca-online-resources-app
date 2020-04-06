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
      // eslint-disable-next-line array-callback-return
      allJobs.map(job => {
        if (selectedFilters.some(item => job.filters.includes(item))) {
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
  return (
    <div>
      {selectedToRender && selectedToRender.length > 0 && (
        <ResultsHeader selectedToRender={selectedToRender.length} />
      )}

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
