import React from 'react';
import { FETCH_JOBS, UPDATE_SELECTED_FILTERS, UPDATE_ON_SECOND_FILTER } from './actionTypes';

const initialState = {
  allJobs: [],
  selectedJobs: [],
  showResults: false,
  secondFilterJobs: [],
  currentPage: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return { ...state, allJobs: action.payload };
    case UPDATE_ON_SECOND_FILTER:
      return { ...state, secondFilterJobs: action.payload };
    case 'SET_INITIAL_FILTERED_JOBS':
      return { ...state, selectedJobs: action.payload };
    case 'TOGGLE_RESULTS':
      return { ...state, showResults: action.payload };
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

const GlobalState = React.createContext(null);
const GlobalDispatch = React.createContext(null);

export { initialState, reducer, GlobalState, GlobalDispatch };
