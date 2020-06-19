import React from 'react';

function Errors(errors) {
  return <div>
      {errors.map(error => {
            return <div>{error}</div>     
      });}
  </div>;
}

export default Errors;
