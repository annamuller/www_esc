import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { 
    MainCotainer,
    LayOut
 } from "../styles/styledElements";





const Layout = () => {
  
  return (
      <LayOut>
            <Navbar/>
            <MainCotainer>
            < Outlet />
            </MainCotainer>
      </LayOut>

  );
};

export default Layout;