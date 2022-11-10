import React from 'react';
import { setOfCountries } from '../firebase.js';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { 
    BlueHeading,
    CountriesPage,
    PinkButton,
    BlueButton,
    CountryList
 } from "../styles/styledElements";

const countries = ["🇫🇮  Finland", "🇩🇪  Germany", "🇸🇪  Sweden", "🇪🇪  Estonia", "🇪🇸  Spain", "🇪🇸  Spain", "🇪🇸  Spain"];
const countryItems = countries.map((countrie) =>
  <li>{countrie}<PinkButton>Rate</PinkButton></li>
  
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