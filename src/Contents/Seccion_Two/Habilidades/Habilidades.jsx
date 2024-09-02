import "../seccionTwo.css"
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { DiJavascript } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { DiGithubBadge } from 'react-icons/di';
import { DiPython } from 'react-icons/di';
import { DiMysql } from 'react-icons/di';
import { FaPhp } from "react-icons/fa";
import HabilidadesContainer from "./HabilidadesContainer";


const Habilidades = () =>{
      return(
           <div className="Container-Habilidades" id="habilidades">
                 <div className="Title-Habilidades"> 
                    <h1 className="title-line">HABILIDADES <span className="line">____________</span></h1>
                 </div>
                 <HabilidadesContainer icons={<AiFillHtml5 size="50px" color="rgb(241, 99, 27)" />} tecnologia="HTML" />
                 <HabilidadesContainer icons={<DiCss3 size="50px" color="#007bff" />} tecnologia="CSS" />
                 <HabilidadesContainer icons={<DiJavascript size="50px" color="#e80368" />} tecnologia="JAVASCRIPT"  />
                 <HabilidadesContainer icons={<DiReact size="50px" color="#9784bb" />} tecnologia="REACT.JS" />
                 <HabilidadesContainer icons={<DiGithubBadge size="50px" color="#11dbcf" />} tecnologia="GIT" />
                 <HabilidadesContainer icons={<DiPython size="50px" color="rgb(181, 212, 65)" />} tecnologia="PYTHON" />
                 <HabilidadesContainer icons={<DiMysql size="50px" color="#ffa76e" />} tecnologia="MySql" />
                 <HabilidadesContainer icons={<FaPhp size="50px" color="#ffa76e" />} tecnologia="PHP" />
            </div> )}
export default Habilidades;
