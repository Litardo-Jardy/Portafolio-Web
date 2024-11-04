import { IoLocationSharp } from "react-icons/io5";
import { ContainerLocation, ContainerText, Text } from "./StyleComponent.tsx";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import React from "react";
const Location = () => {
  return (
    <ContainerLocation>
      <ContainerText>
        <Text>
          <FaPhoneAlt
            size={20}
            style={{ paddingLeft: "15px", paddingRight: "5px" }}
          />
          {"       "} +593 986706743
        </Text>
      </ContainerText>
      <ContainerText>
        <Text>
          <MdEmail
            size={25}
            style={{ paddingLeft: "15px", paddingRight: "5px" }}
          />
          {"       "} jivan.litardo@gmail.com
        </Text>
      </ContainerText>
      <ContainerText>
        <Text>
          <IoLocationSharp
            size={25}
            style={{ paddingLeft: "15px", paddingRight: "5px" }}
          />
          {"       "} Guayas - Duran - Ecuador
        </Text>
      </ContainerText>
    </ContainerLocation>
  );
};
export default Location;
