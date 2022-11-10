import React from 'react';
import { setOfCountries } from '../firebase.js';
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import { 
    StartPage,
    BlueButton
 } from "../styles/styledElements";

export default function Home() {
    
    return(
        <StartPage>
            <h1>ESC jotain</h1>
            
            <NavLink to="/countries">
                <BlueButton>Start ranking</BlueButton>
            </NavLink>
        </StartPage>
    )

};