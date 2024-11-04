import React, { useEffect, useState } from "react";
import { Nav, LiNav, LinkNav } from "./StyleComponent";

const Navegacion = () => {
  const [bottomLevel, setBottomLevel] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setBottomLevel(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav scroll={bottomLevel}>
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

export default Navegacion;
