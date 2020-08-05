/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react';
import { GlobalState, GlobalDispatch } from '../../store';

import style from './pagination.module.scss';

function Pagination() {
  const globalState = useContext(GlobalState);
  const dispatcher = useContext(GlobalDispatch);
  const { currentPage, secondFilterJobs } = globalState.store;
  const navLength = secondFilterJobs.length;
  const navText = currentPage < navLength - 1 ? 'Next' : 'Previous';

  const scrollIt = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
  const onSelected = selected => {
    dispatcher.dispatch({
      type: 'SET_CURRENT_PAGE',
      payload: selected
    });

    scrollIt();
  };
  const onNext = () => {
    dispatcher.dispatch({
      type: 'SET_CURRENT_PAGE',
      payload: currentPage <= navLength - 2 ? currentPage + 1 : currentPage - 1
    });
  };
  return (
    <div className={style.wrapper}>
      <ul>
        {/* eslint-disable-next-line react/no-array-index-key */}
        {navLength > 0 &&
          [...Array(navLength)].map((e, i) => (
            <li
              onClick={() => {
                onSelected(i);
              }}
              onKeyDown={onSelected}
              key={i + 1}
              className={currentPage === i ? style.current : ''}
            >
              {i + 1}
            </li>
          ))}
        {navLength > 0 && (
          <li onClick={() => onNext()} onKeyDown={onNext} key="next">
            {navText}
          </li>
        )}
      </ul>
    </div>
  )
}

export default Pagination;
