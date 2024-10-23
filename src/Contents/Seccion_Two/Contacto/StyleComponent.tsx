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
  width: 40%;
  justify-content: center;
  align-item: center;
`;

export const ContainerText = styled.div`
  text-align: center;
  position: relative;
  top: 170px;

  border-right: 2px solid #18d26e;
`;

export const Text = styled.span`
  font-size: 22px;
  font-family: "Kalam", cursive;
  text-align: center;
`;

//---------------------------- Form Styles;
export const Formik_Container = styled.div`
  display: flex;
  justify-content: center;
  width: 58%;
`;

export const Container = styled.div`
  margin-top: 28px;
  width: 100%;
`;

export const Label_Form = styled.label`
  width: 100%;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  margin-top: -25px;
`;

export const Field_Form = styled.input`
  border: none;
  width: 100%;
  border-bottom: 1px solid #18d26e;
  background-color: transparent;
  color: #fff;
  font-family: "Poppins", sans-serif;
  outline: none;
  padding: 2px;
  margin-top: 15px;
`;

export const Textarea = styled.textarea`
  border: none;
  width: 100%;
  border-bottom: 2px solid #18d26e;
  background-color: transparent;
  color: #fff;
  font-family: "Poppins", sans-serif;
  outline: none;
  padding: 2px;
  margin-top: 15px;
`;

export const Submit_Buttom = styled.button`
  width: 100%;
  text-align: center;
  background-color: #10b35c;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  border-radius: 5px;
  margin-top: 20px;
  font-size: 20px;
  padding: 5px;

  border: 2px solid #10b35c;
`;
