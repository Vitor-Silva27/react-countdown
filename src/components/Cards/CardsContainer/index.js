import React from "react";
import Card from "../Card";
import { Cards } from "./style";

const CardsContainer = () => {
  return (
    <Cards>
      <Card field="days" value={"08"} />
      <Card field="hours" value={23} />
      <Card field="minutes" value={55} />
      <Card field="seconds" value={41} />
    </Cards>
  );
};

export default CardsContainer;
