import styled from "styled-components";

export const CardContainer = styled.div`
  width: 9.25rem;
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
    background-color: rgba(31, 29, 42, 30%);
    position: absolute;
    z-index: 10;
  }
`;


export const Shadow = styled.div`
  width: 100%;
  height: 50%;
  top: 0;
  transform-origin: center bottom;
  position: absolute;
  background: #2c2c44;
  border-radius: 0 0 7px 7px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  & p{
    font-size: 5rem;
    position: absolute;
    letter-spacing: 0;
    color: hsl(345, 95%, 68%);
    top: 16px;
  }
`;
export const Value = styled.h2`
  font-size: 5rem;
  letter-spacing: 0;
  color: hsl(345, 95%, 68%);
  z-index: 5;
`;

export const Field = styled.p`
  color: hsl(237, 18%, 59%);
  text-align: center;
  margin-top: 1.88rem;
`;
