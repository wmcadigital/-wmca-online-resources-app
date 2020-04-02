import React from 'react';
import { FETCH_JOBS, UPDATE_SELECTED_FILTERS } from './actionTypes';

const initialState = {
  allJobs: [],
  selectedFilters: [],
  selectedJobs: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      console.log(FETCH_JOBS);
      return { ...state, allJobs: action.payload };
    case UPDATE_SELECTED_FILTERS:
      console.log(UPDATE_SELECTED_FILTERS);
      return { ...state, selectedFilters: action.payload };
    default:
      return state;
  }
};

const GlobalState = React.createContext(null);
const GlobalDispatch = React.createContext(null);

export { initialState, reducer, GlobalState, GlobalDispatch };
