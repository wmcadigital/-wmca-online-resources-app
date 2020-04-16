import React from 'react';
import { FETCH_JOBS, UPDATE_SELECTED_FILTERS, UPDATE_INITIAL_JOBS } from './actionTypes';

const initialState = {
  allJobs: [],
  selectedFilters: [],
  selectedJobs: [],
  showResults: false,
  initialFilteredJobs: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return { ...state, allJobs: action.payload };
    case UPDATE_SELECTED_FILTERS:
      return { ...state, selectedFilters: action.payload };
    case UPDATE_INITIAL_JOBS:
      return { ...state, initialFilteredJobs: action.payload };
    case 'SET_INITIAL_JOBS':
      return { ...state, selectedJobs: action.payload };
    default:
      return state;
  }
};

const GlobalState = React.createContext(null);
const GlobalDispatch = React.createContext(null);

export { initialState, reducer, GlobalState, GlobalDispatch };
