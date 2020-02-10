import React from 'react';
import Wrong from '../../assets/sounds/wrong.mp3';
import Success from '../../assets/sounds/success.wav';

let scoreResult = 5;
const Options = props => {
  const playSound = src => {
    const audio = new Audio();
    audio.src = src;
    audio.autoplay = true;
  };
  const clickAction = (item, e) => {
    if (props.state) {
      props.setTempBird(item);
      if (+item.id !== +props.currentBird.id) {
        e.target.style.backgroundColor = 'red';
        playSound(Wrong);
        if (scoreResult > 0) {
          scoreResult -= 1;
        }
      } else {
        e.target.style.backgroundColor = 'green';
        playSound(Success);
        props.setState(false);
        props.setScore(props.score + scoreResult);
        scoreResult = 5;
      }
      console.log('TCL: clickAction -> scoreResult', scoreResult);
    }
  };
  return (
    <div className="game__options">
      {props.BirdsDataItem.birds.map(item => (
        <div
          key={item.id}
          id={item.id}
          onClick={e => clickAction(item, e)}
          className="game__options-item"
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Options;
