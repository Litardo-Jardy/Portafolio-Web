import "../seccionTwo.css"
import styled from 'styled-components';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { DiJsBadge } from "react-icons/di";
import { DiReact } from 'react-icons/di';
import { DiGithubBadge } from 'react-icons/di';
import { DiMysql } from 'react-icons/di';
import { FaPhp } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { FcLinux } from "react-icons/fc";

const Datos = () =>{
      return(
            <Container>
                  <Title>Hello!</Title>
                  <div styled={{ width: '100%'}}>
                     <Parrafo> 
                         "Como Tecnólogo Superior en desarrollo de software, me enfoco en brindar soluciones 
                         innovadoras y eficientes para los proyectos en los que participo, ya sea como trabajador 
                         independiente o formando parte de una empresa en concreto. Mi pasión por la programación 
                         surge de este compromiso con la excelencia. Trabajo principalmente en el desarrollo de sistemas web, 
                         donde aplico las mejores prácticas en diseño, usabilidad y seguridad. 
                         Mi experiencia también me ha permitido incursionar en el desarrollo móvil y en el backend, manejando tecnologías 
                         modernas que optimizan la funcionalidad y el rendimiento. Siempre busco mantenerme actualizado
                         con las últimas tendencias y metodologías, asegurando que cada proyecto en el que colaboro se desarrolle 
                         de manera ágil y escalable."<br />
                         Herramientas y tecnologias que domino:
                     </Parrafo>
                   </div>
                  <ListTechnologi>
                     <ItemTechnologi> <AiFillHtml5 size="40px" color="rgb(241, 99, 27)" /> </ItemTechnologi>
                     <ItemTechnologi> <DiCss3 size="40px" color="#007bff" /> </ItemTechnologi>
                     <ItemTechnologi> <DiJsBadge size="35px" color="#F7E04A" /> </ItemTechnologi>
                     <ItemTechnologi> <SiTypescript size="35px" color="#007ACC" /> </ItemTechnologi>
                     <ItemTechnologi> <DiReact size="40px" color="#61DAFB" /> </ItemTechnologi>
                  </ListTechnologi>
                 
                  <ListTechnologi>
                     <ItemTechnologi> <SiPhp size="40px" color="#4F5D95" /></ItemTechnologi>
                     <ItemTechnologi><DiMysql size="40px" color="#00618A" /></ItemTechnologi>
                     <ItemTechnologi>  <SiFlutter size="30px" color="#02569B" /> </ItemTechnologi>
                    <ItemTechnologi><SiDotnet size="40px" color="#512BD4" /></ItemTechnologi>
                     <ItemTechnologi> <DiGithubBadge size="40px" color="#11dbcf" /> </ItemTechnologi>
                  </ListTechnologi>

            </Container>)}

/*-----------Styles----------------*/
const Container = styled.div`
      width: 60%;
      padding: 3px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: -5px;

     @media(max-width: 730px){
         margin-top: 100px}

      @media(max-width: 510px){
         margin-top: 100px;
         width: 85%}

      @media(max-width: 410px){
         width: 90%}`;

const Title = styled.h2`
     width: 100%;
     font-size: 35px;
     color: #18d26e;
     margin: 0px;
     font-family: 'Poppins', sans-serif`;

const Parrafo = styled.p`
      font-family: "Kalam", cursive;
      text-align: justify;
      font-size: 16px;
      width: 100%;

      @media(max-width: 410px){
         width: 82%}`;

const ListTechnologi = styled.div`
      width: 100%;
      margin-top: 10px;
      display: flex;
      flex-direction: colunm;
      justify-content: space-around;

      @media(max-width: 410px){
         position: relative;
         left: -30px;
         width: 80%}`;

const ItemTechnologi = styled.span`
      text-decoration: none`

export default Datos;
