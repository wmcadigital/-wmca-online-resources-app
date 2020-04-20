import React, { useContext } from 'react';
import SideBarFilters from './SidebarFilters';
import SideBarFiltersInitial from './SidebarFiltersInitial';
import { GlobalState } from '../../store';

const Sidebar = () => {
  const globalState = useContext(GlobalState);
  const { selectedJobs } = globalState.store;
  const hasFilters = selectedJobs.length > 0;

  return <div>{hasFilters ? <SideBarFilters /> : <SideBarFiltersInitial />}</div>;
};

export default Sidebar;
