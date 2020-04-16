import React, { useContext, useEffect, useCallback } from 'react';
import { GlobalState } from '../../store';
import ResultItem from './ResultItem';
import ResultsHeader from './ResultsHeader';

function Results() {
  const jobs = useContext(GlobalState);
  const { selectedJobs } = jobs.store;
  const hasFilters = selectedJobs.length > 0;

  return (
    <div>
      <ResultsHeader selectedToRender={selectedJobs.length}  />
      {hasFilters &&
        selectedJobs.map(job => {
          return (
            <ResultItem
              key={`${job.Link}_${job.Url}`}
              name={job.Name}
              provider={job.Provider}
              url={job.Url}
              link={job.Link}
              summary={job.Summary}
            />
          );
        })}
    </div>
  );
}

export default Results;
