import React from 'react';

function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;

  return (
    <div className="IdCard Card">
      {/* <div className="ImgWrapper"> */}
      <img src={picture} alt="profile portrait" />
      {/* </div> */}
      <div className="TxtWrapper">
        <b>First name: </b>
        {firstName}
        <br></br>
        <b>Last name: </b>
        {lastName}
        <br></br>
        <b>Gender: </b>
        {gender}
        <br></br>
        <b>Height: </b>
        {height / 100}m<br></br>
        <b>Birth: </b>
        {birth.toDateString()}
      </div>
    </div>
  );
}

export default IdCard;
