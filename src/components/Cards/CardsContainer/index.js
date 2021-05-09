import React, { useState } from "react";
import Card from "../Card";
import { Cards } from "./style";

const CardsContainer = () => {
  const [days, setDays] = useState(8);
  const [hours, setHours] = useState(23);
  const [minutes, setMinutes] = useState(55);
  const [seconds, setSeconds] = useState(41);

  React.useEffect(() =>{
    const interval = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);
    if (seconds <= 0 && minutes > 0) {
      setMinutes(minutes - 1);
      setSeconds(60);
    }
    if (minutes <= 0 && hours > 0) {
      setHours(hours - 1);
      setMinutes(60);
    }
    if (hours <= 0 && days > 0) {
      setDays(days - 1);
    }
    if (days <= 0) {
      return;
    }
    return () => clearInterval(interval);
  },[seconds])


  return (
    <Cards>
      <Card field="days" value={days} />
      <Card field="hours" value={hours} />
      <Card field="minutes" value={minutes} />
      <Card field="seconds" value={seconds} />
    </Cards>
  );
};

export default CardsContainer;
