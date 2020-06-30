import React, { useContext, useEffect, useState } from 'react';
import { GlobalState } from '../../store';
import ResultItem from './ResultItem';
import ResultsHeader from './ResultsHeader';

function Results() {
  const jobs = useContext(GlobalState);
  // selected jobs are being set on initial view, secondFilterJobs is holding all datasets for filtered opportunities.
  // you can switch here back to preselcted selectedJobs
  const { selectedJobs, secondFilterJobs } = jobs.store;
  const [opportunitiesToDisplay, setOpportunitiesToDisplay] = useState();
  /** if first condition is met : this is what you see when you initially land on second filtered screen 
   *  or you displaying filttered jobs based on `selectedJobs`
   * */
  useEffect(() => {
    if ((secondFilterJobs && secondFilterJobs.length > 0) || secondFilterJobs === null) {
      setOpportunitiesToDisplay(secondFilterJobs);
    } else {
      setOpportunitiesToDisplay(selectedJobs);
    }
  }, [setOpportunitiesToDisplay, opportunitiesToDisplay, secondFilterJobs, selectedJobs]);

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
              id={job.Id}
            />
          );
        })}
    </div>
  );
  // );
}

export default Results;
