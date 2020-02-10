import React, { useState } from 'react';
import Header from './components/Header';
import Quiz from './components/Quiz';
import Options from './components/Options';
import GameInfo from './components/GameInfo';
import TheEnd from './components/TheEnd';
import './styles/main.scss';
import BirdsData from './utils/BirdsData';

const App = () => {
  const randomBird = birds => birds[Math.floor(Math.random() * birds.length)];
  const [score, setScore] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentBird, setCurrentBird] = useState(
    randomBird(BirdsData[currentStep].birds)
  );
  const [state, setState] = useState(true);
  const [tempBird, setTempBird] = useState('');
  const [theEnd, setTheEnd] = useState(false);
  console.log('TCL: App -> tempBird', tempBird);

  const goNextLevel = () => {
    if (currentStep < BirdsData.length - 1) {
      setCurrentStep(currentStep + 1);
      setCurrentBird(randomBird(BirdsData[currentStep + 1].birds));
    } else {
      setTheEnd(true);
    }
    setState(true);
  };

  return (
    <>
      {theEnd ? (
        <TheEnd />
      ) : (
          <div className="wrapper">
            <div>
              <Header
                BirdsData={BirdsData}
                score={score}
                currentStep={currentStep}
              />
              <Quiz currentBird={currentBird} state={state} />
              <div className="game">
                <Options
                  BirdsDataItem={BirdsData[currentStep]}
                  currentBird={currentBird}
                  setState={setState}
                  state={state}
                  setScore={setScore}
                  score={score}
                  setTempBird={setTempBird}
                />
                <GameInfo
                  currentBird={currentBird}
                  tempBird={tempBird}
                  state={state}
                />
              </div>
              <button
                type="button"
                onClick={goNextLevel}
                className="btn"
                disabled={state}
              >
                Next Level
            </button>
            </div>
          </div>
        )}
    </>
  );
};

export default App;
