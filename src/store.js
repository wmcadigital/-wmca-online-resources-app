import React from 'react';

const initialState = {
  allJobs: [],
  selectedFilters: [],
  selectedJobs: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setAllJobsAfterFetch':
      return { ...state, allJobs: action.payload };
    default:
      return state;
  }
};

const GlobalState = React.createContext(null);
const GlobalDispatch = React.createContext(null);

export { initialState, reducer, GlobalState, GlobalDispatch };
