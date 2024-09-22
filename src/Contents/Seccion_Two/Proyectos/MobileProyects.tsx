import styled from "styled-components";
import { CiWifiOn } from "react-icons/ci";
import { FaSignal } from "react-icons/fa";
import { FaBluetoothB } from "react-icons/fa";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { AiOutlineReload } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { RiShareBoxFill } from "react-icons/ri";

const Mobile = () => {
  const Container = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(/assets/device.png);
    width: 434px;
    height: 800px;
    transform: scale(0.98);
    @media (max-width: 910px) {
      position: relative;
      top: 15px;
    }
  `;

  const Elements = styled.div`
    width: 365px;
    height: 785px;
    position: relative;
    left: 35.5px;
    top: 6px;
    overflow: hidden;
    transform: scale(0.98);
    border-radius: 55px;
    @media (max-width: 455px) {
      left: 31px;
    }
  `;

  const SpaceCamera = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(/assets/camera.png);
    width: 145px;
    height: 60px;
    position: relative;
    left: 110px;
    top: -16px;
    z-index: 2;
  `;

  const ContainerHeader = styled.header`
    background: rgb(37, 42, 47);
    z-index: 1;
    position: absolute;
    top: -1px;
    width: 100%;
  `;

  const Header = styled.div`
    height: 28px;
    display: flex;
    font-weight: 700;
    font-size: 15px;
    padding: 16px 35px 0px 50px;
    display: flex;
    justify-content: space-between;
  `;

  const Footer = styled.footer`
    color: rgb(238, 238, 239);
    background: rgb(37, 42, 47);
    border-top: 1px solid rgb(37, 42, 47);
    height: 110px;
    width: 100%;
    position: absolute;
    top: 680px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const UrlBar = styled.div`
   width: 85%;
   height: 40px;
   margin 5px;
   border-radius: 15px;
   background: rgba(238, 238, 239, 0.19);
   display: flex;
   justify-content: space-between;
   position: relative;
   top: -5px;
`;

  const Hours = styled.p`
    font-size: 13px;
    position: relative;
    top: -15px;
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
    width: 85px;
    position: relative;
    top: 5px;
    left: 14px;
    justify-content: space-between;
  `;

  const ContainerImage = styled.div`
    overflow-x: scroll;
    overflow-y: scroll;
    display: inline-flex;
    width: 370px;
    height: 637px;
    position: relative;
    top: -17px;
  `;

  const Image = styled.img`
    width: 370px;
    height: 850px;
    position: relative;
    object-fit: cover;
  `;

  return (
    <Container>
      <Elements>
        <SpaceCamera />
        <ContainerHeader>
          <Header>
            <Hours>8:00pm</Hours>
            <Items style={{ top: "-2px" }}>
              <span>
                <FaBluetoothB size="17" />
              </span>
              <span>
                <FaSignal size="15" />
              </span>
              <span>
                <FaSignal size="15" />
              </span>
              <span>
                <CiWifiOn size="22" />
              </span>
            </Items>
          </Header>
        </ContainerHeader>
        <ContainerImage>
          <Image src="/assets/LocalMarket/ImageOne.png" />
          <Image src="/assets/LocalMarket/ImageTwo.png" />
          <Image src="/assets/LocalMarket/ImageTree.png" />
          <Image src="/assets/LocalMarket/ImageFour.png" />
        </ContainerImage>
        <Footer>
          <UrlBar>
            <RxLetterCaseCapitalize
              size="23px"
              style={{ position: "relative", left: "20px", top: "8px" }}
            />
            <p style={{ fontSize: "11px", position: "relative", top: "2px" }}>
              <FaLock size="10" /> https://portafolio.vercel.app
            </p>
            <AiOutlineReload
              size="20px"
              style={{ position: "relative", left: "-20px", top: "13px" }}
            />
          </UrlBar>
          <Items style={{ width: "90%", left: "0" }}>
            <span>
              <IoIosArrowBack size="25" />
            </span>
            <span>
              <IoIosArrowForward size="25" />
            </span>
            <span>
              <RiShareBoxFill size="25" />
            </span>
            <span>
              <IoBookOutline size="25" />
            </span>
            <span>
              <IoCopyOutline size="25" />
            </span>
          </Items>
        </Footer>
      </Elements>
    </Container>
  );
};
export default Mobile;
