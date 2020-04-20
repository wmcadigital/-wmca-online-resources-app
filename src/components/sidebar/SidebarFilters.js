import React, { useReducer, useMemo, useEffect, useContext } from 'react';
import FiltersGroup from './FiltersGroup';
import { GlobalDispatch, GlobalState } from '../../store';
import { initialState, reducer, FiltersState, FiltersDispatch } from './SidebarStore';

function SidebarFilters() {
  const sidebarFilters = [
    { name: 'Category', displayName: 'Industry', selector: 'dropdown' },
    { name: 'Age', displayName: 'Age range', selector: 'radio' },
    { name: 'SkillLevel', displayName: 'Skill Level', selector: 'radio' }
  ];
  const buttonForceMargin = { marginBottom: '20px', marginTop: '30px' };
  const dispatcher = useContext(GlobalDispatch);
  const jobs = useContext(GlobalState);
  const { selectedJobs } = jobs.store;

  const [store, dispatch] = useReducer(reducer, initialState);
  const dispatchContexSidebar = useMemo(() => ({ dispatch }), [dispatch]);
  const storeContexSidebar = useMemo(() => ({ store }), [store]);

  useEffect(() => {
    let initial = selectedJobs;
    if (storeContexSidebar.store.Category) {
      initial = initial.filter(elem => {
        return elem.filters.indexOf(storeContexSidebar.store.Category) > 0;
      });
    }
    if (storeContexSidebar.store.Age) {
      initial = initial.filter(elem => {
        return elem.filters.indexOf(storeContexSidebar.store.Age) > 0;
      });
    }
    if (storeContexSidebar.store.SkillLevel) {
      initial = initial.filter(elem => {
        return elem.filters.indexOf(storeContexSidebar.store.SkillLevel) > 0;
      });
    }
    const toSend = initial.length === 0 ? null : initial;
    dispatcher.dispatch({
      type: 'UPDATE_ON_SECOND_FILTER',
      payload: toSend
    });
  }, [storeContexSidebar, selectedJobs, dispatcher]);

  const onCancelClick = () => {
    dispatcher.dispatch({
      type: 'SET_INITIAL_FILTERED_JOBS',
      payload: []
    });
    dispatcher.dispatch({
      type: 'UPDATE_ON_SECOND_FILTER',
      payload: []
    });
    dispatcher.dispatch({
      type: 'TOGGLE_RESULTS',
      payload: false
    });
  };
  const onClearClick = () => {
    dispatchContexSidebar.dispatch({
      type: 'RESET'
    }) 
    dispatcher.dispatch({
      type: 'UPDATE_ON_SECOND_FILTER',
      payload: selectedJobs
    });
  };
  return (
    <FiltersDispatch.Provider value={dispatchContexSidebar}>
      <FiltersState.Provider value={storeContexSidebar}>
        <div>
          <div className="container-wide bg-white">
            <div className="pure-g justify-between">
              <div className="pure-u-1">
                <button
                  style={buttonForceMargin}
                  type="submit"
                  className="btn-primary prev"
                  onClick={() => onCancelClick()}
                >
                  <span>Start again</span>
                </button>
                <h2>Refine</h2>

                {sidebarFilters.map(filter => {
                  return (
                    <FiltersGroup
                      key={filter.name}
                      name={filter.name}
                      displayName={filter.displayName}
                      selector={filter.selector}
                    />
                  );
                })}

                <button
                  style={buttonForceMargin}
                  type="submit"
                  className="btn-primary prev"
                  onClick={() => onClearClick()}
                >
                  <span>Clear filters</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </FiltersState.Provider>
    </FiltersDispatch.Provider>
  );
}

export default SidebarFilters;
