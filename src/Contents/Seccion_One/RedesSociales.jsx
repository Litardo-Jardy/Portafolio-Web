import './seccionOne.css';
import { AiFillGithub } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import {  AiFillLinkedin } from 'react-icons/ai';

const RedesSociales = () =>{
      return(
          <ul className="Nav-Redes" >
               <li className="li-redes">
                   <a className="link-redes" href="https://github.com/Litardo-Jardy"> <AiFillGithub    color="#11dbcf"     size="30px"/> </a></li>
               <li className="li-redes">
                   <a className="link-redes" href="https://www.instagram.com/jardy_litardo/?next=%2F"> <FiInstagram color="#833AB4"         size="30px"/> </a></li>
               <li className="li-redes">
                   <a className="link-redes" href="https://www.linkedin.com/in/jardy-litardo-vera-209a36219/"> <AiFillLinkedin  color="#0077B5"  size="31px"/> </a></li>
           </ul>)}
export default RedesSociales;
