/* eslint-disable react/prop-types */
import React from "react";
import { CardItem, Field, Value, CardContainer } from "./style";

const Card = ({ field, value }) => {
  return (
    <CardContainer>
      <CardItem>
        <div></div>
        <Value>{value}</Value>
        <span></span>
      </CardItem>
      <Field>{field}</Field>
    </CardContainer>
  );
};

export default Card;
