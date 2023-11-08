// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDMrkSYtuowR3TrfOXi5en5WqqCBR4ynb8",
  authDomain: "arapp-a0544.firebaseapp.com",
  projectId: "arapp-a0544",
  storageBucket: "arapp-a0544.appspot.com",
  messagingSenderId: "1097784567407",
  appId: "1:1097784567407:web:abae400f38f8052c32cf9a",
  measurementId: "G-46FHLX7045"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const storage = getStorage(app);