import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBQktzvE33yJai2rFH1XsLj8MPJJu0n598",
  authDomain: "ieba-megahack.firebaseapp.com",
  databaseURL: "https://ieba-megahack.firebaseio.com",
  projectId: "ieba-megahack",
  storageBucket: "ieba-megahack.appspot.com",
  messagingSenderId: "1009870968293",
  appId: "1:1009870968293:web:3e33fdadc648b8e93a0b0c"
};

firebase.initializeApp(config);

export default firebase;