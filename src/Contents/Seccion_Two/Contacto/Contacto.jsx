import "../seccionTwo.css";
import styled from "styled-components";
import Formulario from "./Formulario";
import Location from "./Location";

import { SubTitle } from "../Proyectos/StyleComponent";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  width: 100%;
  margin-top: 70px;
`;

//Hacer el reponsive para ete modulo que paso cierto tamaño de pnatalla sea row ese flexDirection: 'row',
const Contacto = () => {
  return (
    <Container>
      <div id="contact" className="Title-Proyects">
        <h1 className="Title-Line-Proyects">
          Contacto <span className="Line-Proyects">____________</span>
        </h1>
        <SubTitle>Dejame un mensaje</SubTitle>
      </div>
      <Location />
      <Formulario />
    </Container>
  );
};
export default Contacto;
