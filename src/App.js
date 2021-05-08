import React from "react";
import CardsContainer from "./components/Cards/CardsContainer";
import Global from "./styles/Global";
import { Container, Title } from "./styles/style";

function App() {
  return (
    <>
      <Global />
      <Container>
        <Title>We&apos;re lauching soon</Title>
        <CardsContainer />
      </Container>
    </>
  );
}

export default App;
