
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBrHgt4PgPybH88D06aTGPxpAvbBbFxvRQ",
  authDomain: "instagram-react-app-13b9e.firebaseapp.com",
  projectId: "instagram-react-app-13b9e",
  storageBucket: "instagram-react-app-13b9e.appspot.com",
  messagingSenderId: "68297470466",
  appId: "1:68297470466:web:ccd965efedcf6243d56d1b",
  databaseUrl: "https://instagram-react-app-13b9e-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;