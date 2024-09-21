import "../seccionTwo.css";
import { AiFillGithub } from "react-icons/ai";
import Mobile from "./MobileProyects.tsx";
import BPeliculas1 from "./Image_Proyectos/Buscador_peliculas1.jpeg";
import BPeliculas2 from "./Image_Proyectos/Buscador_peliculas2.jpeg";

import Buscador1 from "./Image_Proyectos/Libros_1.jpeg";
import Buscador2 from "./Image_Proyectos/Libros_2.jpeg";
import Buscador3 from "./Image_Proyectos/Libros_3.jpeg";

import Camisetas1 from "./Image_Proyectos/Camisetas_1.jpeg";
import Camisetas2 from "./Image_Proyectos/Camisetas_2.jpeg";
import ProyectosContainer from "./ProyectosContainer.jsx";

import styled from "styled-components";

const Proyectos = () => {
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 30px;
  `;

  const ContainerProjects = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
    position: relative;
    top: 5px;
  `;

  const DataProjects = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    position: relative;
    top: 140px;
    @media (max-width: 910px) {
      width: 82%;
      top: 0px;
    }
  `;

  const Title = styled.h1`
    color: #18d26e;
    font-family: "Poppins", sans-serif;
    font-size: 40px;
    width: 100%;
  `;

  interface LabelProps {
    color: string;
  }

  const ContainerLabel = styled.div`
    display: flex;
    justify-content: start;
  `;

  const Label = styled.span<LabelProps>`
    background-color: ${(props) => props.color};
    border-radius: 10px;
    font-family: "Poppins", sans-serif;
    padding: 5px;
    margin-left: 10px;
    font-size: 13px;
  `;

  const Parrafo = styled.p`
    font-family: "Poppins", sans-serif;
    text-align: justify;
    font-size: 18px;
    width: 100%;
  `;

  const Span = styled.span`
    font-family: "Poppins", sans-serif;
    text-align: justify;
    font-size: 18px;
  `;

  const LinkRedes = styled.a`
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    background-color: transparent;
    color: #fff;
    font-family: "IBM Plex Serif", serif;
    position: relative;
    left: 20px;
    top: 12px;

    @media (max-width: 510px) {
      font-size: 15px;
      margin-top: 12px;
    }
  `;

  return (
    <Container id="proyects">
      <div className="Title-Proyects">
        <h1 className="Title-Line-Proyects">
          PROYECTOS <span className="Line-Proyects">____________</span>
        </h1>
      </div>

      <ContainerProjects>
        {/* <DataProjects> */}
        {/*   <Title> */}
        {/*     - LocalMarket */}
        {/*     <LinkRedes href="https://github.com/Litardo-Jardy/LocalMarket"> */}
        {/*       <AiFillGithub color="#11dbcf" size="45px" /> */}
        {/*     </LinkRedes> */}
        {/*   </Title> */}
        {/*   <ContainerLabel> */}
        {/*     <Label color="#28a745">Mobile</Label> */}
        {/*     <Label color="#28a745">Web</Label> */}
        {/*     <Label color="#007bff">Not-deploy</Label> */}
        {/*     <Label color="#007bff">Not-finished</Label> */}
        {/*   </ContainerLabel> */}
        {/*   <Parrafo> */}
        {/*     LocalMarket es un proyecto dedicado tanto a los clientes como a los */}
        {/*     comercios locales dentro de un area determinada, este proyecto */}
        {/*     Movil/Web tiene como fin conectar a estas dos entidades para */}
        {/*     encontrar un benificio mutuo entre ambos, tanto para los comercios */}
        {/*     locales en forma de tener mas visualizacion en su entorno como para */}
        {/*     los clientes al poder examinar los negocios locales en busca de sus */}
        {/*     productos deseados desde una misma ubicacion. LocaMarket intrega */}
        {/*     recursos de google maps mediante su API, como BackEnd utiliza una */}
        {/*     api rest desarrollada en php "API_local_market" y como herramienta */}
        {/*     adicional en modo desarrollo utilza una herramientra extra */}
        {/*     "SkyLocal". */}
        {/*   </Parrafo> */}
        {/*   <ContainerLabel> */}
        {/*     <Span>Technologis:</Span> */}
        {/*     <Label color="#02569B">Flutter</Label> */}
        {/*     <Label color="#777BB4"> php</Label> */}
        {/*   </ContainerLabel> */}
        {/* </DataProjects> */}
        <Mobile />
      </ContainerProjects>

      <ContainerProjects>
        <DataProjects>
          <Title>
            - LocalMarket
            <LinkRedes href="https://github.com/Litardo-Jardy/LocalMarket">
              <AiFillGithub color="#11dbcf" size="45px" />
            </LinkRedes>
          </Title>
          <ContainerLabel>
            <Label color="#28a745">Mobile</Label>
            <Label color="#28a745">Web</Label>
            <Label color="#007bff">Not-deploy</Label>
            <Label color="#007bff">Not-finished</Label>
          </ContainerLabel>
          <Parrafo>
            LocalMarket es un proyecto dedicado tanto a los clientes como a los
            comercios locales dentro de un area determinada, este proyecto
            Movil/Web tiene como fin conectar a estas dos entidades para
            encontrar un benificio mutuo entre ambos, tanto para los comercios
            locales en forma de tener mas visualizacion en su entorno como para
            los clientes al poder examinar los negocios locales en busca de sus
            productos deseados desde una misma ubicacion. LocaMarket intrega
            recursos de google maps mediante su API, como BackEnd utiliza una
            api rest desarrollada en php "API_local_market" y como herramienta
            adicional en modo desarrollo utilza una herramientra extra
            "SkyLocal".
          </Parrafo>
          <ContainerLabel>
            <Span>Technologis:</Span>
            <Label color="#02569B">Flutter</Label>
            <Label color="#777BB4"> php</Label>
          </ContainerLabel>
        </DataProjects>
        <Mobile />
      </ContainerProjects>

      {/* <div className="Container-Proyects-Two"> */}
      {/*      <img className="Img-Proyects" src={BPeliculas1} /> */}
      {/*      <img className="Img-Proyects" src={BPeliculas2} /> */}
      {/* </div> */}
      {/**/}
      {/* <ProyectosContainer  */}
      {/*          nombre="LIbreria Online " */}
      {/*          link_one="https://github.com/Litardo-Jardy/Libreria-Online" */}
      {/*          link_two="https://libreria-online.vercel.app/" /> */}
      {/**/}
      {/* <div className="Container-Proyects-Two"> */}
      {/*       <img className="Img-Proyects" src={Buscador1} /> */}
      {/*       <img className="Img-Proyects" src={Buscador2} /> */}
      {/*       <img className="Img-Proyects" src={Buscador3} /> */}
      {/* </div> */}
      {/**/}
      {/* <ProyectosContainer  */}
      {/*          nombre="Tienda de camisetas online" */}
      {/*          link_one="https://github.com/Litardo-Jardy/Tienda-Online-de-Camisetas" */}
      {/*          link_two="https://tienda-online-de-camisetas-30jubag5w-litardo-jardy.vercel.app/" /> */}
      {/**/}
      {/* <div className="Container-Proyects-Two"> */}
      {/*         <img className="Img-Proyects" src={Camisetas1} /> */}
      {/*         <img className="Img-Proyects" src={Camisetas2} /> */}
      {/*      </div> */}
    </Container>
  );
};
export default Proyectos;
