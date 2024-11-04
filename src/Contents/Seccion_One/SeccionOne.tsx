import Navegacion from "./Navegacion.tsx";
import RedesSociales from "./RedesSociales.tsx";
import React from "react";
import {
  Container,
  ImageContainer,
  Img,
  Title,
  SubTitle,
} from "./StyleComponent.tsx";

const SeccionOne = () => {
  return (
    <Container id="presentacion">
      <ImageContainer>
        <Img src="/assets/Profile/PerfilOne.jpeg" />
      </ImageContainer>
      <Title>Tec. Jardy Litardo</Title>
      <SubTitle>Desarrollador de Software</SubTitle>
      <Navegacion />
      <RedesSociales />
    </Container>
  );
};

export default SeccionOne;
