import emailjs from "@emailjs/browser";
import { useState } from "react";

const [nombre, setNombre] = useState("");
const [email, setEmail] = useState("");
const [asunto, setAsunto] = useState("");

// interface DataProps { Pasar bien las props a cada functions;
//     e: string}
//
// const sendForm = (e) => {
//   e.preventDefault();
//   emailjs
//     .sendForm("Mensaje_Jardy", "Mensaje_Jardy", e.target, "6DW4yonSEqLsD8gaJ")
//     .then((response) =>
//       alert("El mensaje se envio con exito").catch((error) => alert(error)),
//     );
//
//   setNombre("");
//   setEmail("");
//   setAsunto("");
//
//   alert("El mensaje se envio");
// };
//
// const handleNombreChange = (e) => {
//   setNombre(e.target.value);
// };
//
// const handleEmailChange = (e) => {
//   setEmail(e.target.value);
// };
//
// const handleAsuntoChange = (e) => {
//   setAsunto(e.target.value);
// };
//
// export default { sendForm, handleNombreChange, handleEmailChange, handleAsuntoChange, nombre, email, asunto }
