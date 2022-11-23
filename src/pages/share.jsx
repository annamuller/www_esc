import React from 'react';
import { rank } from '../firebase.js';
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png"
import share from "../images/share.png"
import back from "../images/back.png"
import { 
    SharePage,
    BlueHeading,
    CountryList,
    PinkHeading,
    Logo,
    BackButton,
    WhiteButton,
    ShareSection,
    Nav
 } from "../styles/styledElements";


export default function Share() {

    const top5List = new Array();
    const bottom5List = new Array();
    var topNro = 1;
    var bottomNro = rank().length-4;

    rank().slice(0, 5).map(function(country) {
        if(country.points > 0)
            top5List.push("#" + topNro + " " + country.country);
        else
            top5List.push("#" + topNro + " " +  "???");
        topNro += 1
    });
    
    rank().slice(Math.max(rank().length - 5, 0)).map(function(country) {
        if(country.points > 0)
            bottom5List.push("#" + bottomNro + " " + country.country);
        else
            bottom5List.push("#" + bottomNro + " " + "???");
        bottomNro += 1
    });


    function topFive(country) {
        return <li key={country}>{country}</li>
    };
    
    function bottomFive(country) {
        return <li key={country}>{country} </li>
    };
    
    return(
        <>
            <SharePage>
                
                <Nav>
                    <NavLink to="/countries">
                        <BackButton src={back}></BackButton>
                    </NavLink>
                    <Logo src={logo}></Logo>
                    
                </Nav>
                <BlueHeading>My ESC rankings</BlueHeading>

                <CountryList>
                    <PinkHeading>Top countries</PinkHeading>
                    {top5List.map(item => topFive(item))} 
                </CountryList>

                <CountryList>
                    <PinkHeading>Bottom countries</PinkHeading>
                    {bottom5List.map(item => bottomFive(item))} 
                </CountryList>

            </SharePage>

            <ShareSection>
                <NavLink to="/">
                    <WhiteButton><img src={share} alt="img" />Share</WhiteButton>
                </NavLink>
            </ShareSection>
        </>
    )

};