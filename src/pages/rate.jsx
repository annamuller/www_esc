import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { rate, performers, getPoints } from '../firebase.js';
import { BrowserRouter, Route, NavLink, useLocation, useNavigate } from "react-router-dom";
import back from "../images/back.png"
import logo from "../images/logo.png"
import { 
    RatePage,
    BlueButton,
    BlueHeading,
    PlusMinus,
    ButtonRound,
    BigPinkButton,
    RateForm,
    Logo,
    BackButton,
    Nav,
    Text
 } from "../styles/styledElements";

export default function Rate() {

    const { id } = useParams();

    const countryNow = performers.filter(x => x.id == { id }.id);
    const countryNowCurrentPoints = getPoints({ id }.id).split(",");

    const currentShow = parseInt(countryNowCurrentPoints[0]);
    const currentSing = parseInt(countryNowCurrentPoints[1]);
    const currentSong = parseInt(countryNowCurrentPoints[2]);

    let [countShow, setCountShow] = useState(currentShow);
    let [countSing, setCountSing] = useState(currentSing);
    let [countSong, setCountSong] = useState(currentSong);

    function incrementCountShow() {
        if (countShow + 1 <= 4) {
            countShow = countShow + 1;
            setCountShow(countShow);
        } else window.alert("You can give a maximum of 4 points to each category");
    };
    
    function decrementCountShow() { 
        if (countShow - 1 >= 0) {
            countShow = countShow - 1;
            setCountShow(countShow);
        } else window.alert("You cannot give negative points");
    };

    function incrementCountSing() {    
        if (countSing + 1 <= 4) {
            countSing = countSing + 1;
            setCountSing(countSing);
        } else  window.alert("You can give a maximum of 4 points to each category");
    };
    
    function decrementCountSing() {
        if (countSing - 1 >= 0) {
            countSing = countSing - 1;
            setCountSing(countSing);
        } else window.alert("You cannot give negative points");
    };

    function incrementCountSong() {
        if (countSong + 1 <= 4) {
            countSong = countSong + 1;
            setCountSong(countSong);
        } else window.alert("You can give a maximum of 4 points to each category");
    };
    
    function decrementCountSong() {  
        if (countSong - 1 >= 0) {
            countSong = countSong - 1;
            setCountSong(countSong);
        } else window.alert("You cannot give negative points");
    };

    function rateIt() {
        rate({ id }.id, countShow, countSing, countSong);
    };
    
    return (
        <>
        <RatePage>

            <Nav>
                <NavLink to="/countries">
                    <BackButton src={back}></BackButton>
                </NavLink>
                <Logo src={logo}></Logo>
            </Nav>
            
            <BlueHeading>Rate: { countryNow[0].country }</BlueHeading>
            <Text> { countryNow[0].desc } </Text>

            <RateForm>
                <PlusMinus>
                    <Text>Show ✨</Text>
                    <div className="buttons">
                        <ButtonRound onClick={decrementCountShow}>-</ButtonRound >
                        <div className="count" >{countShow}</div>
                        <ButtonRound onClick={incrementCountShow}>+</ButtonRound >
                    </div>    
                </PlusMinus>
                <PlusMinus>
                    <Text>Singing 🎤</Text>
                    <div className="buttons">
                        <ButtonRound onClick={decrementCountSing}>-</ButtonRound >
                        <div className="count" >{countSing}</div>
                        <ButtonRound onClick={incrementCountSing}>+</ButtonRound >
                    </div>
                </PlusMinus>
                <PlusMinus> 
                    <Text>Song 🎵</Text>
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
                <BlueButton onClick={rateIt}> My stats</BlueButton>
            </NavLink>
            

        </RatePage>
        </>
    )
    

 

};