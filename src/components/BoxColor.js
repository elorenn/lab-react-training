import React from 'react';

function BoxColor(props) {
  const { r, g, b } = props;

  return (
    <div
      className="BoxColor Card"
      style={{
        backgroundColor: `rgb(${r},${g},${b})`,
        color: `${r + g + b > 127 * 3 ? 'black' : 'white'}`,
      }}
    >
      <p>
        rgb({r},{g},{b})
      </p>
      <br></br>
      <p>
        {'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}
      </p>
    </div>
  );
}

export default BoxColor;
