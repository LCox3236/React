import "./App.css";

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBiRZEtotdSa7kjvCXAAyNB2A0NH-aOWyY",
  authDomain: "northern-gasket-345509.firebaseapp.com",
  projectId: "northern-gasket-345509",
  storageBucket: "northern-gasket-345509.appspot.com",
  messagingSenderId: "845048817533",
  appId: "1:845048817533:web:1f6353ed55f6485dda8e14",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

function App() {
  return <div>test</div>;
}

export default App;
