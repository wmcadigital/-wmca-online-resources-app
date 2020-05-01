import React from 'react';
import PropTypes from 'prop-types';

function ResultItem(props) {
  const { name, provider, url, link, summary } = props;
  const externalLink =
    link.indexOf('http://') === 0 || link.indexOf('https://') === 0 ? link : `//${link}`;

  return (
    <>
      <article className="wdgt">
        <h2>{name}</h2>
        <ul>
          <li>
            <span className="highlight">Provider </span>
            <a className="btn-secondary" href={externalLink}>
              {provider}
            </a>
            <i className="icon-link-external icon-large" />
          </li>
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
  name: PropTypes.string,
  provider: PropTypes.string,
  url: PropTypes.string,
  link: PropTypes.string,
  summary: PropTypes.string
};

ResultItem.defaultProps = {
  name: null,
  provider: null,
  url: null,
  link: null,
  summary: null
};

export default React.memo(ResultItem);
