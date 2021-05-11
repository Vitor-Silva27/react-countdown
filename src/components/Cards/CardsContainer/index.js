import React, { useState } from "react";
import Card from "../Card";
import { Cards } from "./style";

const CardsContainer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(10);

  const addZero = (value) => (value < 10 ? "0" + value : value);

  React.useEffect(function countdown(){
    const countInterval = setInterval(() => {
      if(!(days === 0 && hours === 0 && minutes === 0 && seconds === 0)){
        setSeconds(seconds - 1);
      }
    }, 1000);
    
    if (seconds <= 0 && minutes > 0) {
      setMinutes(minutes - 1);
      setSeconds(59);
    }
    if (minutes <= 0 && hours > 0) {
      setHours(hours - 1);
      setMinutes(59);
    }
    if (hours <= 0 && days > 0) {
      setDays(days - 1);
      setHours(23);
    }
    return () => clearInterval(countInterval);
  }, [seconds]);


  return (
    <Cards>
      <Card field="days" value={addZero(days)} />
      <Card field="hours" value={addZero(hours)} />
      <Card field="minutes" value={addZero(minutes)} />
      <Card field="seconds" value={addZero(seconds)} />
    </Cards>
  );
};

export default CardsContainer;
