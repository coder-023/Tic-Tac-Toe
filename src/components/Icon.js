import React from "react";
import {FaTimes,FaPen,FaRegCircle} from "react-icons/fa";
const Icon = ({name}) => {  {/*The work of this section is to just return the required icon by name */}
   switch(name){
       case "circle":
           return <FaRegCircle className="icon"/>
       case "cross":
           return <FaTimes className="icon"/>
        default:
            return <FaPen className="icon"/>   
           
   }
};
export default Icon;