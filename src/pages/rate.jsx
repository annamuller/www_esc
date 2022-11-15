import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { rate, performers } from '../firebase.js';
import { 
    RatePage,
    BlueButton,
    BlueHeading,
    PlusMinus,
    ButtonRound
 } from "../styles/styledElements";

export default function Rate() {

    const { id } = useParams();

    console.log({ id }.id);

    const countryNow = performers.filter(x => x.id == { id }.id);

    let [count, setCount] = useState(0);

    function incrementCount() {
      count = count + 1;
      setCount(count);
    }
    
    function decrementCount() {
      count = count - 1;
      setCount(count);
    }

    return (
        <>
        <RatePage>
            <BlueHeading>Rate: { countryNow[0].country }</BlueHeading>
            <p> { countryNow[0].desc } </p>

            <div>
                <PlusMinus>
                    <h2>Show ✨</h2>
                    <>
                        <ButtonRound onClick={incrementCount}>-</ButtonRound>
                        <div>{count}</div>
                        <ButtonRound  Click={decrementCount}>+</ButtonRound >
                    </>     
                </PlusMinus>
                <PlusMinus>
                    <h2>Singing 🎤</h2>
                    <>
                        <ButtonRound onClick={incrementCount}>-</ButtonRound >
                        <div>{count}</div>
                        <ButtonRound onClick={decrementCount}>+</ButtonRound >
                    </>
                </PlusMinus>
                <PlusMinus> 
                    <h2>Song 🎵</h2>
                    <>
                        <ButtonRound  onClick={incrementCount}>-</ButtonRound >
                        <div>{count}</div>
                        <ButtonRound  onClick={decrementCount}>+</ButtonRound >
                    </>  
                </PlusMinus>
            </div>
            

        </RatePage>
        </>
    )
    

 

};