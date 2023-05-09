import './Contents-css/global.css';
import SeccionOne from "./Contents/SeccionOne"
import SeccionTwo from "./Contents/SeccionTwo"

export const App = () =>{
      return(
          <div>
               <div className="Container_One">
                  <SeccionOne/>
                  <SeccionTwo/>
               </div>
           </div>
)}