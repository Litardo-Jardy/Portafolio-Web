import styled from "styled-components";

//---------------------------- Contact
export const ContainerContact = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  width: 100%;
  margin-top: 70px;
`;

//---------------------------- Location Styles;
export const ContainerLocation = styled.div`
  width: 48%;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;

  border-left: 2px solid #18d26e;

  @media (max-width: 800px) {
    width: 100%;
    border-left: none;
    border-top: 2px solid #18d26e;
    margin-top: 60px;
  }
`;

export const ContainerText = styled.div`
  position: relative;
  // border: 1px solid #18d26e;
  background-color: #313131;
  border-radius: 8px;
  width: 50%;
  height: 38px;
  padding: 15px;
  margin: 5px;
  position: relative;
  top: 45px;
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    width: 70%;
    margin: 10px;
  }
`;

export const Text = styled.span`
  font-size: 17px;
  position: relative;
  top: 5px;
  font-family: "Poppins", sans-serif;
`;

//---------------------------- Form Styles;
export const Formik_Container = styled.div`
  display: flex;
  justify-content: center;
  width: 48%;
  position: relative;
  top: -15px;

  @media (max-width: 800px) {
    width: 100%;
    left: -15px;
  }
`;

export const Container = styled.div`
  margin-top: 28px;
  width: 100%;
`;

export const Label_Form = styled.label`
  width: 100%;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  margin-top: -25px;
`;

export const Field_Form = styled.input`
  border: none;
  width: 94%;
  background-color: #313131;
  color: #fff;
  font-family: "Poppins", sans-serif;
  outline: none;
  padding: 15px;
  border-radius: 8px;
  margin-top: 10px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Textarea = styled.textarea`
  border: none;
  width: 94%;
  background-color: transparent;
  color: #fff;
  padding: 15px;
  background-color: #313131;
  font-family: "Poppins", sans-serif;
  outline: none;
  margin-top: 15px;
  border-radius: 8px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Submit_Buttom = styled.button`
  width: 100%;
  text-align: center;
  background-color: #10b35c;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  border-radius: 8px;
  margin-top: 20px;
  font-size: 20px;
  padding: 5px;

  border: 2px solid #10b35c;
  @media (max-width: 800px) {
    width: 110%;
  }
`;
