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

    

    const countryNowCurrentPoints = getPoints(country.id).split(",");


 
    const stats = countryNowCurrentPoints[0] + "+" + countryNowCurrentPoints[1] + "+" + countryNowCurrentPoints[2];

    console.log(stats)

    if(getPoints(country.id).split(",")[3] == 0)
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