import "../seccionTwo.css";
import Mobile from "./MobileProyects.tsx";
import BPeliculas1 from './Image_Proyectos/Buscador_peliculas1.jpeg'
import BPeliculas2 from './Image_Proyectos/Buscador_peliculas2.jpeg'

import Buscador1 from './Image_Proyectos/Libros_1.jpeg'
import Buscador2 from './Image_Proyectos/Libros_2.jpeg'
import Buscador3 from './Image_Proyectos/Libros_3.jpeg'

import Camisetas1 from './Image_Proyectos/Camisetas_1.jpeg'
import Camisetas2 from './Image_Proyectos/Camisetas_2.jpeg'
import ProyectosContainer from './ProyectosContainer'


const Proyectos = () =>{
      return(
        <div className="Container-Proyectos" id="proyects">
            
             <div className="Title-Proyects"> 
                  <h1 className="Title-Line-Proyects">PROYECTOS <span className="Line-Proyects">____________</span></h1>
             </div>
  
             <Mobile />

             <div className="Container-Proyects-Two">
                  <img className="Img-Proyects" src={BPeliculas1} />
                  <img className="Img-Proyects" src={BPeliculas2} />
             </div>

             <ProyectosContainer 
                      nombre="LIbreria Online "
                      link_one="https://github.com/Litardo-Jardy/Libreria-Online"
                      link_two="https://libreria-online.vercel.app/" />

             <div className="Container-Proyects-Two">
                   <img className="Img-Proyects" src={Buscador1} />
                   <img className="Img-Proyects" src={Buscador2} />
                   <img className="Img-Proyects" src={Buscador3} />
             </div>

             <ProyectosContainer 
                      nombre="Tienda de camisetas online"
                      link_one="https://github.com/Litardo-Jardy/Tienda-Online-de-Camisetas"
                      link_two="https://tienda-online-de-camisetas-30jubag5w-litardo-jardy.vercel.app/" />

             <div className="Container-Proyects-Two">
                     <img className="Img-Proyects" src={Camisetas1} />
                     <img className="Img-Proyects" src={Camisetas2} />
             </div>
        </div>)}
export default Proyectos;
