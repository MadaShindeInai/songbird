import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import Pic from '../../assets/images/bird.jpg';
import 'react-h5-audio-player/src/styles.scss';

const Quiz = ({ state, currentBird }) => {
  return (
    <div className="quiz">
      <img
        src={state ? Pic : currentBird.image}
        className="bird-pic"
        alt="bird"
        width="200"
        height="150"
      />
      <span className="bird-name">
        {state ? '******' : currentBird.name}
      </span>
      <AudioPlayer
        autoPlayAfterSrcChange={false}
        src={currentBird.audio}
      />
    </div>
  );
};

export default Quiz;
