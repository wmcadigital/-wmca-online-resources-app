import React from 'react';
import { FiltersDispatch } from './SidebarStore';
import { GlobalDispatch, GlobalState } from '../../store';

const ClearAllSecondaryFilters = () => {
  const filtersDispatch = React.useContext(FiltersDispatch);
  const globalDispatch = React.useContext(GlobalDispatch);
  const jobs = React.useContext(GlobalState);
  const { selectedJobs } = jobs.store;
  const onClearClick = () => {
    filtersDispatch.dispatch({
      type: 'RESET'
    });
    globalDispatch.dispatch({
      type: 'UPDATE_ON_SECOND_FILTER',
      payload: selectedJobs
    });
  };
  return (
    <button type="submit" className="btn-main btn-main-primary" onClick={() => onClearClick()}>
      <i className="fal fa-times left" />
      <span>Clear filters</span>
    </button>
  );
};

export default ClearAllSecondaryFilters;

