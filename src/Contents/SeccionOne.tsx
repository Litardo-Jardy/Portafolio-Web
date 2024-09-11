import Navegacion from "./Seccion_One/Navegacion.tsx";
import RedesSociales from "./Seccion_One/RedesSociales.tsx";
import imagen from './Seccion_Two/SobreMi/Image_SobreMi/PerfilOne.jpeg';
import styled from 'styled-components';

const SeccionOne = () =>{
      return(
            <Container id="presentacion">
                   <ImageContainer>
                      <img className="Img" src={imagen}/>
                   </ImageContainer>
                <Title>Tech. Jardy Litardo</Title>
               <SubTitle>Software develoment</SubTitle>
               <Navegacion />
               <RedesSociales />
            </Container>)}

/*-----------Styles----------------*/
const Container = styled.div`
      align-items:center;
      position: absolute;
      top: 10px;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 600px`

const ImageContainer = styled.div`
      width: 300px;
      height: 500px;
      padding: 3px;
      position: relative;
      display: flex;
      justify-content: center;
      top: 75px`;

const Title = styled.h1`
      font-size: 40px;
      font-family: 'IBM Plex Serif', serif;

      @media (max-width:510px){
         text-align: center;
          width: 270px;
          font-size: 25px;
          position: relative;
          top: 15px}`;

const SubTitle = styled.h2`
      text-align:center;
      font-size: 20px;
      border-bottom: 2px solid #18d26e;
      padding: 3px;
      margin-top: 20px;
      position: relative;
      top: -35px;
      width: 200px;
      font-family: 'Karla', sans-serif;

      @media (max-width:510px){
           font-size: 17px;
           position: relative;
           width: 165px;
           top: -15px`;

export default SeccionOne;
