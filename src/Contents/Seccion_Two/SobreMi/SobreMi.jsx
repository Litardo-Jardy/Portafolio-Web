import "../seccionTwo.css"
import Datos from "./Datos"
import imagen from './Image_SobreMi/PerfilSix.jpeg'
import styled from 'styled-components';

const SobreMi = () =>{
      return(
            <Container id="sobreMi"> 
                   <div style={{ width: '100%'}}> 
                      <Title>ABOUT ME <Line>____________</Line></Title>
                      <SubTitle>MAS SOBRE MI </SubTitle>
                   </div>
                   <ImageContainer> 
                      <Img src={imagen}/>
                   </ImageContainer>
                   <Datos/>
           </Container>)}

const Container = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly`;

const ImageContainer = styled.div`
      width: 320px;
      height: 320px;
      padding: 3px;
      position: relative;
      display: flex;
      border-radius: 51%;
      z-index: 10;
      justify-content: center;
      top: 10px`;

const Img = styled.img`
      height: 320px; 
      width: 320px;
      object-fit: cover;
      image-rendering: crisp-edges;
      border-radius: 51%;
      text-align: center`;

const Title = styled.h1`
      font-size: 15px;
      width: 400px;
      font-family: 'Poppins', sans-serif`;

const SubTitle = styled.h2`
      font-family: 'Poppins', sans-serif;
      font-size: 23px;
      margin-left: 10px`;

const Line = styled.span`
    color: #18d26e;
       width: 300px;
       position: relative;
       bottom: 7px`;

export default SobreMi;

