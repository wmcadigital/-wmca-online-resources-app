import React, { useContext, useEffect, useState, useCallback } from 'react';
import { GlobalState } from '../../store';
import ResultItem from './ResultItem';
import ResultsHeader from './ResultsHeader';

function Results() {
  const jobs = useContext(GlobalState);
  const { selectedFilters, allJobs, showResults } = jobs.store;
  const hasFilters = selectedFilters.length > 0;
  const [selectedToRender, setSelecteToRender] = useState();
  const makeIt = useCallback(() => {
    const arr = [];
    
  }, [allJobs, hasFilters, selectedFilters]);

  useEffect(() => {
    makeIt();
  }, [makeIt]);
  return <div>{showResults && 'Results:'}</div>;
}

export default Results;
