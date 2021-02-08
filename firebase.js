import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA82U1Mbw3lQ3MlOVCEDgF_x9TUEEjSiI0",
  authDomain: "messaging-application-native.firebaseapp.com",
  projectId: "messaging-application-native",
  storageBucket: "messaging-application-native.appspot.com",
  messagingSenderId: "892014513742",
  appId: "1:892014513742:web:9357ad872a8d8cff5f7d1f",
  measurementId: "G-5CWRMSNXJ3",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
