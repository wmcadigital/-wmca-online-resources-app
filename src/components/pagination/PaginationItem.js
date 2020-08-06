/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { GlobalDispatch } from '../../store';

import style from './paginationItem.module.scss';

function PaginationItem({ isCurrent, value, goTo, isdisabled }) {
  const dispatcher = React.useContext(GlobalDispatch);
  // smooth behaviour not working in safari and, surprise, IE
  const upsIscrolledItAgain = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
  const onSelected = () => {
    if (isdisabled) {
      return;
    }
    upsIscrolledItAgain();
    dispatcher.dispatch({
      type: 'SET_CURRENT_PAGE',
      payload: goTo
    });
  };
  return (
    <button
      type="button"
      onClick={() => {
        onSelected(value);
      }}
      className={`${isCurrent ? style.current : ''} ${
        isdisabled ? `${style.disabled} disabled` : ''
      } `}
    >
      {value}
    </button>
  );
}

PaginationItem.propTypes = {
  isCurrent: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  goTo: PropTypes.number.isRequired,
  isdisabled: PropTypes.bool.isRequired
}

export default PaginationItem;
