import { initializeApp } from /*"firebase/app"*/ "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"


const firebaseApp = {

    apiKey: "AIzaSyB7QSJYt7tUYaL5aMFXjc2NPZOslAg7HSg",
    authDomain: "ryhma-d6a0a.firebaseapp.com",
    databaseURL: "https://ryhma-d6a0a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ryhma-d6a0a",
    storageBucket: "ryhma-d6a0a.appspot.com",
    messagingSenderId: "984057815027",
    appId: "1:984057815027:web:4c627512898f4abc8dbc86",
    measurementId: "G-SDZSSQGCW2"
  
};

const app = initializeApp(firebaseApp);
const firestore = getFirestore(app);
//const countries = collection(firestore, "countries");
const listOfCountries = await getDocs(collection(firestore, "countries"));
//const contestants 
console.log(listOfCountries)

function setCookie(cName, cValue) {
    let date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + cValue + ";" + expires + "; path=/";
    //countryArr[cName] = cValue;
}

function initCookie() {
    listOfCountries.forEach((doc) => {
        var country = doc.id;
        setCookie(country, "=0,0,0,0");
        /*if (!(Object.keys(countryArr).includes(country))){
            countryArr[country] = "0,0,0,0";
        }*/
    })
    //console.log(countryArr)
}

initCookie();


function getCountries() {
    var countries = [];
    listOfCountries.array?.forEach(element => {
        var country = element.id;
        countries[country] = "0,0,0,0";
    });
       
    return countries
};

//export const setOfCountries = getCountries();
//window.querySnapshot = await getDocs(countries);
