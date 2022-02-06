// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlm-HH8suJI2WTNmSFTaACzhzJxR79-fs",
  authDomain: "stardewvalley-jcp.firebaseapp.com",
  projectId: "stardewvalley-jcp",
  storageBucket: "stardewvalley-jcp.appspot.com",
  messagingSenderId: "590804883237",
  appId: "1:590804883237:web:e16882e355a4abf8d7eccc",
  measurementId: "G-Y8JM4M3RPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
