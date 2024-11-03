import { AiFillGithub } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import React from "react";
import styled from "styled-components";

const RedesSociales = () => {
  return (
    <NavRedes>
      <LiRedes>
        <LinkRedes href="https://github.com/Litardo-Jardy">
          {" "}
          <AiFillGithub color="#11dbcf" size="35px" />{" "}
        </LinkRedes>
      </LiRedes>
      <LiRedes>
        <LinkRedes href="https://www.instagram.com/jardy_litardo/?next=%2F">
          {" "}
          <FiInstagram color="#833AB4" size="35px" />{" "}
        </LinkRedes>
      </LiRedes>
      <LiRedes>
        <LinkRedes href="https://www.linkedin.com/in/jardy-litardo-vera-209a36219/">
          {" "}
          <AiFillLinkedin color="#0077B5" size="36px" />{" "}
        </LinkRedes>
      </LiRedes>
    </NavRedes>
  );
};

const NavRedes = styled.ul`
  display: flex;
  width: 420px;
  justify-content: space-evenly;
  position: relative;
  bottom: 50px;
  margin-top: 6px;

  @media (max-width: 510px) {
    top: -10px;
    flex-direction: row;
  }
`;

const LiRedes = styled.li`
  list-style: none;
  margin-left: -39px;
  margin-top: 15px;
  width: 55px;
  height: 15px;
  text-align: center;
  border: rgba(255, 255, 255, 0.08);
  border-radius: 50%;

  @media (max-width: 510px) {
    padding: 20px;
    width: 60px;
    height: 60px;
  }
`;

const LinkRedes = styled.a`
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  background-color: transparent;
  color: #fff;
  font-family: "IBM Plex Serif", serif;
  margin-top: 20px;

  @media (max-width: 510px) {
    font-size: 15px;
    margin-top: 12px;
  }
`;

export default RedesSociales;
