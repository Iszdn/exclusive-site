import React, { useState, useEffect } from 'react';
import moment from 'moment';

const CountdownTimer = () => {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime());

  function getRemainingTime() {
    const saleEndTime = moment('2023-01-10 23:59:59');
    const currentTime = moment();
    return moment.duration(saleEndTime.diff(currentTime));
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(getRemainingTime());
    }, 1000);

    // Очистить интервал при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []); // Пустой массив зависимостей, чтобы эффект запускался только один раз при монтировании

  return (
    <div>
      <p>{remainingTime.days()} {remainingTime.hours()}  {remainingTime.minutes()} {remainingTime.seconds()} </p>
      {remainingTime.asSeconds() <= 0}
    </div>
  );
};

export default CountdownTimer;
