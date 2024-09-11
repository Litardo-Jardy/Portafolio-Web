import BPeliculas1 from './Image_Proyectos/Buscador_peliculas1.jpeg'
import styled from 'styled-components';
import { FaDotCircle } from "react-icons/fa";
import { CiWifiOn } from "react-icons/ci";
import { FaSignal } from "react-icons/fa";
import { FaBluetoothB } from "react-icons/fa";
import { FaSquareFull } from "react-icons/fa";

const Mobile = () => {
  
  const Container = styled.div`
     display: flex;
     justify-content: center;
     flex-wrap: wrap;
     width: 290px;
     height: 550px;
     border: 2px #fff solid;
     border-radius: 20px`;

  const PartTop = styled.span`
     width: 290px;
     display: flex;
     position: absolute;
     z-index: 2;
     justify-content: space-around;
     height: 33px`;

  const Hours = styled.p`
     font-size: 12px;
     position: relative;
     top: -10px;
     left: -7px;
     z-index: 2;
     font-family: 'IBM Plex Serif', serif;
     color: #fff`;

  const Camera = styled.span`
     position: relative;
     top: 5px;
     left: 10px`;

  const Items = styled.div`
     display: flex;
     z-index: 2;
     flex-direction: row;
     width: 70px;
     position: relative;
     top: 5px;
     left: 14px;
     justify-content: space-between`;

  const Image = styled.img`
     width: 100%;
     position: relative;
     border-radius: 20px;
     object-fit: cover`; 

  const PartBottom = styled.span`
     width: 100%;
     justify-content: space-around`;


  return (
    <Container>
       <PartTop>
          <Hours>8:00pm</Hours>
          <Camera><FaDotCircle size="17" /></Camera>
          <Items> 
             <span><FaBluetoothB size="13" /></span>
             <span><FaSignal size="11" /></span>
             <span><FaSignal size="11" /></span>
             <span><CiWifiOn size="17" /></span>     
          </Items>
       </PartTop>
       <Image src={BPeliculas1} />
       <PartBottom>
          <span><FaSquareFull size="13"/></span>
          <span></span>
          <span></span>
       </PartBottom>
    </Container>
  )}
 export default Mobile; 
