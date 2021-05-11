import styled from "styled-components";

export const CardContainer = styled.div`
  width: 9.25rem;
  @media (max-width: 768px) {
    width: 4.38rem;
  }
`;

export const CardItem = styled.div`
  height: 8.75rem;
  background-color: var(--Dark-desaturated-blue);
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
    width: 0.75rem;
    height: 0.75rem;
    background-color: var(--Very-dark-blue);
    border-radius: 50%;
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
    height: 0.0625rem;
    background-color: rgba(31, 29, 42, 30%);
    position: absolute;
    z-index: 10;
  }

  @media (max-width: 768px) {
    width: 4.375rem;
    height: 4.1875rem;
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

  & p {
    font-size: 5rem;
    position: absolute;
    letter-spacing: 0;
    color: var(--Soft-red);
    top: 1rem;
  }
  @media (max-width: 768px) {
    & p {
      font-size: 2.38rem;
      top: 0.5rem;
    }
  }
`;

export const Value = styled.h2`
  font-size: 5rem;
  letter-spacing: 0;
  color: var(--Soft-red);
  z-index: 5;

  @media (max-width: 768px) {
    font-size: 2.38rem;
  }
`;

export const Field = styled.p`
  color: var(--Grayish-blue);
  text-align: center;
  margin-top: 1.88rem;
  line-height: 1;
  @media (max-width: 768px) {
    width: 4.375rem;
    font-size: 0.44rem;
    margin-top: 0.88rem;
  }
`;
