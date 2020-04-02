import React from 'react'
import PropTypes from 'prop-types'

function ResultsHeader(props) {
  const { length } = props
  return <div><h2>{length}</h2></div>;
}

ResultsHeader.propTypes = {
  length: PropTypes.string
};

ResultsHeader.defaultProps = {
  length: null
};

export default ResultsHeader

