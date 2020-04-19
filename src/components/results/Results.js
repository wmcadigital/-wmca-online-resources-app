import React, { useContext, useEffect, useCallback } from 'react';
import { GlobalState } from '../../store';
import ResultItem from './ResultItem';
import ResultsHeader from './ResultsHeader';

function Results() {
  const jobs = useContext(GlobalState);
  const { selectedJobs, secondFilterJobs } = jobs.store;
  const opportunitiesToDisplay = secondFilterJobs.length > 0 ? secondFilterJobs : selectedJobs;
  const hasFilters = opportunitiesToDisplay.length > 0;

  return (
    <div>
      <ResultsHeader selectedToRender={opportunitiesToDisplay.length} />
      {hasFilters &&
        opportunitiesToDisplay.map(job => {
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
