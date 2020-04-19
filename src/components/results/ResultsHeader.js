import React from 'react';
import PropTypes from 'prop-types';

function ResultsHeader(props) {
  const { selectedToRender } = props;
  const results =
    selectedToRender && selectedToRender > 1
      ? `${selectedToRender} results`
      : `${selectedToRender} result`;

  const title = selectedToRender > 0 ? results : `No Results for => show selected tags`;

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

ResultsHeader.propTypes = {
  selectedToRender: PropTypes.number
};

ResultsHeader.defaultProps = {
  selectedToRender: null
};

export default ResultsHeader;
