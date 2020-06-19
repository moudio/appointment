import React, { useEffect } from 'react';
import 'react-bootstrap';

function Alert() {
  useEffect(() => {}, []);
  return (
    <div>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
        data-dismiss="alert"
      >
        <strong>Holy guacamole!</strong>
        {' '}
        You should check in on some of those
        fields below.
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
}

export default Alert;
