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
const countries = collection(firestore, "countries");
const listOfCountries = getDocs(countries);


function getCountries() {
    var countries = [];
    listOfCountries.array?.forEach(element => {
        var country = element.id;
        countries[country] = "0,0,0,0";
    });
       
    return countries
};

export const setOfCountries = getCountries();
//window.querySnapshot = await getDocs(countries);
