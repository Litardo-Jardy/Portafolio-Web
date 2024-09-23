import { AiOutlineReload } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

//-----Styles;
import {
  ContainerWeb,
  ElementsWeb,
  HeaderWeb,
  UrlBarWeb,
  ItemsWeb,
  ContainerImageWeb,
  ImageWeb,
} from "./StyleComponent.tsx";

interface Item {
  url: string;
}

interface MobileProps {
  images: Item[];
}

const Web = ({ images }: MobileProps) => {
  return (
    <ContainerWeb>
      <ElementsWeb>
        <HeaderWeb>
          <ItemsWeb>
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
          </ItemsWeb>
          <UrlBarWeb>
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
          </UrlBarWeb>
          <ItemsWeb style={{ width: "50px", left: "-10px" }}>
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
          </ItemsWeb>
        </HeaderWeb>
        <ContainerImageWeb>
          {images.map((image) => (
            <ImageWeb src={image.url} />
          ))}
        </ContainerImageWeb>
      </ElementsWeb>
    </ContainerWeb>
  );
};
export default Web;
