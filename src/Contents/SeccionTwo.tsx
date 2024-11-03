import Contacto from "./Seccion_Two/Contacto/Contacto";
import Proyectos from "./Seccion_Two/Proyectos/Proyectos";
import SobreMi from "./Seccion_Two/SobreMi/SobreMi";
import styled from "styled-components";
import React from "react";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  height: auto;
  border-radius: 10px;
  margin-top: 600px;
  padding: 10px;

  @media (max-width: 510px) {
    position: relative;
    bottom: 200px;
    width: 98%;
    margin-top: 860px;
  }
`;

const SeccionTwo = () => {
  return (
    <Container>
      <SobreMi />
      <Proyectos />
      <Contacto />
    </Container>
  );
};
export default SeccionTwo;
