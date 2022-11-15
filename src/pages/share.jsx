import React from 'react';
import { setOfCountries, rank } from '../firebase.js';

import { 
    SharePage,
    BlueHeading,
    CountryList,
    PinkHeading
 } from "../styles/styledElements";

const top5List = new Array();

rank().map(function(country) {
    if(country.score > 0)
        top5List.push(country);
});

console.log(top5List);


const top5 = rank().slice(0, 5).map((country) =>
  <li>{country.country} </li>
);

const bottom5 = rank().slice(Math.max(rank().length - 5, 0)).map((country) =>
  <li>{country.country} </li>
);


export default function Share() {

    
    return(
        <>
            <SharePage>
                <BlueHeading>My ESC rankings</BlueHeading>

                <CountryList>
                    <PinkHeading>Top 5</PinkHeading>
                    {top5} 
                </CountryList>

                <CountryList>
                    <PinkHeading>Bottom 5</PinkHeading>
                    {bottom5} 
                </CountryList>
                

            </SharePage>
        </>
    )

};

