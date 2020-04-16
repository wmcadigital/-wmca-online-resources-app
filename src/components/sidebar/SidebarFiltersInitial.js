import React, { useReducer, useMemo, useEffect, useState, useContext } from 'react';
import FiltersGroup from './FiltersGroupInitial';
import { GlobalState } from '../../store';
import { initialState, reducer, FiltersState, FiltersDispatch } from './SidebarStore';

function SidebarFiltersInitial() {
  const sidebarFilters = ['Opportunity', 'Age'];

  const jobs = useContext(GlobalState);
  let { allJobs } = jobs.store;
  console.log('jobsjobsjobsjobs:', jobs);

  const [store, dispatch] = useReducer(reducer, initialState);
  const dispatchContex = useMemo(() => ({ dispatch }), [dispatch]);
  const storeContex = useMemo(() => ({ store }), [store]);
  const [canSubmit, toggleCanSubbmit] = useState(false);
  const selected = Object.values(storeContex.store);
  const onClick = () => {
    let test = allJobs;
    if(storeContex.store.Opportunity) {
      test = test.filter((elem) => {
        return elem.filters.indexOf(storeContex.store.Opportunity) > 0 ;
      })
    }

    if(storeContex.store.Age) {
      test = test.filter((elem) => {
        return elem.filters.indexOf(storeContex.store.Age) > 0 ;
      })
    }

    console.log(test);

    

  };

  useEffect(() => {
    if (storeContex.store.Age !== '' && storeContex.store.Opportunity !== '') {
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
                  return <FiltersGroup key={filter} filterName={filter} />;
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
