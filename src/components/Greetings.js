import React from 'react';

function Greetings(props) {
  const { lang } = props;

  function selectLang(lang) {
    if (lang === 'de') {
      return <span>Hallo </span>;
    }
    if (lang === 'en') {
      return <span>Hello </span>;
    }
    if (lang === 'es') {
      return <span>Hola </span>;
    }
    if (lang === 'fr') {
      return <span>Bonjour </span>;
    }
  }

  return (
    <div className="Greetings IdCard">
      {selectLang(lang)} {props.children}
    </div>
  );
}

export default Greetings;
