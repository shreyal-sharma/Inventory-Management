// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP0cSPdg3BGRFnQIFliigSIN5KUiNfoMw",
  authDomain: "inventory-management-982d1.firebaseapp.com",
  projectId: "inventory-management-982d1",
  storageBucket: "inventory-management-982d1.appspot.com",
  messagingSenderId: "403794825895",
  appId: "1:403794825895:web:3ff5e2d75368fbe2184182",
  measurementId: "G-4SNSCX7CNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export{firestore}