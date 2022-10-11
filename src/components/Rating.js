import React from 'react';

function Rating(props) {
  const { children } = props;
  // A number between 0 and 5. The value can be a floating-point number. If the number received is 3.9, the component should display 4 stars.

  function fillStars(numFilled) {
    numFilled = numFilled > 5 ? 5 : Math.round(numFilled);
    let stars = ['☆', '☆', '☆', '☆', '☆'];
    for (let i = 0; i < numFilled; i++) {
      stars[i] = '★';
    }
    return stars.join('');
  }

  return <div className="Rating">{fillStars(children)}</div>;
}

export default Rating;

// other way to achieve same result:

// import React from 'react';

// function Rating(props) {
//   const { children } = props;

//   return (
//     <div className="Rating">
//       {children >= 0.5 ? '★' : '☆'}
//       {children >= 1.5 ? '★' : '☆'}
//       {children >= 2.5 ? '★' : '☆'}
//       {children >= 3.5 ? '★' : '☆'}
//       {children >= 4.5 ? '★' : '☆'}
//     </div>
//   );
// }

// export default Rating;
