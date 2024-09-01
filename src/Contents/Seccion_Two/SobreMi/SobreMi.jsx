import "../seccionTwo.css"
import Datos from "./Datos"
import imagen from './Image_SobreMi/Perfil.jpeg'

const SobreMi = () =>{
      return(
            <div className="Container-Sobre-Mi" id="sobreMi"> 
                   <div className="Title-Sobre-Mi"> 
                      <h1 className="h1-sobre-Mi">SOBRE MI <span className="line-Sobre-Mi">____________</span></h1>
                      <h2 className="h2-sobre-Mi">MAS SOBRE MI </h2>
                   </div>
                   <div className="Image">
                      <img className="Img" src={imagen}/>
                   </div>
                   <Datos/>
           </div>)}
export default SobreMi;
