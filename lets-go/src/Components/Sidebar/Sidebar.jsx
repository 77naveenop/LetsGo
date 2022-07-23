import React from "react";
import { NavLink } from "react-router-dom";
import "../Sidebar/Sidebar.scss";
// import { NavLink } from "react-router-dom";


const Sidebar=( {sidebar , handleToggleSidebar})=>{
    return(
         <nav className={sidebar?"sidebar open":"sidebar"}
           
         onClick={()=>handleToggleSidebar()}

         >
          <li className="sidebar_home">
              <span><NavLink to="/" className="sidebar_navlink">Home</NavLink></span>
          </li >
          <li className="sidebar_mountains">
              <span><NavLink to="/Mountains" className="sidebar_navlink">Mountains</NavLink></span>
          </li>
          <li  className="sidebar_forests">
              <span><NavLink to="/Forests" className="sidebar_navlink" >Forests</NavLink></span>
          </li>
          <li className="sidebar_logout">
              <span>LogOut</span>
          </li>

         </nav>
    )
}




export default Sidebar;