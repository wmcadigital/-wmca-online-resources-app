/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext, useState, useEffect } from 'react';
import { GlobalState } from '../../store';

import PaginationItem from './PaginationItem';

import style from './pagination.module.scss';

function Pagination() {
  const maxNavElements = 5;
  const globalState = useContext(GlobalState);
  const { currentPage, secondFilterJobs } = globalState.store;
  const [rangeArr, setRangeArr] = useState([]);
  const paginationNavLength = secondFilterJobs.length;

  const createRange = (from, to, step = 1) => {
    let i = from;
    const range = [];
    while (i <= to) {
      range.push(i);
      i += step;
    }
    setRangeArr([...range]);
  };

  useEffect(() => {
    if (currentPage >= maxNavElements) {
      createRange(currentPage - 4, currentPage);
    } else {
      const to = paginationNavLength - 2 > maxNavElements ? 4 : paginationNavLength - 1;
      createRange(0, to);
    }
  }, [currentPage, paginationNavLength]);

  return (
    <div className={style.wrapper}>
      {secondFilterJobs.length > maxNavElements && (
        <PaginationItem
          isdisabled={currentPage === 0}
          value="Previous"
          isCurrent={false}
          goTo={currentPage - 1}
        />
      )}
      {rangeArr.map(e => (
        <PaginationItem
          isdisabled={false}
          key={e}
          value={(e + 1).toString()}
          isCurrent={currentPage === e}
          goTo={e}
        />
      ))}
      {secondFilterJobs.length > maxNavElements && (
        <PaginationItem
          isdisabled={currentPage === paginationNavLength - 1}
          value="Next"
          isCurrent={false}
          goTo={currentPage + 1}
        />
      )}
    </div>
  );
}

export default Pagination;
