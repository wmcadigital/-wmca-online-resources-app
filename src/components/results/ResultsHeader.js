/* eslint-disable no-nested-ternary */
import React, { useContext, useState, useEffect } from 'react';
import { GlobalState } from '../../store';

function ResultsHeader() {
  const jobs = useContext(GlobalState);
  const { secondFilterJobs } = jobs.store;
  const [title, setTitle] = useState();

  const results =
    secondFilterJobs !== null
      ? secondFilterJobs && secondFilterJobs.length > 1
        ? `${secondFilterJobs.length} results`
        : `${secondFilterJobs.length} result`
      : '';

  useEffect(() => {
    if (secondFilterJobs !== null) {
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
