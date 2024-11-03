import React from "react";
import {
  Formik_Container,
  Container,
  Label_Form,
  Textarea,
  Field_Form,
  Submit_Buttom,
} from "./StyleComponent.tsx";
import SendForm from "./SendEmailJs.tsx";

const Formulario = () => {
  const {
    handleNombreChange,
    nombre,
    handleEmailChange,
    email,
    handleAsuntoChange,
    asunto,
    sendForm,
  } = SendForm();

  return (
    <Formik_Container>
      <form onSubmit={sendForm} style={{ width: "60%" }}>
        <Container>
          <Label_Form>Nombre</Label_Form>
          <Field_Form
            name="name"
            type="text"
            value={nombre}
            onChange={handleNombreChange}
          />
        </Container>

        <Container>
          <Label_Form>Email</Label_Form>
          <Field_Form
            name="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </Container>

        <Container>
          <Label_Form>Asunto</Label_Form>
          <Textarea
            name="asunto"
            value={asunto}
            onChange={handleAsuntoChange}
          />
        </Container>
        <Submit_Buttom type="submit">Enviar</Submit_Buttom>
      </form>
    </Formik_Container>
  );
};
export default Formulario;
