import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAo-om6qSzUbEr08Rcf_5JNR9zSV2AdDrc",
  authDomain: "deglind-programmeert.firebaseapp.com",
  projectId: "deglind-programmeert",
  storageBucket: "deglind-programmeert.appspot.com",
  messagingSenderId: "132127102714",
  appId: "1:132127102714:web:52e597b9b9a8b8cb795b43",
  measurementId: "G-56Q1XVQC5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);