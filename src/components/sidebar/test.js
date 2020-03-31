import React, { useEffect, useContext } from 'react';
import { GlobalDispatch } from '../../store';

const Test = () => {
  const context = useContext(GlobalDispatch);
  useEffect(() => {
    context.dispatch({
      type: 'setAllJobsAfterFetch',
      payload: ['foo']
    });
  }, [context])
  return <div>hello</div>;
};

export default Test;
