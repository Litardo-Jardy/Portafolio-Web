import '../Contents-css/seccions.css';
import Navegacion from "./Seccion_One/Navegacion.jsx";
import RedesSociales from "./Seccion_One/RedesSociales";

const SeccionOne = () =>{
      return(
            <div className="Seccion_One" id="presentacion">         
               <h1 className="h1_seccion">Jardy Litardo Vera</h1>
               <h2 className="h2_seccion">Desarrollador web REACT Jr.</h2>
               <Navegacion />
               <RedesSociales />
            </div>)}
export default SeccionOne;