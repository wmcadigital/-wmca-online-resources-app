import React, { useContext, useEffect, useState } from 'react';
import { GlobalState } from '../../store';
import ResultItem from './ResultItem';
import ResultsHeader from './ResultsHeader';

function Results() {
  const jobs = useContext(GlobalState);
  const { selectedJobs, secondFilterJobs, currentPage } = jobs.store;
  const [opportunitiesToDisplay, setOpportunitiesToDisplay] = useState();
  useEffect(() => {
    if ((secondFilterJobs && secondFilterJobs.length > 0) || secondFilterJobs === null) {
      setOpportunitiesToDisplay(secondFilterJobs[currentPage]);
    } else {
      setOpportunitiesToDisplay(selectedJobs[currentPage]);
    }
  }, [
    setOpportunitiesToDisplay,
    opportunitiesToDisplay,
    secondFilterJobs,
    selectedJobs,
    currentPage
  ]);

  return (
    <div>
      <ResultsHeader />
      {opportunitiesToDisplay &&
        opportunitiesToDisplay.length > 0 &&
        opportunitiesToDisplay.map(job => {
          return (
            <ResultItem
              key={job.Id}
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
  // );
}

export default Results;
