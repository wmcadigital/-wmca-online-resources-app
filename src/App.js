import React, { useReducer, useMemo, useEffect } from 'react';
import { initialState, reducer, GlobalState, GlobalDispatch } from './store';
import data from './data.json';

import Header from './components/Header';
import SideBarFilters from './components/sidebar/SidebarFilters';
import Results from './components/results/Results';

function App() {
  const [store, dispatch] = useReducer(reducer, initialState);
  const dispatchContex = useMemo(() => ({ dispatch }), [dispatch]);
  const storeContex = useMemo(() => ({ store }), [store]);

  const fetchData = () => {
    return dispatch({
      type: 'setAllJobsAfterFetch',
      payload: data
    });
  };

  useEffect(() => {
    document.body.classList = 'bg-white app-blog';
    fetchData();
  }, []);
  
  return (
    <div className="App">
      <Header />
      <GlobalDispatch.Provider value={dispatchContex}>
        <GlobalState.Provider value={storeContex}>
          <div className="container-wide bg-white pad-30">
            <div className="pure-g justify-between">
              <div className="pure-u-1 pure-u-md-1-4">
                <SideBarFilters />
              </div>
              <div className="pure-u-1 pure-u-md-5-8" id="stories">
                <Results />
              </div>
            </div>
          </div>
        </GlobalState.Provider>
      </GlobalDispatch.Provider>
    </div>
  );
}

export default App;
