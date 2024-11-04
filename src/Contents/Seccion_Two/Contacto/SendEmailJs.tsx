import emailjs from "@emailjs/browser";
import { useState } from "react";

const SendForm = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");

  const apiKey = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const formOne = import.meta.env.VITE_SEND_FORM_ONE;
  const formTwo = import.meta.env.VITE_SEND_FORM_TWO;

  const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(formOne, formTwo, e.target as HTMLFormElement, apiKey)
      .then(() => {
        alert("El mensaje se envió con éxito");
      });
    setNombre("");
    setEmail("");
    setAsunto("");
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
