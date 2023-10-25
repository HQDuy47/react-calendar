import React, { useState, useEffect } from "react";

function Clock() {
  var d = new Date();
  const initialSecond = d.getSeconds();
  const initialMinute = d.getMinutes();
  const initialHour = d.getHours();

  const [hour, setHour] = useState(initialHour);
  const [minute, setMinute] = useState(initialMinute);
  const [second, setSecond] = useState(initialSecond);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((prevSecond) => prevSecond + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (second === 60) {
      setSecond(0);
      setMinute((prevMinute) => prevMinute + 1);
    }
  }, [second]);

  useEffect(() => {
    if (minute === 60) {
      setMinute(0);
      setHour((prevHour) => prevHour + 1);
    }
  }, [minute]);

  useEffect(() => {
    if (hour === 24) {
      setMinute(0);
      setSecond(0);
      setHour(0);
    }
  }, [hour]);

  return (
    <div>
      <div className="container">
        <h1 className="time">
          {hour < 10 ? "0" + hour : hour} :{" "}
          {minute < 10 ? "0" + minute : minute} :{" "}
          {second < 10 ? "0" + second : second}
        </h1>
        <h1 className="time shadow">
          {hour < 10 ? "0" + hour : hour} :{" "}
          {minute < 10 ? "0" + minute : minute} :{" "}
          {second < 10 ? "0" + second : second}
        </h1>
      </div>
    </div>
  );
}

export default Clock;
