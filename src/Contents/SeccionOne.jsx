import '../Contents-css/seccions.css';
import Navegacion from "./Seccion_One/Navegacion.jsx";
import RedesSociales from "./Seccion_One/RedesSociales";
import imagen from './Seccion_Two/SobreMi/Image_SobreMi/PerfilOne.jpeg'

const SeccionOne = () =>{
      return(
            <div className="Seccion_One" id="presentacion">
                   <div className="ImagePrincipal">
                      <img className="Img" src={imagen}/>
                   </div>
               <h1 className="h1_seccion">Tech. Jardy Litardo</h1>
               <h2 className="h2_seccion">Software develoment</h2>
               <Navegacion />
               <RedesSociales />
            </div>)}
export default SeccionOne;
