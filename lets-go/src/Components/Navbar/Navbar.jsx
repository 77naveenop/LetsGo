import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import MenuIcon from '@mui/icons-material/Menu';







const Navbar = ({handleToggleSidebar}) => {




    return (
       
     <nav className="navbar">

        
        <li className="menu-link"><MenuIcon size={50} 
          
          onClick={()=>handleToggleSidebar()}

        /></li>
         <div className="left-nav">
             
            <NavLink to="/"><img src="travelLogo.png" alt="" width="70px" height="70px" className="logo"/></NavLink>
             <ul className="left-link">
                 <li><NavLink to="/" className="L-nav">Home</NavLink></li>
                 <li><NavLink to="/Mountains" className="L-nav">Mountains</NavLink></li>
                 <li><NavLink to="/Forests" className="L-nav">Forest</NavLink></li>
             </ul>
         </div>
         <div className="right-nav">
             <ul className="right-link">
                 <li><NavLink className="R-nav" to="/Login">Login</NavLink></li>
                 <li><NavLink className="R-nav" to="/SignUp" >SignUp</NavLink></li>
             </ul>
         </div>
     </nav>                        


    )


}



export default Navbar;