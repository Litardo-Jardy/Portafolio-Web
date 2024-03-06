import "../seccionTwo.css";
import emailjs from '@emailjs/browser';
import { useState } from "react";

const Formulario = () =>{

      const [nombre, setNombre] = useState('');
      const [email, setEmail] = useState('');
      const [asunto, setAsunto] = useState('');

      const enviarFormulario = (e) =>{
            e.preventDefault();
            emailjs.sendForm("Mensaje_Jardy","Mensaje_Jardy",e.target,"6DW4yonSEqLsD8gaJ")
            .then(response => alert("El mensaje se envio con exito")
            .catch(error => alert(error)))

            setNombre("")
            setEmail("")
            setAsunto("")
            
            alert("El mensaje se envio")
      }

      const handleNombreChange = (e) => {
         setNombre(e.target.value);
       };
     
       const handleEmailChange = (e) => {
         setEmail(e.target.value);
       };
     
       const handleAsuntoChange = (e) => {
         setAsunto(e.target.value);
       };
      
      return(
          <div  className="Formik_Container">

                 <form onSubmit={enviarFormulario} className="Form_Container">
                              
                    <div className="Container">
                       <label className="Label_Form" >Nombre</label>  
                       <input 
                       name="nombre" 
                       type="text" 
                       className="Field_Form"
                       value = {nombre}
                       onChange={handleNombreChange}
                       />    
                    </div>
 
                    <div className="Container">
                       <label className="Label_Form" >Email</label>  
                       <input 
                       name="email" 
                       type="email" 
                       className="Field_Form"
                       value = {email}
                       onChange={handleEmailChange}   
                       /> 
                    </div>

                    <div className="Container">
                       <label className="Label_Form" >Asunto</label>  
                       <textarea 
                       name="asunto" 
                       type="text" 
                       className="Field_Form"
                       value = {asunto}
                       onChange={handleAsuntoChange} 
                        />    
                      
                    </div>
                       <button type="submit" className="Submit_Buttom" >Enviar</button>
                  </form>
          </div>)}
export default Formulario;