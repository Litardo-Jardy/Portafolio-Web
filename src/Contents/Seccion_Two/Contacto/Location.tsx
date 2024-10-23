import { IoLocationSharp } from "react-icons/io5";
import { ContainerLocation, ContainerText, Text } from "./StyleComponent.tsx";

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
