import React, { Component } from 'react';

function Random(props) {
  const { min, max } = props;

  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="Random Card">
      Random value between {props.min} and {props.max} => {randomNum}
    </div>
  );
}

export default Random;
