import React, { useReducer, useMemo, useEffect } from 'react';
import { initialState, reducer, GlobalState, GlobalDispatch } from './store';
import { FETCH_JOBS } from './actionTypes';
import { setAllFiltersForElement } from './utils/utils';
import Header from './components/Header';

import Sidebar from './components/sidebar/Sidebar';
import Results from './components/results/Results';

const FETCHURL =
  'https://beta.wmca.org.uk/what-we-do/productivity-and-skills/online-resources?alttemplate=onlineResourcesJSON';

function App() {
  const [store, dispatch] = useReducer(reducer, initialState);
  const dispatchContex = useMemo(() => ({ dispatch }), [dispatch]);
  const storeContex = useMemo(() => ({ store }), [store]);

  const fetchData = () => {
    return fetch(FETCHURL)
      .then(res => res.json())
      .then(jsn => {
        setAllFiltersForElement(jsn).then(res => {
          dispatch({
            type: FETCH_JOBS,
            payload: res
          });
        });
      });
  };

  useEffect(() => {
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
                <Sidebar />
              </div>
              <div className="pure-u-1 pure-u-md-5-8" id="stories">
                {storeContex.store.showResults && <Results />}
              </div>
            </div>
          </div>
        </GlobalState.Provider>
      </GlobalDispatch.Provider>
    </div>
  );
}

export default App;
