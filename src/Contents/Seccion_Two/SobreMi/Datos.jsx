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
                  <Title>Software Develoment</Title>
                  <div styled={{ width: '100%'}}>
                     <Parrafo> 
                          Como programador junior especializado en el desarrollo de sistemas web con React.js, mi pasión por 
                          mi trabajo y mi compromiso con el aprendizaje continuo me han permitido adquirir un sólido conocimiento y habilidades en esta tecnología. 
                          Actualmente, he tenido cierta experiencia realizando mis prácticas pre-profesionales, donde he tenido la oportunidad de sumergirme en el 
                          ambiente laboral. Durante este periodo, he llevado a cabo análisis detallados tanto del código como de la lógica detrás de distintos sistemas. <br />
                          Soy una persona responsable, autodidacta y proactiva, siempre dispuesta a asumir nuevos retos y aprender de mis errores. A pesar de mi corta 
                          experiencia, tengo la capacidad de trabajar de forma independiente y en equipo, y estoy comprometido en proporcionar soluciones de alta calidad
                          para satisfacer las necesidades del cliente. 
                     </Parrafo>
                   </div>
                  <ListTechnologi>
                     <ItemTechnologi> <AiFillHtml5 size="40px" color="rgb(241, 99, 27)" /> </ItemTechnologi>
                     <ItemTechnologi> <DiCss3 size="40px" color="#007bff" /> </ItemTechnologi>
                     <ItemTechnologi> <DiJsBadge size="30px" color="#F7E04A" /> </ItemTechnologi>
                     <ItemTechnologi> <SiTypescript size="30px" color="#007ACC" /> </ItemTechnologi>
                     <ItemTechnologi> <DiReact size="40px" color="#61DAFB" /> </ItemTechnologi>
                  </ListTechnologi>
                 
                  <ListTechnologi>
                     <ItemTechnologi> <SiPhp size="40px" color="#4F5D95" /></ItemTechnologi>
                     <ItemTechnologi><DiMysql size="40px" color="#00618A" /></ItemTechnologi>
                     <ItemTechnologi>  <SiFlutter size="30px" color="#02569B" /> </ItemTechnologi>
                    <ItemTechnologi><SiDotnet size="40px" color="#512BD4" /></ItemTechnologi>
                     <ItemTechnologi> <DiGithubBadge size="40px" color="#11dbcf" /> </ItemTechnologi>
                  </ListTechnologi>

            </Container>
      )
}

const Container = styled.div`
      width: 50%;
      padding: 3px;
      display: flex;
      flex-wrap: wrap;
      margin-top: -5px`;

const Title = styled.h2`
     width: 100%;
     font-size: 30px;
     color: #18d26e;
     margin: 0px;
     font-family: 'Poppins', sans-serif`;

const Parrafo = styled.p`
      font-family: 'Poppins', sans-serif;
      text-align: justify;
      font-size: 13.5px;
      width: 100%`;

const ListTechnologi = styled.div`
      width: 100%;
      margin-top: 10px;
      display: flex;
      flex-direction: colunm;
      justify-content: space-between`;

const ItemTechnologi = styled.span`
      text-decoration: none`

export default Datos;
