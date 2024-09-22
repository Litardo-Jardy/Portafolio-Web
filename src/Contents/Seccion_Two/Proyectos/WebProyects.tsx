import styled from "styled-components";
import { CiWifiOn } from "react-icons/ci";
import { FaSignal, FaStar } from "react-icons/fa";
import { FaBluetoothB } from "react-icons/fa";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { AiOutlineReload } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoBookOutline } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { RiShareBoxFill } from "react-icons/ri";

const Web = () => {
  const Container = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(/assets/laptop.png);
    width: 900px;
    height: 700px;

    transform: scale(0.98);
  `;

  const Elements = styled.div`
    width: 725px;
    height: 456px;
    position: relative;
    left: 87px;
    top: 113.5px;
    transform: scale(0.98);
    border-radius: 5px;
    overflow: hidden;
    // @media (max-width: 455px) {
    //   left: 31px;
    // }
  `;

  const Header = styled.footer`
    color: rgb(238, 238, 239);
    background: rgb(37, 42, 47);
    border-top: 1px solid rgb(37, 42, 47);
    height: 40px;
    width: 100%;
    display: flex;
    z-index: 2;
    position: absolute;
    justify-content: space-between;
    align-items: center;
  `;

  const UrlBar = styled.div`
    width: 70%;
    height: 30px;
    z-index: 2;
    border-radius: 10px;
    background: rgba(238, 238, 239, 0.19);
    display: flex;
    justify-content: space-between;
    position: relative;
  `;

  const Items = styled.div`
    display: flex;
    z-index: 2;
    flex-direction: row;
    width: 78px;
    position: relative;
    left: 14px;
    justify-content: space-between;
  `;

  const ContainerImage = styled.div`
    overflow-x: scroll;
    overflow-y: scroll;
    display: inline-flex;
    width: 725px;
    height: 499px;
    position: relative;
    top: -45px;
  `;

  const Image = styled.img`
    width: 725px;
    height: 650px;
    position: relative;
    object-fit: contain;
  `;

  return (
    <Container>
      <Elements>
        <Header>
          <Items>
            <span>
              <IoIosArrowBack size="15" />
            </span>
            <span>
              <IoIosArrowForward size="15" />
            </span>
            <AiOutlineReload
              size="16px"
              style={{ position: "relative", top: "3px" }}
            />
          </Items>
          <UrlBar>
            <p
              style={{
                fontSize: "12px",
                position: "relative",
                left: "10px",
                top: "-7px",
              }}
            >
              <FaLock size="12" /> https://portafolio.vercel.app
            </p>
            <FaRegStar
              style={{ position: "relative", top: "8px", left: "-8px" }}
            />
          </UrlBar>
          <Items style={{ width: "50px", left: "-10px" }}>
            <span>
              <FaAlignJustify size="14" />
            </span>
            <span>
              <CgProfile
                size="17"
                style={{
                  position: "relative",
                  top: "1px",
                }}
              />
            </span>
          </Items>
        </Header>
        <ContainerImage>
          <Image src="/assets/libreria/ImageOne.png" />
          <Image src="/assets/libreria/ImageTwo.png" />
        </ContainerImage>
      </Elements>
    </Container>
  );
};
export default Web;
