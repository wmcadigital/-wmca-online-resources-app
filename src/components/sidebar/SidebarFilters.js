import React, { useReducer, useMemo, useEffect, useContext, useState } from 'react';
import FiltersGroup from './FiltersGroup';
import { GlobalDispatch, GlobalState } from '../../store';
import { initialState, reducer, FiltersState, FiltersDispatch } from './SidebarStore';
import ClearAndBack from './ClearAndBack';
import ClearAllSecondaryFilters from './ClearAllSecondaryFilters';
import Refine from './MobileRefine';

function SidebarFilters() {
  const sidebarFilters = [
    { name: 'Category', displayName: 'Industry', selector: 'dropdown' },
    { name: 'Age', displayName: 'Age range', selector: 'radio' },
    { name: 'SkillLevel', displayName: 'Skill Level', selector: 'radio' }
  ];

  const dispatcher = useContext(GlobalDispatch);
  const jobs = useContext(GlobalState);
  const { selectedJobs } = jobs.store;
  const [refined, setRefined] = useState();
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

  const onRefineClick = () => {
    setRefined(!refined);
  };
  return (
    <FiltersDispatch.Provider value={dispatchContexSidebar}>
      <FiltersState.Provider value={storeContexSidebar}>
        <>
          <div className="hide-desktop">
            <Refine onRefineClick={onRefineClick} refined={refined} />
          </div>
          <div className={refined ? '' : 'show-desktop' }>
            <div className="container-wide bg-white">
              <div className="pure-g justify-between">
                <div className="pure-u-1">
                  <ClearAndBack />
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
                  <ClearAllSecondaryFilters />
                </div>
              </div>
            </div>
          </div>
        </>
      </FiltersState.Provider>
    </FiltersDispatch.Provider>
  );
}

export default SidebarFilters;
