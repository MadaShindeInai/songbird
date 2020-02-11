import React from 'react';
import Wrong from '../../assets/sounds/wrong.mp3';
import Success from '../../assets/sounds/success.wav';

let scoreResult = 5;
const Options = ({ state, setState, setTempBird, currentBird, score, setScore, BirdsDataItem }) => {
  const playSound = src => {
    const audio = new Audio();
    audio.src = src;
    audio.autoplay = true;
  };
  const clickAction = (item, e) => {
    if (state) {
      setTempBird(item);
      if (+item.id !== +currentBird.id) {
        e.target.style.backgroundColor = '#F64B4B';
        playSound(Wrong);
        if (scoreResult > 0) {
          scoreResult -= 1;
        }
      } else {
        e.target.style.backgroundColor = '#00bc8c';
        playSound(Success);
        setState(false);
        setScore(score + scoreResult);
        scoreResult = 5;
      }
    } else {
      setTempBird(item);
    }
  };
  return (
    <div className="game__options">
      {BirdsDataItem.birds.map(item => (
        <button
          type="button"
          className="game__options-item"
          key={item.id}
          id={item.id}
          onClick={e => clickAction(item, e)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Options;
