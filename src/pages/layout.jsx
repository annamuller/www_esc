import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { 
    MainCotainer,
    LayOut,
    Logo
 } from "../styles/styledElements";

 import logo from "../images/logo.png"



const Layout = () => {
  
  return (
      <LayOut>
            <Navbar/>
            <MainCotainer>
            <Logo src={logo}></Logo>
                 < Outlet />
            </MainCotainer>
      </LayOut>

  );
};

export default Layout;