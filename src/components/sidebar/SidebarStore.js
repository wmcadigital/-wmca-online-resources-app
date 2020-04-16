import React from 'react';

const initialState = {
  Opportunity: '',
  Eligibility: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_INITIAL_FILTERS':
      return { ...state, [action.payload.parent]: action.payload.value };
    default:
      return state;
  }
};

const FiltersState = React.createContext(null);
const FiltersDispatch = React.createContext(null);

export { initialState, reducer, FiltersState, FiltersDispatch };
