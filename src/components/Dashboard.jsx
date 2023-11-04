import { useState } from "react";
import {Link} from "react-router-dom";
function Dashboard (){
  
      
    return(
        <div className="w-50 mt-5">
            <h1>გამარჯობა {localStorage.getItem('meil')}</h1>
            <Link to="/" >{localStorage.removeItem("meil")} გასვლა</Link> 
            
        </div>
        
    )
}

export default Dashboard