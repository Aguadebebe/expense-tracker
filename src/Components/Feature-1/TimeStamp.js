import React from "react";
import { useState, useEffect } from "react";

const TimeStamp = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date().toLocaleString()), 1000);

    return () => clearInterval(interval);
  }, []);
  return <p>{currentTime}</p>;
};

export default TimeStamp;
