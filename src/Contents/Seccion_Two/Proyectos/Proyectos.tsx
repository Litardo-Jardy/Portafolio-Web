import "../seccionTwo.css";
import { AiFillGithub } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";
import Mobile from "./MobileProyects.tsx";
import styled from "styled-components";
import Web from "./WebProyects.tsx";
import { useEffect, useState } from "react";
import data from "./projects.json";

const Proyectos = () => {
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 30px;
  `;

  interface PropsContainerProyects {
    ltr: boolean;
  }

  const ContainerProjects = styled.div<PropsContainerProyects>`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
    flex-direction: ${(props) => (props.ltr ? "row" : "row-reverse")};
    position: relative;
    top: 5px;
  `;

  const DataProjects = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    position: relative;
    top: 90px;
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

  const projects = data.projects;

  const [scroll, setScroll] = useState<number>(2000);

  useEffect(() => {
    const handleResize = () => {
      setScroll(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container id="proyects">
      <div className="Title-Proyects">
        <h1 className="Title-Line-Proyects">
          PROYECTOS <span className="Line-Proyects">____________</span>
        </h1>
      </div>

      {projects.map((project) => (
        <ContainerProjects ltr={project.leftToRigth}></ContainerProjects>
      ))}

      <ContainerProjects ltr={false}>
        <DataProjects>
          <Title>
            - Library Online
            <LinkRedes href="https://github.com/Litardo-Jardy/Libreria-Online">
              <AiFillGithub color="#11dbcf" size="45px" />
            </LinkRedes>
            <LinkRedes href="https://libreria-online.vercel.app/">
              <GoLinkExternal
                style={{ position: "relative", left: "10px" }}
                color="#11dbcf"
                size="40px"
              />
            </LinkRedes>
          </Title>
          <ContainerLabel>
            <Label color="#28a745">Web</Label>
            <Label color="#28a745">Deploy</Label>
            <Label color="#28a754">Finished</Label>
          </ContainerLabel>
          <Parrafo>
            LibraryOnline es un proyecto desarrollado con el fin de crear y
            gestionar tu propia biblioteca de lectura en línea con
            funcionalidades como la persistencia de datos mediante el navegador,
            el buen rendimiento, etc. Este proyecto esta construido desde 0 con
            React.js aprovechando sus diversas herramientas para crear
            interfaces de usuario agradable e interactivas, la app cuenta con un
            estado global el cual es gestionado por medio de Redux Toolkit que
            incluyendo la implementacion de TypeScript dan una experiencia de
            usuario dinamica y confiable. Puedes visitar el repositorio del
            proyecto (Icono de github a lado del nombre) para enterarte un poco
            màs de como esta construido.
          </Parrafo>
          <ContainerLabel>
            <Span>Technologis:</Span>
            <Label color="#02569B">TypeScript</Label>
            <Label color="#777BB4">React</Label>
          </ContainerLabel>
        </DataProjects>
        {scroll > 970 ? <Web /> : <Mobile />}
      </ContainerProjects>

      <ContainerProjects ltr={true}>
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
            "SkyLocal". Puedes monitoriar el progreso del proyecto y las
            herramientas que se utilizan en el repositorio dejado al principio.
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
