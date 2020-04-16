import React, { useState, useContext } from 'react';
import SideBarFilters from './SidebarFilters';
import SideBarFiltersInitial from './SidebarFiltersInitial';
import { GlobalState } from '../../store';

const Sidebar = () => {
  const globalState = useContext(GlobalState);
  const show = globalState.showResults;

  return <div>{show ? <SideBarFilters /> : <SideBarFiltersInitial />}</div>;
};

export default Sidebar;
