import styled from "styled-components";

/*------------SobreMi---------------*/
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const ImageContainer = styled.div`
  width: 260px;
  height: 260px;
  padding: 3px;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 51%;
  z-index: 10;
  justify-content: center;
  top: 70px;

  @media (max-width: 510px) {
    top: 60px;
  }

  @media (max-width: 410px) {
    left: -35px;
  }
`;

export const Img = styled.img`
  height: 260px;
  width: 260px;
  object-fit: cover;
  image-rendering: crisp-edges;
  border-radius: 51%;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 15px;
  width: 400px;
  font-family: "Poppins", sans-serif;
`;

export const SubTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 23px;
  margin-left: 10px;
`;

export const Line = styled.span`
  color: #18d26e;
  width: 300px;
  position: relative;
  bottom: 7px;
`;

export const Resume = styled.a`
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  color: white;
  width: 130px;
  font-size: 12;
  padding: 8px;
  text-align: center;
  margin: 5px;
  border-radius: 15px;
  position: relative;
  left: 60px;
  top: 15px;
  background: #18d26e;

  @media (max-width: 510px) {
    padding: 7px;
    left: 61px;
    width: 130px;
  }
`;

/*------------Datos---------------*/

export const ContainerDatos = styled.div`
  width: 60%;
  padding: 3px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -5px;

  @media (max-width: 730px) {
    margin-top: 100px;
  }

  @media (max-width: 510px) {
    margin-top: 100px;
    width: 85%;
  }

  @media (max-width: 410px) {
    width: 90%;
  }
`;

export const TitleDatos = styled.h2`
  width: 100%;
  font-size: 35px;
  color: #18d26e;
  margin: 0px;
  font-family: "Poppins", sans-serif;
`;

export const Parrafo = styled.p`
  font-family: "Kalam", cursive;
  text-align: justify;
  font-size: 18px;
  width: 100%;

  @media (max-width: 410px) {
    width: 82%;
  }
`;

export const ListTechnologi = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: colunm;
  justify-content: space-around;

  @media (max-width: 410px) {
    position: relative;
    left: -30px;
    width: 80%;
  }
`;

export const ItemTechnologi = styled.span`
  text-decoration: none;
`;
