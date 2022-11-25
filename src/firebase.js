import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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

// Function to create an Array for performers with their points and other information
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

// Creates the performers array if it doesn't exist yet
if (!performers.length) {initPerformers()};


// Function for setting the cookies. Sets expiration date to 30 days from today
function setCookie(id, cValue) {
    let date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = id + cValue + ";" + expires + "; path=/";
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

// Function to resetting scores. At the moment unused.
function resetCookie() {
    listOfCountries.forEach((doc) => {
        var country = doc.id;
        setCookie(country, "=0,0,0,0");
    })
}

// Takes a country id as a String as the parameter and returns its points as a String
function getPoints(id) {
    var countries = document.cookie.split(";");
    var palautus = ""
    countries.forEach((country) => {
        if (country.includes(id)){
            var points = country.split("=");
            palautus = points[1];
        }
    })
    return palautus;
}

// Function to rate countries. Will update the the cookie for the selected country with updated points.
function rate(id, show, sing, song) {
    var total = Number(0);
    var show = show.toString();
    if (show.length === 0) {
        show = "0"}
        else {
            total += Number(show);
        }
    var sing = sing.toString();
    if (sing.length === 0) {
        sing = "0"}
        else {
            total += Number(sing);
        }
    var song = song.toString();
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
        var p = performers.find((country => country.id === id));
        points = points.split(",");
        points = Number(points[points.length - 1]);
        var name = p.country;
        var flag = p.flag;
        container.push({"id": id, "points": points, "country": name, "flag": flag})

    })
    container = container.sort(function (a,b) {return a.points - b.points}).reverse();
    return container;
}


export {rank, rate, setCookie, getPoints, performers}

// Creates the cookie document.
initCookie();
