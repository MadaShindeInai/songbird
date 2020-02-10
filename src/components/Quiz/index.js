import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import Pic from '../../assets/images/bird.jpg';
import 'react-h5-audio-player/src/styles.scss';

const Quiz = props => {
  return (
    <div className="quiz">
      <img
        src={!props.state ? props.currentBird.image : Pic}
        className="bird-pic"
        alt="bird"
        width="200"
        height="150"
      />
      <span className="bird-name">
        {!props.state ? props.currentBird.name : '******'}
      </span>
      <AudioPlayer
        autoPlayAfterSrcChange={false}
        src={props.currentBird.audio}
      />
    </div>
  );
};

export default Quiz;
