import React from 'react';
import { setOfCountries, performers } from '../firebase.js';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { 
    BlueHeading,
    CountriesPage,
    PinkButton,
    BlueButton,
    CountryList
 } from "../styles/styledElements";


const countryItems = performers.map((country) =>
  <li  key={country.country}>{country.flag}    {country.country} <PinkButton>Rate</PinkButton></li>
);

export default function Countries() {
    
    return(
        <CountriesPage>
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