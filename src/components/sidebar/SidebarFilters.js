import React, { useReducer, useMemo, useEffect, useContext } from 'react';
import FiltersGroup from './FiltersGroup';
import { GlobalDispatch, GlobalState } from '../../store';
import { initialState, reducer, FiltersState, FiltersDispatch } from './SidebarStore';

function SidebarFilters() {
  const sidebarFilters = [
    { name: 'Category', displayName: 'Industry', selector: 'dropdown' },
    { name: 'Age', displayName: 'Age', selector: 'radio' },
    { name: 'SkillLevel', displayName: 'Skill Level', selector: 'radio' }
  ];
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
  };
  return (
    <FiltersDispatch.Provider value={dispatchContexSidebar}>
      <FiltersState.Provider value={storeContexSidebar}>
        <div>
          <div className="container-wide bg-white">
            <div className="pure-g justify-between">
              <div className="pure-u-1">
                <h2>Filter</h2>
                <button type="submit" className="btn-primary solid" onClick={() => onCancelClick()}>
                  <span>Cancel</span>
                </button>
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
              </div>
            </div>
          </div>
        </div>
      </FiltersState.Provider>
    </FiltersDispatch.Provider>
  );
}

export default SidebarFilters;
