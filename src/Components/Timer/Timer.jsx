import React, { useState, useEffect } from "react";

function Timer({ isGameOver }) {
  const [timer, setTimer] = useState(0);
  const formatTime = (time) => {
    const getSeconds = `0${Math.round(time % 60)}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };
  useEffect(() => {
    let interval = null;
    if (!isGameOver) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else if (isGameOver) {
      clearInterval(interval);
      setTimer(0);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isGameOver]);

  return <>{formatTime(timer)}</>;
}

export default Timer;
