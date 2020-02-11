import React from 'react';
import Sertif from '../../assets/images/sertif.pdf';

const TheEnd = ({ score }) => {
  const refreshPage = () => {
    window.location.reload();
  }
  return (
    <div className="the-end">
      <p className="the-end__congrats">Поздравляем!</p>
      <p className="the-end__result">
        Вы прошли викторину и набрали {score} из 30 возможных баллов
      </p>
      <button
        type="button"
        onClick={refreshPage}
        className="the-end__btn-congrats"
      >
        Попробовать еще раз!
      </button>
      {score === 30 ? (
        <a
          href={Sertif}
          download
          className="the-end__btn-certificate"
        >
          Скачать сертификат
      </a>
      ) : (<></>)
      }

    </div>
  );
};

export default TheEnd;
