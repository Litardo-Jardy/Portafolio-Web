import "../seccionTwo.css";
import Datos from "./Datos";
import imagen from "./Image_SobreMi/PerfilSix.jpeg";

import {
  Container,
  ImageContainer,
  Img,
  Title,
  SubTitle,
  Line,
  Resume,
} from "./StyleComponent";

const SobreMi = () => {
  return (
    <Container id="sobreMi">
      <div style={{ width: "100%" }}>
        <Title>
          ABOUT ME <Line>____________</Line>
        </Title>
        <SubTitle>MORE ABOUT ME</SubTitle>
      </div>
      <ImageContainer>
        <Img src={imagen} />
        <Resume
          href="/assets/curriculum.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View my resume
        </Resume>
        <br />
      </ImageContainer>
      <Datos />
    </Container>
  );
};
export default SobreMi;
