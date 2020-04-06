import React from 'react';
import PropTypes from 'prop-types';

function ResultsHeader(props) {
  const { selectedToRender } = props;
  const results =
    selectedToRender && selectedToRender > 1
      ? `${selectedToRender} results`
      : `${selectedToRender} result`;

  const text = selectedToRender > 0 ? results : 'Fetching data';

  return (
    <div>
      <h2>{text}</h2>
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
