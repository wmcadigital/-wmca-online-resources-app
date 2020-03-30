import React from 'react';
import PropTypes from 'prop-types';

function FiltersGroup(props) {
  const { filterName } = props;

  React.useEffect(() => {
    document.body.classList = 'bg-white app-blog';
  }, []);

  return (
    <div className="wmca-form wdgt">
      <label className="wmca-form-label filter-title">{filterName}:</label>
    </div>
  );
}

export default FiltersGroup;

FiltersGroup.propTypes = {
  filterName: PropTypes.string
};

FiltersGroup.defaultProps = {
  filterName: ''
};
