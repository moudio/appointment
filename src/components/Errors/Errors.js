import React from 'react';
import PropTypes from 'prop-types';

function Errors({ errors }) {
  return (
    <div>
      {errors.map((error) => (
        <div className="alert alert-warning" role="alert">
          {error}
        </div>
      ))}
    </div>
  );
}

Errors.propTypes = {
  errors: PropTypes.instanceOf(Array).isRequired,
};

export default Errors;
