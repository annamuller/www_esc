import React from 'react';
import { setOfCountries, rank } from '../firebase.js';
import logo from "../images/logo.png"
import { 
    SharePage,
    BlueHeading,
    CountryList,
    PinkHeading,
    Logo
 } from "../styles/styledElements";

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

const top5 = top5List.map((country) =>
  <li key={country}>{country}</li>
);

const bottom5 = bottom5List.map((country) =>
  <li key={country}>{country} </li>
);


export default function Share() {

    
    return(
        <>
            <SharePage>
                <Logo src={logo}></Logo>
                <BlueHeading>My ESC rankings</BlueHeading>

                <CountryList>
                    <PinkHeading>Top countries</PinkHeading>
                    {top5} 
                </CountryList>

                <CountryList>
                    <PinkHeading>Bottom countries</PinkHeading>
                    {bottom5} 
                </CountryList>
                

            </SharePage>
        </>
    )

};

