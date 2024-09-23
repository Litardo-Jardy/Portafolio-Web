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

//-----Styles;
import {
  Container,
  Elements,
  SpaceCamera,
  ContainerHeader,
  Header,
  Footer,
  UrlBar,
  Hours,
  Items,
  ContainerImage,
  Image,
} from "./StyleComponent.tsx";

interface Item {
  url: string;
}

interface MobileProps {
  images: Item[];
}

const Mobile = ({ images }: MobileProps) => {
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
          {images.map((image) => (
            <Image src={image.url} />
          ))}
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
