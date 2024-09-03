import "../seccionTwo.css"
import Datos from "./Datos"
import imagen from './Image_SobreMi/PerfilSix.jpeg'
import styled from 'styled-components';

const SobreMi = () =>{
      return(
            <Container id="sobreMi"> 
                   <div style={{ width: '100%'}}> 
                      <Title>ABOUT ME <Line>____________</Line></Title>
                      <SubTitle>MORE ABOUT ME</SubTitle>
                   </div>
                   <ImageContainer> 
                      <Img src={imagen}/>
                      <Resume  href="/assets/curriculum.pdf" target="_blank" rel="noopener noreferrer" >View my resume</Resume><br />
                   </ImageContainer>
                   <Datos/>
           </Container>)}

const Container = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly`;

const ImageContainer = styled.div`
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
         top: 60px}`;

const Img = styled.img`
      height: 260px; 
      width: 260px;
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

const Resume = styled.a`
      font-family: "Kalam", cursive;
      text-decoration: none;
      color: white;
      width: 115px;
      font-size: 14;
      padding: 5px;
      text-align: center;
      margin: 5px;
      border-radius: 15px;
      position: relative;
      left: 70px;
      top: 15px;
      background: #18d26e;

      @media (max-width: 510px) {
         padding: 7px;
         left: 61px;
         width: 130px}`;


export default SobreMi;

