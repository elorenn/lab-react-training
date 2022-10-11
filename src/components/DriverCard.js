import React from 'react';
import Rating from './Rating';

function DriverCard(props) {
  const {
    name, // A string
    rating, // A number between 0 and 5. The value can be a floating point number
    img, // A string
    car, // An object with properties model and licensePlate
  } = props;

  return (
    <div className="DriverCard Card">
      <div className="ImgWrapper">
        <img className="Round" src={img} alt="profile portrait" />
      </div>
      <div className="TxtWrapper">
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>
          <span>{car.model}</span>-<span>{car.licensePlate}</span>
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
