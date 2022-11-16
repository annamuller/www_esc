import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { 
    NavBar
 } from "./styles/styledElements";


function Navbar() {
  return (
      <NavBar>
   
        <ul>
            <li>
                < NavLink to="/" >home</ NavLink>
            </li>
            <li>
                < NavLink to="/countries" > countries</ NavLink>
            </li>
            <li>
                < NavLink to="/share" >share</ NavLink>
            </li>

        </ul>
            

      </NavBar>
  );
}

export default Navbar;