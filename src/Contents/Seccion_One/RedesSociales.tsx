import { AiFillGithub } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import React from "react";
import { NavRedes, LiRedes, LinkRedes } from "./StyleComponent";

const RedesSociales = () => {
  return (
    <NavRedes>
      <LiRedes>
        <LinkRedes href="https://github.com/Litardo-Jardy">
          <AiFillGithub color="#11dbcf" size="35px" />
        </LinkRedes>
      </LiRedes>
      <LiRedes>
        <LinkRedes href="https://www.instagram.com/jardy_litardo/?next=%2F">
          <FiInstagram color="#833AB4" size="35px" />
        </LinkRedes>
      </LiRedes>
      <LiRedes>
        <LinkRedes href="https://www.linkedin.com/in/jardy-litardo-vera-209a36219/">
          <AiFillLinkedin color="#0077B5" size="36px" />
        </LinkRedes>
      </LiRedes>
    </NavRedes>
  );
};

export default RedesSociales;
