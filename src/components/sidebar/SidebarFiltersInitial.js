import React, { useReducer, useMemo, useEffect, useState, useContext } from 'react';
import FiltersGroup from './FiltersGroupInitial';
import { GlobalState, GlobalDispatch } from '../../store';
import { initialState, reducer, FiltersState, FiltersDispatch } from './SidebarStore';

function SidebarFiltersInitial() {
  const sidebarFilters = [
    { name: 'Opportunity', displayName: 'I am looking for *' },
    { name: 'Eligibility', displayName: 'Eligibility' }
  ];
  const jobs = useContext(GlobalState);
  const dispatcher = useContext(GlobalDispatch);
  const { allJobs } = jobs.store;

  const [store, dispatch] = useReducer(reducer, initialState);
  const dispatchContex = useMemo(() => ({ dispatch }), [dispatch]);
  const storeContex = useMemo(() => ({ store }), [store]);
  const [canSubmit, toggleCanSubbmit] = useState(false);
  const onClick = () => {
    if (!canSubmit) return;
    let initial = allJobs;
    if (storeContex.store.Opportunity) {
      initial = initial.filter(elem => {
        return elem.filters.indexOf(storeContex.store.Opportunity) > 0;
      });
    }

    if (storeContex.store.Eligibility) {
      initial = initial.filter(elem => {
        return elem.filters.indexOf(storeContex.store.Eligibility) > 0;
      });
    }
    // split array and dispatch
    dispatcher.dispatch({
      type: 'SET_INITIAL_FILTERED_JOBS',
      payload: initial
    });
    dispatcher.dispatch({
      type: 'TOGGLE_RESULTS',
      payload: true
    });
  };

  useEffect(() => {
    if (storeContex.store.Eligibility !== '' && storeContex.store.Opportunity !== '') {
      toggleCanSubbmit(true);
    }
  }, [storeContex]);

  return (
    <FiltersDispatch.Provider value={dispatchContex}>
      <FiltersState.Provider value={storeContex}>
        <div>
          <div className="container-wide bg-white">
            <div className="pure-g justify-between">
              <div className="pure-u-1">
                <h2>Find an opportunity</h2>
                {sidebarFilters.map(filter => {
                  return (
                    <FiltersGroup
                      key={filter.name}
                      filterName={filter.name}
                      displayName={filter.displayName}
                    />
                  );
                })}
                <button
                  type="submit"
                  className={`btn-primary solid ${canSubmit ? 'hasFilters' : 'disabled'}`}
                  onClick={() => onClick()}
                >
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </FiltersState.Provider>
    </FiltersDispatch.Provider>
  );
}

export default SidebarFiltersInitial;
