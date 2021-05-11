import styled from "styled-components";

export const Container = styled.div`
  width: 43.75rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 20.7rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
  margin-top: 8.75rem;

  @media (max-width: 768px) {
    font-size: 1.13rem;
    width: 19rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const SocialMedias = styled.footer`
  align-self: center;
  position: relative;
  width: 8.5rem;
  display: flex;
  justify-content: space-between;
  margin-top: 15.8rem;

  & svg:hover {
    cursor: pointer;
    & path {
      fill: hsl(345, 95%, 68%);
    }
  }
`;

export const Atr = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 0.375rem;
  text-align: center;
  color: #fff;
  margin-top: 1rem;
  & span{
    color: var(--Soft-red);
  }
`