// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4NrTlxqL9_vxrpHSno-emGwiUSG1Nrxk",
  authDomain: "personal-portfolio-8404f.firebaseapp.com",
  projectId: "personal-portfolio-8404f",
  storageBucket: "personal-portfolio-8404f.appspot.com",
  messagingSenderId: "617198508280",
  appId: "1:617198508280:web:e476076f3a8aff6e0b030d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;