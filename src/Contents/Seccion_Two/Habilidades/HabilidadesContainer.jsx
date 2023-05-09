import "../seccionTwo.css"

const HabilidadesContainer = (props) =>{
      return(
          <div className="Container-Habilidades-Two">
               <div className="Container-Habilidades-Tree">
                    {props.icons}
                    <span className="Tecnologias">{props.tecnologia}</span>
               </div>
          </div>
      )        
}
export default HabilidadesContainer;