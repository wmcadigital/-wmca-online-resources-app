import React from 'react';
import PropTypes from 'prop-types';

function ResultsHeader(props) {
  const { length } = props;
  const results = length > 1 ? `${length} results` : `${length} result`;
  const text = length > 0 ? results : 'Fetching data';

  return (
    <div>
      <h2>{text}</h2>
    </div>
  );
}

ResultsHeader.propTypes = {
  length: PropTypes.string
};

ResultsHeader.defaultProps = {
  length: null
};

export default ResultsHeader;
