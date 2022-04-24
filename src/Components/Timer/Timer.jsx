import React, { useState, useEffect } from "react";
import formatTime from "../../Util/formatTime";
function Timer({ isGameOver }) {
  const [timer, setTimer] = useState(0);
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
    //Cleanup
    return () => {
      clearInterval(interval);
    };
  }, [isGameOver]);

  return <>{formatTime(timer)}</>;
}

export default Timer;
