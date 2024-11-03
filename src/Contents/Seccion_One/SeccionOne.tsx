import Navegacion from "./Navegacion.tsx";
import RedesSociales from "./RedesSociales.tsx";
import styled from "styled-components";
import React from "react";

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

/*-----------Styles----------------*/
const Container = styled.div`
  align-items: center;
  position: absolute;
  top: 10px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 600px;
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 500px;
  padding: 3px;
  position: relative;
  display: flex;
  justify-content: center;
  top: 75px;
`;

const Img = styled.img`
  height: 260px;
  width: 260px;
  object-fit: cover;
  image-rendering: crisp-edges;
  border-radius: 51%;
  text-align: center;

  @media (max-width: 510px) {
    height: 210px;
    width: 210px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-family: "IBM Plex Serif", serif;

  @media (max-width: 510px) {
    text-align: center;
    width: 270px;
    font-size: 25px;
    position: relative;
    top: 25px;
  }
`;

const SubTitle = styled.h2`
      text-align:center;
      font-size: 18px;
      border-bottom: 2px solid #18d26e;
      padding: 3px;
      margin-top: 20px;
      position: relative;
      top: -35px;
      width: 200px;
      font-family: 'Karla', sans-serif;

      @media (max-width:510px){
           font-size: 16px;
           position: relative;
           width: 165px;
           top: -10px`;

export default SeccionOne;
