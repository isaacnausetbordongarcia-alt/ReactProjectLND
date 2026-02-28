// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSOZXJ-fAEgwjYGEuDzX9nfXqP9k2z-_M",
  authDomain: "database-react-7b010.firebaseapp.com",
  databaseURL: "https://database-react-7b010-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "database-react-7b010",
  storageBucket: "database-react-7b010.firebasestorage.app",
  messagingSenderId: "570927261236",
  appId: "1:570927261236:web:1ef7db27cf35b0f6fecc61",
  measurementId: "G-C7LDWCQR24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database