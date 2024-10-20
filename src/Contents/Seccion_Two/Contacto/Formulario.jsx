import "../seccionTwo.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import styled from "styled-components";

const Formik_Container = styled.div`
  display: flex;
  justify-content: center;
  width: 58%;
`;

const Container = styled.div`
  margin-top: 28px;
  width: 100%;
`;

const Label_Form = styled.label`
  width: 100%;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  margin-top: -25px;
`;

const Field_Form = styled.input`
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

const Textarea = styled.textarea`
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

const Submit_Buttom = styled.button`
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

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("Mensaje_Jardy", "Mensaje_Jardy", e.target, "6DW4yonSEqLsD8gaJ")
      .then((response) =>
        alert("El mensaje se envio con exito").catch((error) => alert(error)),
      );

    setNombre("");
    setEmail("");
    setAsunto("");

    alert("El mensaje se envio");
  };

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAsuntoChange = (e) => {
    setAsunto(e.target.value);
  };

  return (
    <Formik_Container>
      <form onSubmit={enviarFormulario} style={{ width: "60%" }}>
        <Container>
          <Label_Form>Nombre</Label_Form>
          <Field_Form
            name="name"
            type="text"
            className="Field_Form"
            value={nombre}
            onChange={handleNombreChange}
          />
        </Container>

        <Container>
          <Label_Form>Email</Label_Form>
          <Field_Form
            name="email"
            type="email"
            className="Field_Form"
            value={email}
            onChange={handleEmailChange}
          />
        </Container>

        <Container>
          <Label_Form>Asunto</Label_Form>
          <Textarea
            name="asunto"
            type="text"
            className="Field_Form"
            value={asunto}
            onChange={handleAsuntoChange}
          />
        </Container>
        <Submit_Buttom type="submit" className="Submit_Buttom">
          Enviar
        </Submit_Buttom>
      </form>
    </Formik_Container>
  );
};
export default Formulario;
