import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 9.25rem;
`;

export const CardItem = styled.div`
  height: 8.75rem;
  background-color: hsl(236, 21%, 26%);
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 10px 0 0 rgba(26, 26, 34, 100%);

  & div {
    width: 100%;
    height: 50%;
    background-color: #2c2c44;
    position: absolute;
    top: 0;
  }
  &::before,
  &::after {
    content: "";
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: hsl(234, 17%, 12%);
    border-radius: 50px;
    position: absolute;
    z-index: 10;
  }
  &::before {
    left: -6px;
  }
  &::after {
    right: -6px;
  }
  & span {
    width: 100%;
    height: 1px;
    background-color: hsl(235, 16%, 14%);
    position: absolute;
    z-index: 10;
  }
`;

export const Value = styled.h2`
  font-weight: 700;
  font-size: 5rem;
  color: hsl(345, 95%, 68%);
  z-index: 5;
`;

export const Field = styled.p`
  text-transform: uppercase;
  color: hsl(237, 18%, 59%);
  text-align: center;
  margin-top: 1.88rem;
`;
