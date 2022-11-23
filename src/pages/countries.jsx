import React, { useState } from 'react';
import { getPoints, performers } from '../firebase.js';
import { BrowserRouter, Route, NavLink, useLocation, useNavigate } from "react-router-dom";
import { 
    BlueHeading,
    CountriesPage,
    PinkButton,
    GreenButton,
    BlueButton,
    CountryList,
    Logo,
    Nav,
    BackButton
 } from "../styles/styledElements";
 import logo from "../images/logo.png"
 import back from "../images/back.png"

export default function Countries() {

    function SetCountry(country)  {

        const countryNowCurrentPoints = getPoints(country.id).split(",");
        const stats = countryNowCurrentPoints[0] + "+" + countryNowCurrentPoints[1] + "+" + countryNowCurrentPoints[2];
    
        if(getPoints(country.id).split(",")[3] == 0) {
            return (
                <li  key={country.country}>{country.flag} {country.country}   
                   <NavLink to={`/rate/${country.id}`} ><PinkButton>Rate</PinkButton> </NavLink> 
                </li>
            );
        } else  {
            return (
                <li  key={country.country}>{country.flag} {country.country} 
                  <NavLink to={`/rate/${country.id}`} ><GreenButton>{stats}</GreenButton>  </NavLink>
                </li>
            );
        }     
    };

 


  
    
    return(
        <CountriesPage>
             <Nav>
                <NavLink to="/">
                    <BackButton src={back}></BackButton>
                </NavLink>
                <Logo src={logo}></Logo>
            </Nav>
            <div>
                <BlueHeading>Performing countries</BlueHeading>

                <CountryList>
                    {performers.map(item => SetCountry(item))}
                </CountryList>
            </div>  

            <NavLink to="/share">
                <BlueButton>My stats</BlueButton>
            </NavLink>

        </CountriesPage>
    )

};