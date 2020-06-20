import React from 'react';

function UserCars({ cars }) {
  return (
    <div>
      {cars.map((car) => (
        <div className="user_car">
          <div className="car_model">
            <h3>{car.model}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserCars;
