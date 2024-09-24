import styled from "styled-components";

//---------Device template;
//----------------------------------------Mobile;
export const Container = styled.div`
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

export const Elements = styled.div`
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

export const SpaceCamera = styled.div`
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

export const ContainerHeader = styled.header`
  background: rgb(37, 42, 47);
  z-index: 1;
  position: absolute;
  top: -1px;
  width: 100%;
`;

export const Header = styled.div`
  height: 28px;
  display: flex;
  font-weight: 700;
  font-size: 15px;
  padding: 16px 35px 0px 50px;
  display: flex;
  justify-content: space-between;
`;

export const Footer = styled.footer`
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

export const UrlBar = styled.div`
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

export const Hours = styled.p`
  font-size: 13px;
  position: relative;
  top: -15px;
  left: -7px;
  z-index: 2;
  font-family: "IBM Plex Serif", serif;
  color: #fff;
`;

export const Items = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: row;
  width: 85px;
  position: relative;
  top: 5px;
  left: 14px;
  justify-content: space-between;
`;

export const ContainerImage = styled.div`
  overflow-x: scroll;
  overflow-y: scroll;
  display: inline-flex;
  width: 370px;
  height: 637px;
  position: relative;
  top: -17px;
`;

export const Image = styled.img`
  width: 370px;
  height: 850px;
  position: relative;
  object-fit: cover;
`;

//-------------------------------------------Web;
export const ContainerWeb = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(/assets/laptop.png);
  width: 900px;
  height: 700px;

  transform: scale(0.98);
`;

export const ElementsWeb = styled.div`
  width: 725px;
  height: 456px;
  position: relative;
  left: 87px;
  top: 113.5px;
  transform: scale(0.98);
  border-radius: 5px;
  overflow: hidden;
  @media (max-width: 455px) {
    left: 31px;
  }
`;

export const HeaderWeb = styled.footer`
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

export const UrlBarWeb = styled.div`
  width: 70%;
  height: 30px;
  z-index: 2;
  border-radius: 10px;
  background: rgba(238, 238, 239, 0.19);
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const ItemsWeb = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: row;
  width: 78px;
  position: relative;
  left: 14px;
  justify-content: space-between;
`;

export const ContainerImageWeb = styled.div`
  overflow-x: scroll;
  overflow-y: scroll;
  display: inline-flex;
  width: 725px;
  height: 499px;
  position: relative;
  top: -45px;
`;

export const ImageWeb = styled.img`
  width: 725px;
  height: 650px;
  position: relative;
  object-fit: contain;
`;

//--------------------------------Style template;

export const ContainerProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

interface PropsContainerDevice {
  ltr: boolean;
}

export const ContainerDevice = styled.div<PropsContainerDevice>`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  flex-direction: ${(props) => (props.ltr ? "row" : "row-reverse")};
  position: relative;
  top: 5px;
`;

export const DataProjects = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  position: relative;
  top: 70px;

  @media (max-width: 930px) {
    top: 5px;
  }
  @media (max-width: 910px) {
    width: 82%;
    top: 5px;
  }
`;

export const Title = styled.h1`
  color: #18d26e;
  font-family: "Poppins", sans-serif;
  font-size: 40px;
  width: 100%;
`;

interface LabelProps {
  color: string;
}

export const ContainerLabel = styled.div`
  display: flex;
  justify-content: start;
`;

export const Label = styled.span<LabelProps>`
  background-color: ${(props) => props.color};
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  padding: 5px;
  margin-left: 10px;
  font-size: 13px;
`;

export const Parrafo = styled.p`
  font-family: "Poppins", sans-serif;
  text-align: justify;
  font-size: 18px;
  width: 100%;
`;

export const Span = styled.span`
  font-family: "Poppins", sans-serif;
  text-align: justify;
  font-size: 18px;
`;

export const LinkRedes = styled.a`
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  background-color: transparent;
  color: #fff;
  font-family: "IBM Plex Serif", serif;
  position: relative;
  left: 20px;
  top: 12px;

  @media (max-width: 510px) {
    font-size: 15px;
    margin-top: 12px;
  }
`;

export const SubTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 23px;
  margin-left: 10px;
`;
