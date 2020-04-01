import React, { useContext } from 'react';
import { GlobalState } from '../../store';
import ResultItem from './ResultItem';

function Results() {
  const jobs = useContext(GlobalState);
  const { selectedFilters, allJobs } = jobs.store;
  const jobsFiltered = selectedFilters.length > 0;
  console.log('rendering results');

  return (
    <div>
      {jobsFiltered
        ? allJobs.map(job => {
            if (job.filters.some(item => selectedFilters.includes(item))) {
              return (
                <>
                  <ResultItem key={job.Id} id={job.Id} />
                </>
              );
            }
          })
        : allJobs.map(job => {
            return (
              <>
                <ResultItem key={job.Id} id={job.Id} />
              </>
            );
          })}
    </div>
  );
}

export default Results;
