import React from "react";
import Card from "./components/Cards/Card";
import Global from "./styles/Global";
import { Container, Title } from './styles/styles';

function App() {
  return (
    <>
      <Global />
      <Container>
        <Title>We&apos;re lauching soon</Title>
        <Card field="days" value={23}/>
      </Container>
    </>
  );
}

export default App;
