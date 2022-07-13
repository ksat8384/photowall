// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYzidkbQnbwUXPjb5dg7K_Vt0qEBVQ2zI",
  authDomain: "photowall-56ac3.firebaseapp.com",
  databaseURL: "https://photowall-56ac3-default-rtdb.firebaseio.com",
  projectId: "photowall-56ac3",
  storageBucket: "photowall-56ac3.appspot.com",
  messagingSenderId: "1013458133781",
  appId: "1:1013458133781:web:6ee414da19c56e57beff1c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };
