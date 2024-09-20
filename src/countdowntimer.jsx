import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [time, setTime] = useState(10); 
  const [isTimerActive, setIsTimerActive] = useState(false); 

 
  useEffect(() => {
    let timer = null;

    if (isTimerActive && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000); 
    } else if (time === 0) {
      setIsTimerActive(false); 
    }

    return () => clearInterval(timer); 
  }, [isTimerActive, time]);

  const startTimer = () => {
    setIsTimerActive(true); 
  };

  const resetTimer = () => {
    setIsTimerActive(false); 
    setTime(10); 
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <div>
        <h2>{time > 0 ? `${time}s  remaining` : "Time's up!"}</h2>
      </div>
      <button onClick={startTimer} disabled={isTimerActive || time === 0}>
        Start
      </button>
      <button onClick={resetTimer} disabled={time === 10}>
        Reset
      </button>
    </div>
  );
};

export default CountdownTimer;
