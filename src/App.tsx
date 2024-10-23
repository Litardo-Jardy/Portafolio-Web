import styled from "styled-components";
import SeccionOne from "./Contents/Seccion_One/SeccionOne";
import SeccionTwo from "./Contents/SeccionTwo";

const Conatiner_One = styled.div`
  background-color: rgba(33, 37, 41, 0.9);
  color: #fff;
  display: flex;
  justify-content: center;
  border: 1px solid #212529;
  border-radius: 10px;
  box-sizing: border-box;
`;

export const App = () => {
  return (
    <Conatiner_One>
      <SeccionOne />
      <SeccionTwo />
    </Conatiner_One>
  );
};
