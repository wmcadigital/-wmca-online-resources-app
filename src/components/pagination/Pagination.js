import React from 'react';
import { GlobalState } from '../../store';

function Pagination() {
  const globalState = useContext(GlobalState);
  const { currentPage, secondFilterJobs } = global.store;
  const navLength = secondFilterJobs.length;
  return (
    <div>
      
    </div>
  )
}

export default Pagination
