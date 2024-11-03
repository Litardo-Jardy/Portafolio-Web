import "../seccionTwo.css";
import Formulario from "./Formulario";
import Location from "./Location";
import { SubTitle } from "../Proyectos/StyleComponent";
import { ContainerContact } from "./StyleComponent.tsx";
import React from "react";

//Hacer el reponsive para ete modulo que paso cierto tamaño de pnatalla sea row ese flexDirection: 'row',
const Contacto = () => {
  return (
    <ContainerContact>
      <div id="contact" className="Title-Proyects">
        <h1 className="Title-Line-Proyects">
          Contacto <span className="Line-Proyects">____________</span>
        </h1>
        <SubTitle>Dejame un mensaje</SubTitle>
      </div>
      <Location />
      <Formulario />
    </ContainerContact>
  );
};
export default Contacto;
