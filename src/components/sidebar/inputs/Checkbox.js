import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = props => {
  const { name, parent, onCheckboxUpdate } = props;
  const onInputChange = () => {
    onCheckboxUpdate(name);
  };

  return (
    <div className="wmca-form">
      <span className="wmca-form__checkboxes pure-u-1">
        <label htmlFor={`${name}_${parent}`} className="wmca-form__checkboxes-label">
          {name}
          <input
            type="checkbox"
            value={name}
            id={`${name}_${parent}`}
            onChange={() => {
              onInputChange();
            }}
          />
          <span className="wmca-form__checkboxes-checkmark"> </span>
        </label>
      </span>
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  parent: PropTypes.string,
  onCheckboxUpdate: PropTypes.instanceOf(Function)
};

Checkbox.defaultProps = {
  name: '',
  parent: '',
  onCheckboxUpdate: () => {}
};

export default Checkbox;
