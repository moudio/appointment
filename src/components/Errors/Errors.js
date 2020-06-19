import React from 'react';

function Errors({ errors }) {
  return (
    <div>
      {errors.map((error) => (
        <div className="alert alert-warning" role="aler">
          {error}
        </div>
      ))}
    </div>
  );
}

export default Errors;
