import React from 'react';
import { getPoints, performers } from '../firebase.js';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { 
    BlueHeading,
    CountriesPage,
    PinkButton,
    GreenButton,
    BlueButton,
    CountryList,
    Logo
 } from "../styles/styledElements";
 import logo from "../images/logo.png"



const countryItems = performers.map(function(country) {
    console.log(country.id);
    const stats = country.points.split(",")[0] + "+" + country.points.split(",")[1]  + "+" + country.points.split(",")[2]
    if(country.points.split(",")[3] == 0)
        return  <li  key={country.country}>{country.flag} {country.country}   <NavLink to={`/rate/${country.id}`} ><PinkButton>Rate</PinkButton> </NavLink> </li>
    else 
        return <li  key={country.country}>{country.flag} {country.country} <NavLink to={`/rate/${country.id}`} ><GreenButton>{stats}</GreenButton>  </NavLink></li>
      
});


export default function Countries() {
    
    return(
        <CountriesPage>
            <Logo src={logo}></Logo>
            <div>
                <BlueHeading>Performing countries</BlueHeading>

                <CountryList>
                    {countryItems} 
                </CountryList>
            </div>  

            <NavLink to="/share">
                <BlueButton>My stats</BlueButton>
            </NavLink>

        </CountriesPage>
    )

};