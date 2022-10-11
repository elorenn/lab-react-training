import React from 'react';

function Greetings(props) {
  const { lang } = props;

  let greetings = {
    de: 'Hallo',
    en: 'Hello',
    fr: 'Bonjour',
    es: 'Hola',
  };

  return (
    <div className="Greetings IdCard">
      {greetings[props.lang]} {props.children}
    </div>
  );
}

export default Greetings;
