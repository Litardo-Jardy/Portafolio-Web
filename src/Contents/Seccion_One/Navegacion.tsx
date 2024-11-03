import styled from "styled-components";
import React from "react";

const Navegacion = () => {
  return (
    <Nav>
      <LiNav>
        <LinkNav href="#presentacion">Inicio</LinkNav>
      </LiNav>
      <LiNav>
        <LinkNav href="#sobreMi">SobreMi</LinkNav>
      </LiNav>
      <LiNav>
        <LinkNav href="#proyects">Proyectos</LinkNav>
      </LiNav>
      <LiNav>
        <LinkNav href="#contact">Contacto</LinkNav>
      </LiNav>
    </Nav>
  );
};

const Nav = styled.ul`
  display: flex;
  width: 420px;
  justify-content: space-between;
  position: relative;
  bottom: 35px;
  margin-top: 6px;

  @media (max-width: 510px) {
    margin-top: 25px;
    top: -5px;
    width: 60%;
    flex-direction: row;
    text-align: center;
  }
`;

const LiNav = styled.li`
  list-style: none;
  margin-left: -39px;

  &:hover {
    border-bottom: 2px solid #18d26e;
  }

  @media (max-width: 510px) {
    position: relative;
    padding: 5px 10px 5px 10px;
  }
`;

const LinkNav = styled.a`
  text-decoration: none;
  font-size: 18px;
  background-color: transparent;
  color: #fff;
  font-family: "IBM Plex Serif", serif;

  @media (max-width: 510px) {
    font-size: 14px;
  }
`;

export default Navegacion;
