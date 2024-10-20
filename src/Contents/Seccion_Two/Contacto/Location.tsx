import styled from "styled-components";
import { IoLocationSharp } from "react-icons/io5";

const ContainerLocation = styled.div`
  width: 40%;
  justify-content: center;
  align-item: center;
`;

const ContainerText = styled.div`
  text-align: center;
  position: relative;
  top: 170px;

  border-right: 2px solid #18d26e;
`;

const Text = styled.span`
  font-size: 22px;
  font-family: "Kalam", cursive;
  text-align: center;
`;

const Location = () => {
  return (
    <ContainerLocation>
      <ContainerText>
        <Text>
          <IoLocationSharp /> Guayas - Duran - Ecuador
        </Text>
      </ContainerText>
    </ContainerLocation>
  );
};
export default Location;
