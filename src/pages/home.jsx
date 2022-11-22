import React from 'react';
import { setOfCountries } from '../firebase.js';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import logo from '../images/logo.png';

import { 
    StartPage,
    BlueButton,
    MainLogo,
    BlueButtonStart
 } from "../styles/styledElements";

export default function Home() {
    
    return(
        <StartPage>
            <MainLogo src={logo}></MainLogo>
            <NavLink to="/countries">
                <BlueButtonStart>Start ranking</BlueButtonStart>
            </NavLink>
        </StartPage>
    )

};