import React from "react";
import { Outlet } from "react-router-dom";
import { 
    MainCotainer,
    LayOut
 } from "../styles/styledElements";





const Layout = () => {
  
  return (
      <LayOut>
            <MainCotainer>
              < Outlet />
            </MainCotainer>
      </LayOut>

  );
};

export default Layout;