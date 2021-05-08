import React from "react";
import Global from "./styles/Global";
import MainTitle from "./components/MainTitle/index";
import Container from "./styles/Container";

function App() {
  return (
    <>
      <Global />
      <Container>
        <MainTitle />
      </Container>
    </>
  );
}

export default App;
