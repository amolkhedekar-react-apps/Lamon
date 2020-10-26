import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAuF395JawHcUR6t5RRal5f-HHuIr4zoK4",
  authDomain: "lamon-34e00.firebaseapp.com",
  databaseURL: "https://lamon-34e00.firebaseio.com",
  projectId: "lamon-34e00",
  storageBucket: "lamon-34e00.appspot.com",
  messagingSenderId: "1058388930531",
  appId: "1:1058388930531:web:712a4f6e09096b16e73ad6",
  measurementId: "G-87VFK3NTLW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };
