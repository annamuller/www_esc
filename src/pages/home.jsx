import React from 'react';
import { setOfCountries } from '../firebase.js';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import logo from '../images/logo.png';

import { 
    StartPage,
    BlueButton
 } from "../styles/styledElements";

export default function Home() {
    
    return(
        <StartPage>
            <img src={logo}></img>
            <NavLink to="/countries">
                <BlueButton>Start ranking</BlueButton>
            </NavLink>
        </StartPage>
    )

};