import emailjs from "@emailjs/browser";
import { useState } from "react";
import {
  Formik_Container,
  Container,
  Label_Form,
  Textarea,
  Field_Form,
  Submit_Buttom,
} from "./StyleComponent.tsx";

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
            type="text"
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
