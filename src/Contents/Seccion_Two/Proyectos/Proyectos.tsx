import "../seccionTwo.css";
import { AiFillGithub } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";
import Mobile from "./MobileProyects.tsx";
import Web from "./WebProyects.tsx";
import { useEffect, useState } from "react";
import data from "./projects.json";

//Styles;
import {
  ContainerProjects,
  ContainerDevice,
  DataProjects,
  Title,
  ContainerLabel,
  Label,
  Parrafo,
  Span,
  LinkRedes,
  SubTitle,
} from "./StyleComponent.tsx";

const Proyectos = () => {
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
    <ContainerProjects id="proyects">
      <div className="Title-Proyects">
        <h1 className="Title-Line-Proyects">
          PROJECTS <span className="Line-Proyects">____________</span>
        </h1>
        <SubTitle>MY PROJECTS</SubTitle>
      </div>

      {projects.map((project) => (
        <ContainerDevice ltr={project.leftToRigth}>
          <DataProjects>
            <Title>
              {project.name}

              <LinkRedes href={project.repository}>
                <AiFillGithub color="#11dbcf" size="45px" />
              </LinkRedes>

              {project.deploy != "" ? (
                <LinkRedes href="https://libreria-online.vercel.app/">
                  <GoLinkExternal
                    style={{ position: "relative", left: "10px" }}
                    color="#11dbcf"
                    size="40px"
                  />
                </LinkRedes>
              ) : null}
            </Title>

            <ContainerLabel>
              {project.labels.map((label) => (
                <Label color={label.color}>{label.name}</Label>
              ))}
            </ContainerLabel>

            <Parrafo>{project.descripcion}</Parrafo>

            <ContainerLabel>
              <Span>Technologis:</Span>
              {project.technologis.map((technologi) => (
                <Label color={technologi.color}>{technologi.name}</Label>
              ))}
            </ContainerLabel>
          </DataProjects>

          {project.device == 0 && scroll > 970 ? (
            <Web images={project.images} />
          ) : (
            <Mobile images={project.imagesResponsive} />
          )}
        </ContainerDevice>
      ))}
    </ContainerProjects>
  );
};
export default Proyectos;
