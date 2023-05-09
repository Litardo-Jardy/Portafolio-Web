import '../Contents-css/seccions.css';
import Habilidades from "./Seccion_Two/Habilidades/Habilidades";
import Contacto from "./Seccion_Two/Contacto/Contacto"
import Proyectos from "./Seccion_Two/Proyectos/Proyectos";
import SobreMi from "./Seccion_Two/SobreMi/SobreMi";
import ScrollBoton from "./Seccion_One/ScrollBoton";

const SeccionTwo = () =>{
      return(
               <div className="Seccion_Two">
                     <ScrollBoton />
                     <SobreMi/>
                     <Habilidades/>
                     <Proyectos />
                     <Contacto />
              </div>)}
export default SeccionTwo;