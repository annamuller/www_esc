import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { rate, performers } from '../firebase.js';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { 
    RatePage,
    BlueButton,
    BlueHeading,
    PlusMinus,
    ButtonRound,
    BigPinkButton,
    RateForm
 } from "../styles/styledElements";

export default function Rate() {

    const { id } = useParams();

    const countryNow = performers.filter(x => x.id == { id }.id);
    const countryNowCurrentPoints = countryNow[0].points.split(",");

    const currentShow = parseInt(countryNowCurrentPoints[0]);
    const currentSing = parseInt(countryNowCurrentPoints[1]);
    const currentSong = parseInt(countryNowCurrentPoints[2]);

    let [countShow, setCountShow] = useState(currentShow);
    let [countSing, setCountSing] = useState(currentSing);
    let [countSong, setCountSong] = useState(currentSong);

    function incrementCountShow() {
        countShow = countShow + 1;
        if (countShow <= 6) 
            setCountShow(countShow);
        else 
            window.alert("sometext");
    }
    
    function decrementCountShow() {
        countShow = countShow - 1;
        if (countShow >= 0) 
            setCountShow(countShow);
        else 
            window.alert("sometext");

    }

    function incrementCountSing() {
        countSing = countSing + 1;
        if (countSing <= 6) 
            setCountSing(countSing);
        else 
            window.alert("sometext");
    }
    
    function decrementCountSing() {
        countSing = countSing - 1;
        if (countSing >= 0) 
            setCountSing(countSing);
        else 
            window.alert("sometext");
    }

    function incrementCountSong() {
        countSong = countSong + 1;
        if (countSong <= 6) 
            setCountSong(countSong);
        else 
            window.alert("sometext");
    }
    
    function decrementCountSong() {
        countSong = countSong - 1;
        if (countSong >= 0) 
            setCountSong(countSong);
        else 
            window.alert("sometext");
    }

    function rateIt() {
        rate({ id }.id, countShow, countSing, countSong);
        console.log(performers);
    }

    return (
        <>
        <RatePage>
            <BlueHeading>Rate: { countryNow[0].country }</BlueHeading>
            <h2> { countryNow[0].desc } </h2>

            <RateForm>
                <PlusMinus>
                    <h2>Show ✨</h2>
                    <div className="buttons">
                        <ButtonRound onClick={decrementCountShow}>-</ButtonRound >
                        <div className="count" >{countShow}</div>
                        <ButtonRound onClick={incrementCountShow}>+</ButtonRound >
                    </div>    
                </PlusMinus>
                <PlusMinus>
                    <h2>Singing 🎤</h2>
                    <div className="buttons">
                        <ButtonRound onClick={decrementCountSing}>-</ButtonRound >
                        <div className="count" >{countSing}</div>
                        <ButtonRound onClick={incrementCountSing}>+</ButtonRound >
                    </div>
                </PlusMinus>
                <PlusMinus> 
                    <h2>Song 🎵</h2>
                    <div className="buttons">
                        <ButtonRound  onClick={decrementCountSong}>-</ButtonRound >
                        <div className="count" >{countSong}</div>
                        <ButtonRound  onClick={incrementCountSong}>+</ButtonRound >
                    </div>  
                </PlusMinus>
            </RateForm>

            <NavLink to="/countries">
                <BigPinkButton onClick={rateIt}>Submit</BigPinkButton>
            </NavLink>
            
            <NavLink to="/share">
                <BlueButton onClick={rateIt}>My stats</BlueButton>
            </NavLink>
            

        </RatePage>
        </>
    )
    

 

};