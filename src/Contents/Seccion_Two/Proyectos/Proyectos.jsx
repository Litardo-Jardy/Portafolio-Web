import "../seccionTwo.css";
import BPeliculas1 from './Image_Proyectos/Buscador_peliculas1.jpeg'
import BPeliculas2 from './Image_Proyectos/Buscador_peliculas2.jpeg'

import Buscador1 from './Image_Proyectos/Buscador_Imagenes_1.jpeg'
import Buscador2 from './Image_Proyectos/Buscador_Imagenes_2.jpeg'
import Buscador3 from './Image_Proyectos/Buscador_Imagenes_3.jpeg'

import Camisetas1 from './Image_Proyectos/Camisetas_1.jpeg'
import Camisetas2 from './Image_Proyectos/Camisetas_2.jpeg'
import ProyectosContainer from './ProyectosContainer'


const Proyectos = () =>{
      return(
        <div className="Container-Proyectos" id="proyectos">
            
             <div className="Title-Proyects"> 
                  <h1 className="Title-Line-Proyects">PROYECTOS <span className="Line-Proyects">____________</span></h1>
             </div>
            
            <ProyectosContainer 
                      nombre="Buscador de peliculas"
                      link_one="https://github.com/Litardo-Jardy/Buscador-de-Peliculas"
                      link_two="https://buscador-de-peliculas-4e5ubdtrs-litardo-jardy.vercel.app/" />

             <div className="Container-Proyects-Two">
                  <img className="Img-Proyects" src={BPeliculas1} />
                  <img className="Img-Proyects" src={BPeliculas2} />
             </div>

             <ProyectosContainer 
                      nombre="Buscador de Imagenes "
                      link_one="https://github.com/Litardo-Jardy/Buscador_de_imagenes"
                      link_two="https://litardo-jardy.github.io/Buscador_de_imagenes/" />

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