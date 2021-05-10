/* eslint-disable react/prop-types */
import React from "react";
import "./flip.css";

import { CardItem, Field, Value, CardContainer, Shadow } from "./style";

const Card = ({ field, value }) => {
  const [animation, setAnimation] = React.useState("");

  React.useEffect(() => {
    setAnimation("anim");
    setTimeout(() =>{
      setAnimation(" ");
    }, 1500)
  }, [value]);

  return (
    <CardContainer>
      <CardItem>
        <Shadow className={animation}><p>{value}</p></Shadow>
        <Value>{value}</Value>
        <span></span>
      </CardItem>
      <Field>{field}</Field>
    </CardContainer>
  );
};

export default Card;
