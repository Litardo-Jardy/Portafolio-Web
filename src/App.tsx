import "./Contents-css/global.css";
import SeccionOne from "./Contents/SeccionOne";
import SeccionTwo from "./Contents/SeccionTwo";
import Navegacion from './Contents/Seccion_One/Navegacion.jsx'

export const App = () => {
  return (
      <div className="Container_One">
        <SeccionOne />
        <SeccionTwo />
      </div>
  );
};
