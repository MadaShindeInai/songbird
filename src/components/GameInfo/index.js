import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import Voice from '../../assets/audio/test.mp3';
import Pic from '../../assets/images/bird.jpg';
import 'react-h5-audio-player/src/styles.scss';

const GameInfo = props => {
  return (
    <div className="game__info">
      <img
        src={props.tempBird ? props.tempBird.image : Pic}
        className={props.tempBird ? 'bird-pic' : 'none'}
        alt="bird"
        width="200"
        height="150"
      />
      <span className={props.tempBird ? 'bird-name' : 'none'}>
        {props.tempBird ? props.tempBird.name : '******'}
      </span>
      <span className={props.tempBird ? 'none' : 'game__info-default'}>
        Послушайте плеер. Выберите птицу из списка
      </span>
      <span className={props.tempBird ? 'game__info-name' : 'none'}>
        {props.tempBird ? props.tempBird.species : 'Latin Name'}
      </span>
      <AudioPlayer
        src={props.tempBird ? props.tempBird.audio : Voice}
        autoPlayAfterSrcChange={false}
        className={props.tempBird ? '' : 'none'}
      />
      <p className={props.tempBird ? 'game__info-description' : 'none'}>
        {props.tempBird ? props.tempBird.description : '******'}
      </p>
    </div>
  );
};

export default GameInfo;
