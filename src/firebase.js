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

// Initializing the Firestore database
const app = initializeApp(firebaseApp);
const firestore = getFirestore(app);
const listOfCountries = await getDocs(collection(firestore, "countries"));
var performers = [];

function initPerformers() {
    var points = "0,0,0,0"
    listOfCountries.forEach((doc) => {
        var c = document.cookie.split(";");
        c.forEach((id) => {
            if (id.includes(doc.id)){
                var show = id.split("=");
                points = show[1];
            } else {
                points = "0,0,0,0";
            }
        })
        performers.push({"id": doc.id, "country": doc.get("name"), "flag": doc.get("flag"), "desc": doc.get("desc"), "points": points })
    })
}

initPerformers();


// Function for setting the cookies. Sets expiration date to today +30 days
function setCookie(id, cValue) {
    let date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = id + cValue + ";" + expires + "; path=/";
    //countryArr[id] = cValue;
}

// Initializes the cookies with countries from Firestore database and sets their points. If the cookies exist already,
// does nothing.
function initCookie() {
    var dc = document.cookie;
    if (dc.length === 0){
        listOfCountries.forEach((doc) => {
            var country = doc.id;
            setCookie(country, "=0,0,0,0");
        })
        
    }
}

function resetCookie() {
    listOfCountries.forEach((doc) => {
        var country = doc.id;
        setCookie(country, "=0,0,0,0");
    })
}

function getPoints(id) {
    var countries = document.cookie.split(";");
    countries.forEach((country) => {
        if (country.includes(id)){
            var points = country.split("=");
            return points[1]
        }
    })
}

// Function to rate countries. Will update the the cookie for the selected country with updated points.
function rate(id, show, sing, song) {
    //var maa = valtio.toString();
    var total = Number(0);
    var show = show.toString();//document.getElementById("show").value.toString();
    if (show.length === 0) {
        show = "0"}
        else {
            total += Number(show);
        }
    var sing = sing.toString();//document.getElementById("sing").value.toString();
    if (sing.length === 0) {
        sing = "0"}
        else {
            total += Number(sing);
        }
    var song = song.toString(); //document.getElementById("song").value.toString();
    if (song.length === 0) {song = "0"}
    else {
        total += Number(song);
    }
    var points = show + "," + sing + "," + song + "," + total;
    var toCook = "=" + points
    var c = performers.find((country => country.id === id));
    c.points = show + "," + sing + "," + song + "," + total.toString();
    setCookie(id, toCook)
}

// Function to rank all the countries. Returns an Array of pairs of country ids, country names, total points, and
// country flags sorted by total points.
// Pairs are "id", "points", "country", "flag".
function rank() {
    var container = [];
    //Ranking by total points only for now. Points taken from cookies
    const nations = document.cookie.split(";");
    nations.forEach((c) => {
        var performer = c.split("=");
        var id = performer[0].replace(/\s/g, "");
        var points = performer[1];
        var c = performers.find((country => country.id === id));
        points = points.split(",");
        points = Number(points[points.length - 1]);
        var name = c.country;
        var flag = c.flag;
        container.push({"id": id, "points": points, "country": name, "flag": flag})

    })
    container = container.sort(function (a,b) {return a.points - b.points}).reverse();
    return container;
}


export {rank, rate, setCookie, getPoints, performers}

initCookie();

/*
function getCountries() {
    var countries = [];
    listOfCountries.array?.forEach(element => {
        var country = element.id;
        countries[country] = "0,0,0,0";
    });
       
    return countries
};*/

//export const setOfCountries = getCountries();
//window.querySnapshot = await getDocs(countries);
