import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import Pic from '../../assets/images/bird.jpg';
import 'react-h5-audio-player/src/styles.scss';

const GameInfo = ({ tempBird }) => {
  return (
    <div className="game__info">
      <img
        src={tempBird ? tempBird.image : Pic}
        className={tempBird ? 'bird-pic' : 'none'}
        alt="bird"
        width="200"
        height="150"
      />
      <span className={tempBird ? 'game__info-name' : 'none'}>
        {tempBird ? tempBird.name : '******'}
      </span>
      <span className={tempBird ? 'none' : 'game__info-default'}>
        Послушайте плеер. Выберите птицу из списка
      </span>
      <span className={tempBird ? 'game__info-name' : 'none'}>
        {tempBird ? tempBird.species : 'Latin Name'}
      </span>
      <AudioPlayer
        src={tempBird.audio}
        autoPlayAfterSrcChange={false}
        className={tempBird ? '' : 'none'}
      />
      <p className={tempBird ? 'game__info-description' : 'none'}>
        {tempBird ? tempBird.description : '******'}
      </p>
    </div>
  );
};

export default GameInfo;
