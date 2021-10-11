// Capture the application config at initialization

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDagknk7ak4VxFX94jBZlMV-HrZvEYtefQ",
  authDomain: "mood-journal-f4e00.firebaseapp.com",
  projectId: "mood-journal-f4e00",
  storageBucket: "mood-journal-f4e00.appspot.com",
  messagingSenderId: "931916597013",
  appId: "1:931916597013:web:06a346c6f199293f9d0b1c",
  measurementId: "G-SQREVJDW4D"
};

// Initialize Firebase
const initialize = () => {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return { app, analytics };
};

export default initialize
