import "../seccionTwo.css";
import { DiGithubBadge } from 'react-icons/di';
import { MdWeb } from 'react-icons/md';

const ProyectosContainer = (props) => {
      return(
            <h3 className="h3-proyects-container">{props.nombre} 
                <a className="link-proyects" href={props.link_one}>
                <span className="Git"><DiGithubBadge size="50px" color="#11dbcf" /></span>
                </a>

                <a className="link-proyects" href={props.link_two}>
                <span className="Git"> <MdWeb size="46px" color="#11dbcf" /></span>
                </a>  
            </h3> )}
export default ProyectosContainer;