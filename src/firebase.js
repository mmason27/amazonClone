import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCRgStjCKH3jPUYihdGzcU1KbcE2Hi7Ytw",
  authDomain: "reactsoloproject.firebaseapp.com",
  projectId: "reactsoloproject",
  storageBucket: "reactsoloproject.appspot.com",
  messagingSenderId: "875316783732",
  appId: "1:875316783732:web:0fbc1ecee24139be0f7f21",
  measurementId: "G-VN2LZ45H6Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };