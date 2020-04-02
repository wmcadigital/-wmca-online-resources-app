import React from 'react';
import PropTypes from 'prop-types';

function ResultItem(props) {
  const { id, name, provider, url, from, to, link, summary } = props;
  return (
    <>
      <article className="wdgt">
        <h2>{name}</h2>
        <ul>
          <li>
            <span className="highlight">Provider </span>
            {provider}
          </li>
          {/* <li>
            <span className="highlight">It runs from: </span>
            {from} - {to}
          </li> */}
        </ul>
        <p>{summary}</p>
        <div className="text-right">
          <p>
            <a className="btn-secondary" href={url}>
              Read more
            </a>
            <i className="icon-link-external icon-large" />
          </p>
        </div>
      </article>
      <hr />
    </>
  );
}

ResultItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  provider: PropTypes.string,
  url: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
  link: PropTypes.string,
  summary: PropTypes.string
};

ResultItem.defaultProps = {
  id: null,
  name: null,
  provider: null,
  url: null,
  from: null,
  to: null,
  link: null,
  summary: null
};

export default React.memo(ResultItem);
