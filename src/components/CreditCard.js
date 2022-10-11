import React from 'react';
import Visa from '../assets/images/visa.png';
// import MasterCard from '../assets/images/master-card.svg';

function CreditCard(props) {
  const {
    type, // A string that can be "Visa" or "Master Card"
    number, // A string that is the number of the credit card. For security reasons, you should only display the 4 last digits
    expirationMonth, // A number that represents the month, between 1 and 12
    expirationYear, // A number that represents the year
    bank, // A string that represents the name of the bank
    owner, // A string that represents the name of the owner
    bgColor, // A string for the background color of the card
    color, // A string for the text color of the card
  } = props;

  return (
    <div
      className="CreditCard"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className="type">
        <img src={type === 'Visa' ? Visa : 'MasterCard'} alt="credit logo" />
      </div>
      <div className="number">•••• •••• •••• {number.slice(-4)}</div>
      <div className="expiration-bank">
        <span className="exp">
          Expires{' '}
          {expirationMonth < 10 ? '0' + expirationMonth : expirationMonth}/
          {expirationYear.toString().slice(-2)}
        </span>
        <span className="bank">{bank}</span>
      </div>
      <div className="owner">{owner}</div>
    </div>
  );
}

export default CreditCard;
