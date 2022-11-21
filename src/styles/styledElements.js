import styled from "styled-components";
import bg from "../images/bg.png";

export const MainCotainer = styled.div`
    height: 100%;
    margin: auto;
    width: 28%;
    background: white;
`;


export const Logo = styled.img`
    width: 6rem;
    margin-bottom: 1rem;

`;

export const MainLogo = styled.img`
    width: 16rem;
    margin-top: 70%;

`;


export const LayOut = styled.div`
    height: 100%;
    background: papayawhip;
    padding: 1em;
`;

export const NavBar = styled.div`


    li {
        list-style-type: none;
    }

`;

export const StartPage = styled.div`
    text-align: center;
    height: 50rem;
    background-image: url(${bg});


    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const BlueButton = styled.button`

    width: 70%;
    height: 66px;
    left: 39px;
    top: 529px;
    background: #0B4CF0;
    border-radius: 33px;
    border: none;
    color: white;
    font-weight: 800;
    font-size: 30px;
    margin: 1rem 0rem;
    
`;

export const BigPinkButton = styled.button`

    width: 100%;
    height: 66px;
    left: 39px;
    top: 529px;
    background: #EB5ADF;
    border-radius: 33px;
    border: none;
    color: white;
    font-weight: 800;
    font-size: 30px;
    margin: 1rem 0rem;
    
`;

export const PinkButton = styled.button`
    width: 96px;
    height: 44px;
    left: 254px;
    top: 239px;
    background: #EB5ADF;
    border-radius: 22px;
    color: white;
    font-weight: 800;
    border: none;
`;

export const GreenButton = styled.button`
    width: 96px;
    height: 44px;
    left: 254px;
    top: 239px;
    border: none;
    background: #7BF788;
    border-radius: 22px;
    color: white;
    font-weight: 800;
`;


export const BlueHeading = styled.h1`

    margin: 1rem 0rem 3rem 0rem;

    font: Sans-serif;
    font-weight: 750;
    font-size: 50px;
    line-height: 55px;

    color: #0B4CF0;
`;


export const PinkHeading = styled.h2`

    font: Sans-serif;
    font-weight: 750;
    font-size: 30px;

    color: #EB5ADF;
`;


export const CountriesPage = styled.div`


    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 3rem  3rem  3rem;
  
`;

export const RatePage = styled.div`


    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 3rem  3rem  3rem;
  
`;


export const SharePage = styled.div`


    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 3rem  3rem  3rem;
  
`;

export const CountryList = styled.ul`

    padding: 0rem;


    li {
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        font: Sans-serif;
        font-weight: 700;
        font-size: 25px;
        line-height: 24px;
        color: #1C1D50;
        margin: 2rem 0rem;
    }

`;

export const PlusMinus = styled.div`

    
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .count {
        width: 44px;
        height: 38px;
        background-color: #EEEEEE;
        border-radius: 22px;
        text-align: center;
        padding-top: 6px;
        font-size: 25px;
        font-weight: 700;
    }
  

`;

export const ButtonRound = styled.button`

    width: 44px;
    height: 44px;
    left: 332px;
    top: 330px;

    background: #0B4CF0;
    border-radius: 22px;
    border: none;
    color: white;
    font-size: 30px;
    font-weight: 900;
    margin: 0rem 0.5rem;


`;

export const RateForm = styled.div`

    margin: 5rem 0rem;


`;



