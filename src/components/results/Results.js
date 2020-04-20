import React, { useContext, useEffect, useState } from 'react';
import { GlobalState } from '../../store';
import ResultItem from './ResultItem';
import ResultsHeader from './ResultsHeader';

function Results() {
  const jobs = useContext(GlobalState);
  const { selectedJobs, secondFilterJobs } = jobs.store;
  const [opportunitiesToDisplay, setOpportunitiesToDisplay] = useState();
  useEffect(() => {
    if ((secondFilterJobs && secondFilterJobs.length > 0) || secondFilterJobs === null) {
      setOpportunitiesToDisplay(secondFilterJobs);
    } else {
      setOpportunitiesToDisplay(selectedJobs);
    }
  }, [setOpportunitiesToDisplay, opportunitiesToDisplay, secondFilterJobs, selectedJobs]);

  return (
    <div>
      {opportunitiesToDisplay && <ResultsHeader selectedToRender={opportunitiesToDisplay.length} />}
      {opportunitiesToDisplay &&
        opportunitiesToDisplay.length > 0 &&
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
