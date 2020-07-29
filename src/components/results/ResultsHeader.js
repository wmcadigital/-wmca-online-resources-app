/* eslint-disable no-nested-ternary */
import React, { useContext, useState, useEffect } from 'react';
import { GlobalState } from '../../store';

function ResultsHeader() {
  const jobs = useContext(GlobalState);
  const { secondFilterJobs } = jobs.store;
  const [title, setTitle] = useState('No Results');
  // todo - make use of isLoading flag - after creating it
  const results =
    secondFilterJobs !== null && secondFilterJobs.length > 0
      ? secondFilterJobs && secondFilterJobs.length > 1
        ? `${secondFilterJobs.length} results`
        : `${secondFilterJobs.length} result`
      : '';

  useEffect(() => {
    if (secondFilterJobs !== null && secondFilterJobs.length > 0) {
      setTitle(results);
    } else {
      setTitle(`No Results`);
    }
  }, [secondFilterJobs, results]);

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default ResultsHeader;
