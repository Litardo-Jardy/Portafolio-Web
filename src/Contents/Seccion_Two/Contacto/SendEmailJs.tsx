import emailjs from "@emailjs/browser";
import { useState } from "react";

const SendForm = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");

  const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "Mensaje_Jardy",
        "Mensaje_Jardy",
        e.target as HTMLFormElement,
        "6DW4yonSEqLsD8gaJ",
      )
      .then(() => {
        alert("El mensaje se envió con éxito");
      })
      .catch((error) => alert(error));
    setNombre("");
    setEmail("");
    setAsunto("");

    alert("El mensaje se envio");
  };

  const handleNombreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleAsuntoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAsunto(e.target.value);
  };
  return {
    sendForm,
    handleNombreChange,
    handleEmailChange,
    handleAsuntoChange,
    nombre,
    email,
    asunto,
  };
};

export default SendForm;
