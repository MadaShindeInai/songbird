import React from 'react';
import Wrong from '../../assets/sounds/wrong.mp3';
import Success from '../../assets/sounds/success.wav';

let scoreResult = 5;
const Options = ({ BirdsDataItem, setState, score, state, setTempBird, currentBird, setScore }) => {
  const playSound = src => {
    const audio = new Audio();
    audio.src = src;
    audio.autoplay = true;
  };
  const clickAction = (item, e) => {
    if (state) {
      setTempBird(item);
      if (+item.id !== +currentBird.id) {
        e.target.style.backgroundColor = 'red';
        playSound(Wrong);
        if (scoreResult > 0) {
          scoreResult -= 1;
        }
      } else {
        e.target.style.backgroundColor = 'green';
        playSound(Success);
        setState(false);
        setScore(score + scoreResult);
        scoreResult = 5;
      }
      console.log('TCL: clickAction -> scoreResult', scoreResult);
    }
  };
  return (
    <div className="game__options">
      {BirdsDataItem.birds.map(item => (
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
