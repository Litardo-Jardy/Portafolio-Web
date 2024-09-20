import BPeliculas1 from "./Image_Proyectos/Buscador_peliculas1.jpeg";
import styled from "styled-components";
import { FaDotCircle } from "react-icons/fa";
import { CiWifiOn } from "react-icons/ci";
import { FaSignal } from "react-icons/fa";
import { FaBluetoothB } from "react-icons/fa";
import { FaSquareFull } from "react-icons/fa";
import { GoTriangleLeft } from "react-icons/go";
import { FaCircle } from "react-icons/fa";

const Mobile = () => {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 360px;
    height: 700px;
    border: 10px #000 solid;
    border-radius: 35px;
  `;

  const PartTop = styled.span`
    width: 390px;
    display: flex;
    position: absolute;
    z-index: 2;
    justify-content: space-around;
    height: 33px;
  `;

  const Hours = styled.p`
    font-size: 12px;
    position: relative;
    top: -10px;
    left: -7px;
    z-index: 2;
    font-family: "IBM Plex Serif", serif;
    color: #fff;
  `;

  const Camera = styled.span`
    position: relative;
    top: 5px;
    left: 10px;
  `;

  const Items = styled.div`
    display: flex;
    z-index: 2;
    flex-direction: row;
    width: 70px;
    position: relative;
    top: 5px;
    left: 14px;
    justify-content: space-between;
  `;

  const ContinerImage = styled.div`
    overflow-x: scroll;
    display: inline-flex;
  `;

  const Image = styled.img`
    width: 353px;
    position: relative;
    border-radius: 20px;
    object-fit: cover;
    padding: 3px;
  `;

  const PartBottom = styled.span`
    width: 320px;
    display: flex;
    justify-content: space-around;
    position: absolute;
    z-index: 3;
  `;

  const Buttons = styled.span`
    position: relative;
    top: 662px;
    z-index: 3;
  `;

  interface SideButtonsProps {
    heigth: string;
    top: string;
  }

  const SideButtons = styled.span<SideButtonsProps>`
    height: ${(props) => props.heigth};
    width: 10px;
    border-radius: 15%;
    background-color: #000;
    position: absolute;
    left: 379px;
    top: ${(props) => props.top};
    z-index: 3;
  `;

  return (
    <Container>
      <PartTop>
        <SideButtons heigth="110px" top="110px" />
        <SideButtons heigth="70px" top="240px" />
        <Hours>8:00pm</Hours>
        <Camera>
          <FaDotCircle size="17" />
        </Camera>
        <Items>
          <span>
            <FaBluetoothB size="13" />
          </span>
          <span>
            <FaSignal size="11" />
          </span>
          <span>
            <FaSignal size="11" />
          </span>
          <span>
            <CiWifiOn size="17" />
          </span>
        </Items>
      </PartTop>
      <ContinerImage>
        <Image src={BPeliculas1} />
        <Image src={BPeliculas1} />
        <Image src={BPeliculas1} />
      </ContinerImage>
      <PartBottom>
        <Buttons>
          <GoTriangleLeft size="15" />
        </Buttons>
        <Buttons>
          <FaCircle size="13" />
        </Buttons>
        <Buttons>
          <FaSquareFull size="12" />
        </Buttons>
      </PartBottom>
    </Container>
  );
};
export default Mobile;
